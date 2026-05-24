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
            "You will need to moveRight() 4 times and moveDown() 4 times to reach the goal."
        ],
        defaultCode: "# Type your code below to reach the goal.\n# You can use super_robot.moveRight() and super_robot.moveDown()\nsuper_robot.moveRight()\n"
    },
    {
        id: 2,
        title: "Level 2: The Ambush",
        icon: "🧩",
        introText: "Enemies block your path! It's time to learn about 'if' statements. An 'if' statement lets your code make decisions: 'IF the enemy is close, THEN attack'. Fix the code to only attack when distance is 1, otherwise keep moving right.",
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
            "Update the `if` statement to check distance: `if super_robot.distanceTo(enemy) == 1:`",
            "Use an `else:` block to move right when the enemy is further away."
        ],
        defaultCode: "for i in range(20):\n    enemy = super_robot.findNearestEnemy()\n    if enemy:\n        # FIX THIS: Only attack if the distance is 1\n        super_robot.attack(enemy)\n    # Add an else statement here to move right\n"
    },
    {
        id: 3,
        title: "Level 3: The Cyber Boss",
        icon: "👑",
        introText: "A massive Boss Bot blocks the exit. It has high health, so be prepared for a long fight.",
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
            "The boss has a lot of health! You will need a lot of attacks to defeat it.",
            "Ensure you check the distance to the enemy before attacking.",
            "Use a combination of checking for enemies, attacking, and moving."
        ],
        defaultCode: "for i in range(10):\n    enemy = super_robot.findNearestEnemy()\n    # Add your code here! \n    # Check if enemy is near, then attack. Otherwise, move right.\n    \n"
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
            "The custom function move_and_clear is given to you. Use it to navigate the maze!",
            "You need to call the function multiple times with different directions.",
            "The sequence is Right, Down, Left, Down, and Right again. Count the steps!"
        ],
        defaultCode: "def move_and_clear(direction, steps):\n    for i in range(steps):\n        enemy = super_robot.findNearestEnemy()\n        if enemy and super_robot.distanceTo(enemy) == 1:\n            super_robot.attack(enemy)\n        elif direction == 'right': super_robot.moveRight()\n        elif direction == 'down': super_robot.moveDown()\n        elif direction == 'left': super_robot.moveLeft()\n        elif direction == 'up': super_robot.moveUp()\n\n# The function is defined above. Call it to navigate the maze!\n# Example: move_and_clear('right', 8)\nmove_and_clear('right', 8)\n"
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
            "The BossBot path is shorter but requires many attacks. The Virus path is longer.",
            "Choose a path by calling move_and_clear with the correct sequence of directions.",
            "Carefully count the blocks to determine how many steps you need in each direction."
        ],
        defaultCode: "def move_and_clear(direction, steps):\n    for i in range(steps):\n        enemy = super_robot.findNearestEnemy()\n        if enemy and super_robot.distanceTo(enemy) == 1:\n            super_robot.attack(enemy)\n        elif direction == 'right': super_robot.moveRight()\n        elif direction == 'down': super_robot.moveDown()\n        elif direction == 'left': super_robot.moveLeft()\n        elif direction == 'up': super_robot.moveUp()\n\n# Choose to go down the left path or the right path first!\nmove_and_clear('left', 3)\n"
    },
    {
        id: 6,
        title: "Level 6: The Tactical Arena",
        icon: "🏟️",
        introText: "Welcome to the Tactical Arena. Enemies wait in distinct groups. If you walk straight up the middle, you will pull them all at once and be destroyed! Design a path along the edges to pull them one group at a time.",
        gridSize: 13,
        start: {x: 6, y: 11}, direction: 0,
        goal: {x: 6, y: 1},
        obstacles: [
            ...Array.from({length: 13}, (_, i) => ({x: i, y: 0})),
            ...Array.from({length: 13}, (_, i) => ({x: i, y: 12})),
            ...Array.from({length: 11}, (_, i) => ({x: 0, y: i+1})),
            ...Array.from({length: 11}, (_, i) => ({x: 12, y: i+1})),
            // Pillars to break line of sight
            {x: 4, y: 4}, {x: 8, y: 4},
            {x: 4, y: 8}, {x: 8, y: 8}
        ],
        enemies: [
            // Left Pod
            { id: "rogue1", type: "RogueBot", x: 3, y: 7, hp: 10, maxHp: 10, damage: 2 },
            { id: "virus1", type: "Virus", x: 2, y: 7, hp: 5, maxHp: 5, damage: 1 },
            // Right Pod
            { id: "rogue2", type: "RogueBot", x: 9, y: 7, hp: 10, maxHp: 10, damage: 2 },
            { id: "virus2", type: "Virus", x: 10, y: 7, hp: 5, maxHp: 5, damage: 1 },
            // Center Guard
            { id: "boss1", type: "BossBot", x: 6, y: 4, hp: 45, maxHp: 45, damage: 3 }
        ],
        tips: [
            "Enemies attack if you get within 4 steps of them.",
            "Write your own `move_and_clear` function to navigate safely.",
            "Try moving to x=2 to clear the left side first, then walk across to x=10 for the right side!"
        ],
        defaultCode: "def move_and_clear(direction, steps):\n    for i in range(steps):\n        enemy = super_robot.findNearestEnemy()\n        if enemy and super_robot.distanceTo(enemy) == 1:\n            super_robot.attack(enemy)\n        elif direction == 'right': super_robot.moveRight()\n        elif direction == 'down': super_robot.moveDown()\n        elif direction == 'left': super_robot.moveLeft()\n        elif direction == 'up': super_robot.moveUp()\n\n# Design your path! Don't go straight up the middle!\n"
    },
    {
        id: 7,
        title: "Level 7: The Core Bypass",
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
            "Bosses won't attack unless you get closer than 5 steps.",
            "Map out your coordinates. The first safe intersection is at x=6, y=1.",
            "Plot a path that stays exactly 5 or more steps away from the sleeping Bosses."
        ],
        defaultCode: "def move_and_clear(direction, steps):\n    for i in range(steps):\n        enemy = super_robot.findNearestEnemy()\n        if enemy and super_robot.distanceTo(enemy) == 1:\n            super_robot.attack(enemy)\n        elif direction == 'right': super_robot.moveRight()\n        elif direction == 'down': super_robot.moveDown()\n        elif direction == 'left': super_robot.moveLeft()\n        elif direction == 'up': super_robot.moveUp()\n\n# Tip: move_and_clear('right', 5) takes you to x=6. That is safely 5 steps away from x=11!\nmove_and_clear('right', 5)\n"
    },
    {
        id: 8,
        title: "Level 8: The Priority Target",
        icon: "🎯",
        introText: "There is a massive swarm of decoy Viruses, but the real threat is the BossBot guarding the exit! `findNearestEnemy()` will just get you stuck fighting decoys. Use `super_robot.getEnemies()` to get a list of all enemies, write a loop to find the BossBot, and hunt it down directly!",
        gridSize: 13,
        start: {x: 1, y: 1}, direction: 1,
        goal: {x: 11, y: 11},
        obstacles: [
            ...Array.from({length: 13}, (_, i) => ({x: i, y: 0})),
            ...Array.from({length: 13}, (_, i) => ({x: i, y: 12})),
            ...Array.from({length: 11}, (_, i) => ({x: 0, y: i+1})),
            ...Array.from({length: 11}, (_, i) => ({x: 12, y: i+1}))
        ],
        enemies: [
            { id: "v1", type: "Virus", x: 3, y: 3, hp: 5, maxHp: 5, damage: 1 },
            { id: "v2", type: "Virus", x: 4, y: 3, hp: 5, maxHp: 5, damage: 1 },
            { id: "v3", type: "Virus", x: 3, y: 4, hp: 5, maxHp: 5, damage: 1 },
            { id: "v4", type: "Virus", x: 8, y: 8, hp: 5, maxHp: 5, damage: 1 },
            { id: "v5", type: "Virus", x: 7, y: 8, hp: 5, maxHp: 5, damage: 1 },
            { id: "v6", type: "Virus", x: 8, y: 7, hp: 5, maxHp: 5, damage: 1 },
            { id: "boss1", type: "BossBot", x: 11, y: 11, hp: 45, maxHp: 45, damage: 3 }
        ],
        tips: [
            "`enemies = super_robot.getEnemies()` returns a Python list of all enemies on the board.",
            "You can use `for e in enemies:` to check each one.",
            "Find the enemy where `e.type == 'BossBot'` and hunt it down!"
        ],
        defaultCode: "enemies = super_robot.getEnemies()\ntarget = None\n\n# Iterate through the list to find the BossBot\nfor e in enemies:\n    if e.type == 'BossBot':\n        target = e\n\n# Now write your tracking logic to hunt down 'target' instead of the nearest enemy!\nfor i in range(500):\n    if target and target.hp > 0:\n        if super_robot.distanceTo(target) == 1:\n            super_robot.attack(target)\n        elif target.x > super_robot.x:\n            super_robot.moveRight()\n        # Add logic to move Left, Down, and Up!\n    else:\n        if super_robot.x < 11:\n            super_robot.moveRight()\n        elif super_robot.y < 11:\n            super_robot.moveDown()\n"
    }
];
