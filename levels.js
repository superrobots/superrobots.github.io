const DungeonLevels = [
    {
        id: 1,
        title: "Level 1: The Awakening",
        icon: "🔰",
        introText: "Welcome to the Cyber Dungeon! Write code to guide your robot to the exit 🏁. Use super_robot.moveRight() and super_robot.moveDown().",
        gridSize: 7,
        start: {x: 1, y: 1}, direction: 1,
        goal: {x: 5, y: 5},
        obstacles: [
            {x: 0, y: 0}, {x: 1, y: 0}, {x: 2, y: 0}, {x: 3, y: 0}, {x: 4, y: 0}, {x: 5, y: 0}, {x: 6, y: 0},
            {x: 0, y: 1}, {x: 0, y: 2}, {x: 0, y: 3}, {x: 0, y: 4}, {x: 0, y: 5}, {x: 0, y: 6},
            {x: 6, y: 1}, {x: 6, y: 2}, {x: 6, y: 3}, {x: 6, y: 4}, {x: 6, y: 5}, {x: 6, y: 6},
            {x: 1, y: 6}, {x: 2, y: 6}, {x: 3, y: 6}, {x: 4, y: 6}, {x: 5, y: 6}
        ],
        enemies: [],
        tips: [
            "Use a `for` loop like `for i in range(4):` to repeat your movements.",
            "Remember that Python uses indentation (spaces) inside loops!",
            "You will need to moveRight and moveDown multiple times."
        ],
        defaultCode: "# Type your code below\nsuper_robot.moveRight()\n"
    },
    {
        id: 2,
        title: "Level 2: The Ambush",
        icon: "🧩",
        introText: "Enemies block your path! Fix the code to only attack when you are close, and keep moving right.",
        gridSize: 9,
        start: {x: 1, y: 4}, direction: 1,
        goal: {x: 7, y: 4},
        obstacles: [
            {x: 0, y: 0}, {x: 1, y: 0}, {x: 2, y: 0}, {x: 3, y: 0}, {x: 4, y: 0}, {x: 5, y: 0}, {x: 6, y: 0}, {x: 7, y: 0}, {x: 8, y: 0},
            {x: 0, y: 8}, {x: 1, y: 8}, {x: 2, y: 8}, {x: 3, y: 8}, {x: 4, y: 8}, {x: 5, y: 8}, {x: 6, y: 8}, {x: 7, y: 8}, {x: 8, y: 8},
            {x: 0, y: 1}, {x: 0, y: 2}, {x: 0, y: 3}, {x: 0, y: 4}, {x: 0, y: 5}, {x: 0, y: 6}, {x: 0, y: 7},
            {x: 8, y: 1}, {x: 8, y: 2}, {x: 8, y: 3}, {x: 8, y: 4}, {x: 8, y: 5}, {x: 8, y: 6}, {x: 8, y: 7},
            {x: 1, y: 3}, {x: 2, y: 3}, {x: 3, y: 3}, {x: 4, y: 3}, {x: 5, y: 3}, {x: 6, y: 3}, {x: 7, y: 3},
            {x: 1, y: 5}, {x: 2, y: 5}, {x: 3, y: 5}, {x: 4, y: 5}, {x: 5, y: 5}, {x: 6, y: 5}, {x: 7, y: 5}
        ],
        enemies: [
            { id: "rogue1", type: "RogueBot", x: 3, y: 4, hp: 10, maxHp: 10, damage: 2 },
            { id: "rogue2", type: "RogueBot", x: 5, y: 4, hp: 10, maxHp: 10, damage: 2 }
        ],
        tips: [
            "Your robot is swinging at air! It needs to move closer to the enemies first.",
            "Update the `if` statement to check distance: `if enemy and super_robot.distanceTo(enemy) == 1:`",
            "This will make the robot move right if the enemy is far away, and attack when close."
        ],
        defaultCode: "for i in range(20):\n    enemy = super_robot.findNearestEnemy()\n    if enemy:\n        # FIX THIS: Only attack if distance is 1\n        super_robot.attack(enemy)\n    # Add an else statement here to moveRight\n"
    },
    {
        id: 3,
        title: "Level 3: The Cyber Boss",
        icon: "👑",
        introText: "The final challenge! A massive Boss Bot blocks the exit. It has high health, so be prepared for a long fight.",
        gridSize: 9,
        start: {x: 1, y: 4}, direction: 1,
        goal: {x: 7, y: 4},
        obstacles: [
            {x: 0, y: 0}, {x: 1, y: 0}, {x: 2, y: 0}, {x: 3, y: 0}, {x: 4, y: 0}, {x: 5, y: 0}, {x: 6, y: 0}, {x: 7, y: 0}, {x: 8, y: 0},
            {x: 0, y: 8}, {x: 1, y: 8}, {x: 2, y: 8}, {x: 3, y: 8}, {x: 4, y: 8}, {x: 5, y: 8}, {x: 6, y: 8}, {x: 7, y: 8}, {x: 8, y: 8},
            {x: 0, y: 1}, {x: 0, y: 2}, {x: 0, y: 3}, {x: 0, y: 4}, {x: 0, y: 5}, {x: 0, y: 6}, {x: 0, y: 7},
            {x: 8, y: 1}, {x: 8, y: 2}, {x: 8, y: 3}, {x: 8, y: 4}, {x: 8, y: 5}, {x: 8, y: 6}, {x: 8, y: 7}
        ],
        enemies: [
            { id: "boss", type: "BossBot", x: 5, y: 4, hp: 45, maxHp: 45, damage: 3 }
        ],
        tips: [
            "The boss has a lot of health! A simple attack loop is all you need.",
            "Make sure your loop keeps running until the boss is defeated."
        ],
        defaultCode: "for i in range(30):\n    enemy = super_robot.findNearestEnemy()\n    # Add code to check distance, attack the boss, or move right!\n    \n"
    },
    {
        id: 4,
        title: "Level 4: The Winding Maze",
        icon: "🌀",
        introText: "The dungeon opens up! Navigate this larger maze. You will need to use moveRight, moveDown, moveLeft, and moveUp.",
        gridSize: 11,
        start: {x: 1, y: 1}, direction: 1,
        goal: {x: 9, y: 9},
        obstacles: [
            // Top and Bottom borders
            ...Array.from({length: 11}, (_, i) => ({x: i, y: 0})),
            ...Array.from({length: 11}, (_, i) => ({x: i, y: 10})),
            // Left and Right borders
            ...Array.from({length: 9}, (_, i) => ({x: 0, y: i+1})),
            ...Array.from({length: 9}, (_, i) => ({x: 10, y: i+1})),
            // Block 1 (Forces path right, then down)
            ...[2,3,4].flatMap(y => Array.from({length: 8}, (_, i) => ({x: i+1, y: y}))),
            // Block 2 (Forces path left, then down)
            ...[6,7,8].flatMap(y => Array.from({length: 8}, (_, i) => ({x: i+2, y: y})))
        ],
        enemies: [
            { id: "virus1", type: "Virus", x: 5, y: 1, hp: 5, maxHp: 5, damage: 1 },
            { id: "virus2", type: "Virus", x: 9, y: 3, hp: 5, maxHp: 5, damage: 1 },
            { id: "virus3", type: "Virus", x: 5, y: 5, hp: 5, maxHp: 5, damage: 1 },
            { id: "virus4", type: "Virus", x: 1, y: 7, hp: 5, maxHp: 5, damage: 1 }
        ],
        tips: [
            "Use loops to travel long distances.",
            "Watch out for enemies in the corridors! You can attack them or let them come to you.",
            "You need to move Right, Down, Left, Down, and Right again."
        ],
        defaultCode: "def move_and_clear(direction, steps):\n    for i in range(steps):\n        enemy = super_robot.findNearestEnemy()\n        if enemy and super_robot.distanceTo(enemy) == 1:\n            super_robot.attack(enemy)\n        if direction == 'right': super_robot.moveRight()\n        elif direction == 'down': super_robot.moveDown()\n        elif direction == 'left': super_robot.moveLeft()\n        elif direction == 'up': super_robot.moveUp()\n\n# Try using the function!\nmove_and_clear('right', 8)\n"
    },
    {
        id: 5,
        title: "Level 5: The Security Checkpoint",
        icon: "⚖️",
        introText: "Two paths lead to the exit. One path is blocked by a BossBot, the other by a swarm of Viruses. Choose your path wisely!",
        gridSize: 11,
        start: {x: 5, y: 1}, direction: 2,
        goal: {x: 5, y: 9},
        obstacles: [
            // Top and Bottom borders
            ...Array.from({length: 11}, (_, i) => ({x: i, y: 0})),
            ...Array.from({length: 11}, (_, i) => ({x: i, y: 10})),
            // Left and Right borders
            ...Array.from({length: 9}, (_, i) => ({x: 0, y: i+1})),
            ...Array.from({length: 9}, (_, i) => ({x: 10, y: i+1})),
            // Center Block (Separating the paths)
            ...[3,4,5,6,7].flatMap(y => Array.from({length: 3}, (_, i) => ({x: i+4, y: y})))
        ],
        enemies: [
            { id: "boss1", type: "BossBot", x: 2, y: 5, hp: 45, maxHp: 45, damage: 3 },
            { id: "virus1", type: "Virus", x: 8, y: 4, hp: 5, maxHp: 5, damage: 1 },
            { id: "virus2", type: "Virus", x: 8, y: 5, hp: 5, maxHp: 5, damage: 1 },
            { id: "virus3", type: "Virus", x: 8, y: 6, hp: 5, maxHp: 5, damage: 1 },
            { id: "virus4", type: "Virus", x: 8, y: 7, hp: 5, maxHp: 5, damage: 1 }
        ],
        tips: [
            "The BossBot has a lot of health but is alone. The Viruses are weak but there are many.",
            "Write your movement sequence to go down the left or the right hallway.",
            "Remember to include your attack loop!"
        ],
        defaultCode: "def move_and_clear(direction, steps):\n    for i in range(steps):\n        enemy = super_robot.findNearestEnemy()\n        if enemy and super_robot.distanceTo(enemy) == 1:\n            super_robot.attack(enemy)\n        if direction == 'right': super_robot.moveRight()\n        elif direction == 'down': super_robot.moveDown()\n        elif direction == 'left': super_robot.moveLeft()\n        elif direction == 'up': super_robot.moveUp()\n\n# Choose to go left or right first\nmove_and_clear('left', 3)\n"
    },
    {
        id: 6,
        title: "Level 6: The Arena",
        icon: "🏟️",
        introText: "Welcome to the Arena. Numerous enemies wait for you. They will attack if you get too close. Defeat them and reach the exit!",
        gridSize: 11,
        start: {x: 5, y: 9}, direction: 0,
        goal: {x: 5, y: 1},
        obstacles: [
            ...Array.from({length: 11}, (_, i) => ({x: i, y: 0})),
            ...Array.from({length: 11}, (_, i) => ({x: i, y: 10})),
            ...Array.from({length: 9}, (_, i) => ({x: 0, y: i+1})),
            ...Array.from({length: 9}, (_, i) => ({x: 10, y: i+1})),
            // Pillars
            {x: 3, y: 3}, {x: 7, y: 3},
            {x: 3, y: 7}, {x: 7, y: 7}
        ],
        enemies: [
            { id: "rogue1", type: "RogueBot", x: 5, y: 5, hp: 10, maxHp: 10, damage: 2 },
            { id: "rogue2", type: "RogueBot", x: 2, y: 4, hp: 10, maxHp: 10, damage: 2 },
            { id: "rogue3", type: "RogueBot", x: 8, y: 4, hp: 10, maxHp: 10, damage: 2 },
            { id: "virus1", type: "Virus", x: 4, y: 2, hp: 5, maxHp: 5, damage: 1 },
            { id: "virus2", type: "Virus", x: 6, y: 2, hp: 5, maxHp: 5, damage: 1 }
        ],
        tips: [
            "Take them on one by one! If you rush in, they might all attack you at once.",
            "Use your while loop to clear enemies before moving forward."
        ],
        defaultCode: "while True:\n    enemy = super_robot.findNearestEnemy()\n    if enemy and super_robot.distanceTo(enemy) == 1:\n        super_robot.attack(enemy)\n    elif enemy:\n        # Consider moving towards the enemy or just moving up\n        super_robot.moveUp()\n    else:\n        super_robot.moveUp()\n"
    },
    {
        id: 7,
        title: "Level 7: The Gauntlet",
        icon: "⚔️",
        introText: "A long, winding path filled with enemies. You'll need to survive until the end. Manage your health carefully!",
        gridSize: 13,
        start: {x: 1, y: 1}, direction: 1,
        goal: {x: 11, y: 11},
        obstacles: [
            // Top and Bottom borders
            ...Array.from({length: 13}, (_, i) => ({x: i, y: 0})),
            ...Array.from({length: 13}, (_, i) => ({x: i, y: 12})),
            // Left and Right borders
            ...Array.from({length: 11}, (_, i) => ({x: 0, y: i+1})),
            ...Array.from({length: 11}, (_, i) => ({x: 12, y: i+1})),
            // Block 1 (Forces path right to x=11)
            ...[2,3,4].flatMap(y => Array.from({length: 10}, (_, i) => ({x: i+1, y: y}))),
            // Block 2 (Forces path left to x=1)
            ...[6,7,8,9,10].flatMap(y => Array.from({length: 10}, (_, i) => ({x: i+2, y: y})))
        ],
        enemies: [
            { id: "virus1", type: "Virus", x: 6, y: 1, hp: 5, maxHp: 5, damage: 1 },
            { id: "rogue1", type: "RogueBot", x: 11, y: 3, hp: 10, maxHp: 10, damage: 2 },
            { id: "virus2", type: "Virus", x: 8, y: 5, hp: 5, maxHp: 5, damage: 1 },
            { id: "virus3", type: "Virus", x: 5, y: 5, hp: 5, maxHp: 5, damage: 1 },
            { id: "virus4", type: "Virus", x: 2, y: 5, hp: 5, maxHp: 5, damage: 1 },
            { id: "rogue2", type: "RogueBot", x: 1, y: 8, hp: 10, maxHp: 10, damage: 2 },
            // A weakened BossBot
            { id: "boss1", type: "BossBot", x: 8, y: 11, hp: 20, maxHp: 20, damage: 3 }
        ],
        tips: [
            "You have to fight through all of them. Use a robust clear-and-move function.",
            "The BossBot at the end is damaged, but still hits hard!"
        ],
        defaultCode: "def move_and_clear(direction, steps):\n    for i in range(steps):\n        enemy = super_robot.findNearestEnemy()\n        if enemy and super_robot.distanceTo(enemy) == 1:\n            super_robot.attack(enemy)\n        if direction == 'right': super_robot.moveRight()\n        elif direction == 'down': super_robot.moveDown()\n        elif direction == 'left': super_robot.moveLeft()\n        elif direction == 'up': super_robot.moveUp()\n\n# Navigate the S-shape gauntlet\nmove_and_clear('right', 10)\n"
    },
    {
        id: 8,
        title: "Level 8: The Core Bypass",
        icon: "☢️",
        introText: "The core is guarded by multiple BossBots. You don't have enough health to fight them all! Bosses only attack if you get closer than 5 steps. Find the stealth path!",
        gridSize: 13,
        start: {x: 1, y: 1}, direction: 1,
        goal: {x: 11, y: 11},
        obstacles: [
            ...Array.from({length: 13}, (_, i) => ({x: i, y: 0})),
            ...Array.from({length: 13}, (_, i) => ({x: i, y: 12})),
            ...Array.from({length: 11}, (_, i) => ({x: 0, y: i+1})),
            ...Array.from({length: 11}, (_, i) => ({x: 12, y: i+1})),
            ...[2,3,4,5, 7,8,9,10].map(x => ({x: x, y: 3})),
            ...[2,3,4,5, 7,8,9,10].map(x => ({x: x, y: 9})),
            ...[2,3,4,5, 7,8,9,10].map(y => ({x: 3, y: y})),
            ...[2,3,4,5, 7,8,9,10].map(y => ({x: 9, y: y}))
        ],
        enemies: [
            { id: "boss1", type: "BossBot", x: 11, y: 1, hp: 45, maxHp: 45, damage: 3 },
            { id: "boss2", type: "BossBot", x: 1, y: 11, hp: 45, maxHp: 45, damage: 3 },
            { id: "boss3", type: "BossBot", x: 6, y: 11, hp: 45, maxHp: 45, damage: 3 },
            { id: "bossFinal", type: "BossBot", x: 11, y: 11, hp: 45, maxHp: 45, damage: 3 }
        ],
        tips: [
            "Count your steps carefully! 5 steps away is safe. 4 steps away means they attack.",
            "Map out your coordinates. You start at (1,1). The first intersection is at (6,1) or (1,6).",
            "Only fight the final BossBot guarding the exit."
        ],
        defaultCode: "def move_and_clear(direction, steps):\n    for i in range(steps):\n        enemy = super_robot.findNearestEnemy()\n        if enemy and super_robot.distanceTo(enemy) == 1:\n            super_robot.attack(enemy)\n        if direction == 'right': super_robot.moveRight()\n        elif direction == 'down': super_robot.moveDown()\n        elif direction == 'left': super_robot.moveLeft()\n        elif direction == 'up': super_robot.moveUp()\n\n# Tip: moveRight(5) takes you to x=6. That is 5 steps away from x=11!\nmove_and_clear('right', 5)\n"
    }
];
