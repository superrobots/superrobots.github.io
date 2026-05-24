class Entity {
    constructor(id, x, y, hp, maxHp, damage, type) {
        this.id = id;
        this.x = x;
        this.y = y;
        this.hp = hp;
        this.maxHp = maxHp;
        this.damage = damage;
        this.type = type;
        this.isAlive = true;
    }

    takeDamage(amount) {
        this.hp -= amount;
        if (this.hp <= 0) {
            this.hp = 0;
            this.isAlive = false;
        }
    }
}

class GameEngine {
    constructor(levelData, onAction) {
        this.level = levelData;
        this.gridSize = levelData.gridSize;
        this.hero = new Entity("super_robot", levelData.start.x, levelData.start.y, 30, 30, 5, "Super Robot");
        this.hero.dir = levelData.direction; // 0=Up, 1=Right, 2=Down, 3=Left
        
        this.enemies = levelData.enemies.map(e => new Entity(e.id, e.x, e.y, e.hp, e.maxHp, e.damage, e.type));
        this.obstacles = levelData.obstacles || [];
        
        this.turn = 0;
        this.onAction = onAction; // Callback to trigger UI updates/animations
        
        this.isGameOver = false;
        this.isVictory = false;
        
        this.actionQueue = [];
        this.maxActions = 5000;
    }
    
    getEntities() {
        return [this.hero, ...this.enemies.filter(e => e.isAlive)];
    }
    
    isCellFree(x, y) {
        if (x < 0 || x >= this.gridSize || y < 0 || y >= this.gridSize) return false;
        if (this.obstacles.some(o => o.x === x && o.y === y)) return false;
        if (this.getEntities().some(e => e.x === x && e.y === y && e.isAlive)) return false;
        return true;
    }
    
    distance(e1, e2) {
        return Math.abs(e1.x - e2.x) + Math.abs(e1.y - e2.y);
    }
    
    // --- Hero API ---
    
    moveHero(dx, dy, dirName) {
        if (this.isGameOver) return;
        
        // Update direction based on movement if desired, or keep separate
        if (dx === 1) this.hero.dir = 1;
        if (dx === -1) this.hero.dir = 3;
        if (dy === 1) this.hero.dir = 2;
        if (dy === -1) this.hero.dir = 0;
        
        let targetX = this.hero.x + dx;
        let targetY = this.hero.y + dy;
        
        if (this.isCellFree(targetX, targetY)) {
            this.hero.x = targetX;
            this.hero.y = targetY;
            this.queueAction({ type: 'move', entity: 'super_robot', x: this.hero.x, y: this.hero.y, dir: this.hero.dir });
        } else {
            this.queueAction({ type: 'bump', entity: 'super_robot', dir: this.hero.dir });
        }
        this.processEnemyTurn();
        this.checkWinCondition();
    }
    
    moveRight() { this.moveHero(1, 0, 'right'); }
    moveLeft() { this.moveHero(-1, 0, 'left'); }
    moveUp() { this.moveHero(0, -1, 'up'); }
    moveDown() { this.moveHero(0, 1, 'down'); }
    
    findNearestEnemy() {
        let aliveEnemies = this.enemies.filter(e => e.isAlive);
        if (aliveEnemies.length === 0) return null;
        
        let nearest = aliveEnemies[0];
        let minDist = this.distance(this.hero, nearest);
        
        for (let i = 1; i < aliveEnemies.length; i++) {
            let dist = this.distance(this.hero, aliveEnemies[i]);
            if (dist < minDist) {
                minDist = dist;
                nearest = aliveEnemies[i];
            }
        }
        return nearest;
    }
    
    attack(enemy) {
        if (this.isGameOver) return;
        
        if (!enemy || !enemy.isAlive) {
            this.queueAction({ type: 'attack_miss', entity: 'super_robot' });
            this.processEnemyTurn();
            return;
        }
        
        // Face the enemy
        if (enemy.x > this.hero.x) this.hero.dir = 1;
        else if (enemy.x < this.hero.x) this.hero.dir = 3;
        else if (enemy.y > this.hero.y) this.hero.dir = 2;
        else if (enemy.y < this.hero.y) this.hero.dir = 0;
        
        let dist = this.distance(this.hero, enemy);
        if (dist === 1) {
            enemy.takeDamage(this.hero.damage);
            this.queueAction({ type: 'attack', entity: 'super_robot', target: enemy.id, damage: this.hero.damage, targetHp: enemy.hp });
            if (!enemy.isAlive) {
                this.queueAction({ type: 'death', entity: enemy.id });
            }
        } else {
            this.queueAction({ type: 'attack_miss', entity: 'super_robot', reason: 'out_of_range' });
        }
        
        this.processEnemyTurn();
        this.checkWinCondition();
    }
    
    // --- Enemy AI ---
    
    processEnemyTurn() {
        if (this.isGameOver) return;
        
        for (let enemy of this.enemies) {
            if (!enemy.isAlive) continue;
            
            let dist = this.distance(enemy, this.hero);
            if (dist === 1) {
                // Attack hero
                this.hero.takeDamage(enemy.damage);
                this.queueAction({ type: 'attack', entity: enemy.id, target: 'super_robot', damage: enemy.damage, targetHp: this.hero.hp });
                if (!this.hero.isAlive) {
                    this.isGameOver = true;
                    this.queueAction({ type: 'death', entity: 'super_robot' });
                }
            } else if (dist < 5) { // Aggro radius
                // Move towards hero (dumb pathfinding)
                let dx = Math.sign(this.hero.x - enemy.x);
                let dy = Math.sign(this.hero.y - enemy.y);
                
                // Try moving in x direction first
                if (dx !== 0 && this.isCellFree(enemy.x + dx, enemy.y)) {
                    enemy.x += dx;
                    this.queueAction({ type: 'move', entity: enemy.id, x: enemy.x, y: enemy.y });
                } else if (dy !== 0 && this.isCellFree(enemy.x, enemy.y + dy)) {
                    enemy.y += dy;
                    this.queueAction({ type: 'move', entity: enemy.id, x: enemy.x, y: enemy.y });
                }
            }
        }
        this.turn++;
    }
    
    checkWinCondition() {
        if (this.level.killAllToWin) {
            if (this.enemies.every(e => !e.isAlive)) {
                this.isVictory = true;
                this.isGameOver = true;
                this.queueAction({ type: 'victory' });
            }
        } else if (this.level.goal && this.hero.x === this.level.goal.x && this.hero.y === this.level.goal.y) {
            this.isVictory = true;
            this.isGameOver = true;
            this.queueAction({ type: 'victory' });
        }
    }
    
    queueAction(action) {
        if (this.actionQueue.length < this.maxActions) {
            this.actionQueue.push(action);
        } else if (this.actionQueue.length === this.maxActions) {
            this.actionQueue.push({ type: 'error', message: 'Maximum execution limit reached.' });
            this.isGameOver = true;
        }
    }
}
