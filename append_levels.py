import sys

with open("levels.js", "r", encoding="utf-8") as f:
    content = f.read()

last_bracket_idx = content.rfind("];")

if last_bracket_idx == -1:
    print("Could not find end of array!")
    sys.exit(1)

level_9_and_10 = """    },
    {
        id: 9,
        title: "Level 9: The Ice Cave",
        icon: "🧊",
        introText: "The floor is covered in slippery ice! You cannot move just one step. Once you move in a direction, you slide until you hit a wall. Use the new `super_robot.isWall(direction)` command to write a `slide(direction)` function!",
        gridSize: 9,
        start: {x: 1, y: 1}, direction: 1,
        goal: {x: 4, y: 4},
        enemies: [],
        obstacles: [
            ...Array.from({length: 9}, (_, i) => ({x: i, y: 0})),
            ...Array.from({length: 9}, (_, i) => ({x: i, y: 8})),
            ...Array.from({length: 7}, (_, i) => ({x: 0, y: i+1})),
            ...Array.from({length: 7}, (_, i) => ({x: 8, y: i+1})),
            {x: 7, y: 1},
            {x: 6, y: 7},
            {x: 1, y: 6},
            {x: 2, y: 2},
            {x: 5, y: 3},
            {x: 4, y: 5}
        ],
        tips: [
            "Write a function `slide(dir)` that uses `for i in range(50):` to loop.",
            "Inside the loop, if `super_robot.isWall(dir)` is True, use `break` to stop sliding!",
            "Otherwise, use the correct move command based on `dir`."
        ],
        defaultCode: "def slide(dir):\\n    # Slide until hitting a wall!\\n    for i in range(50):\\n        if super_robot.isWall(dir):\\n            break\\n        \\n        if dir == 'right': super_robot.moveRight()\\n        elif dir == 'down': super_robot.moveDown()\\n        elif dir == 'left': super_robot.moveLeft()\\n        elif dir == 'up': super_robot.moveUp()\\n\\n# Now use your slide function!\\nslide('right')\\nslide('down')\\n"
    },
    {
        id: 10,
        title: "Level 10: The Auto-Solver",
        icon: "🤖",
        introText: "A dark winding maze! You don't know how long the corridors are. You must write an algorithm that automatically walks forward until it hits a wall, then turns! You'll need to keep track of your current direction.",
        gridSize: 11,
        start: {x: 1, y: 1}, direction: 2,
        goal: {x: 9, y: 9},
        enemies: [],
        obstacles: (() => {
            let obs = [];
            let path = new Set();
            for(let y=1; y<=8; y++) path.add('1,'+y);
            for(let x=1; x<=7; x++) path.add(x+',8');
            for(let y=2; y<=8; y++) path.add('7,'+y);
            for(let x=3; x<=7; x++) path.add(x+',2');
            for(let y=2; y<=6; y++) path.add('3,'+y);
            for(let x=3; x<=5; x++) path.add(x+',6');
            for(let y=4; y<=6; y++) path.add('5,'+y);
            for(let x=5; x<=9; x++) path.add(x+',4');
            for(let y=4; y<=9; y++) path.add('9,'+y);
            for(let x=0; x<11; x++) {
                for(let y=0; y<11; y++) {
                    if (!path.has(x+','+y)) obs.push({x: x, y: y});
                }
            }
            return obs;
        })(),
        tips: [
            "Use a variable `current_dir` to track which way you are facing.",
            "If `super_robot.isWall(current_dir)` is True, it's time to turn!",
            "Check other directions (like 'right' or 'left' relative to the map) to find the new open path."
        ],
        defaultCode: "current_dir = 'down'\\n\\nfor i in range(500): # Safety loop\\n    if super_robot.x == 9 and super_robot.y == 9:\\n        break # We won!\\n        \\n    if not super_robot.isWall(current_dir):\\n        # The path is clear, move forward!\\n        if current_dir == 'down': super_robot.moveDown()\\n        elif current_dir == 'up': super_robot.moveUp()\\n        elif current_dir == 'right': super_robot.moveRight()\\n        elif current_dir == 'left': super_robot.moveLeft()\\n    else:\\n        # We hit a wall! Let's find a new direction to turn to.\\n        if current_dir in ['up', 'down']:\\n            # Try turning right or left\\n            pass # YOUR CODE HERE: Check 'right' and 'left' using isWall() and update current_dir\\n            \\n        else:\\n            # Try turning down or up\\n            pass # YOUR CODE HERE: Check 'down' and 'up' using isWall() and update current_dir\\n"
    }
];
"""

new_content = content[:last_bracket_idx] + level_9_and_10

with open("levels.js", "w", encoding="utf-8") as f:
    f.write(new_content)

print("Levels appended successfully.")
