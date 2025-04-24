# Snake Game JS

## Overview

Welcome to the Snake Game! This is a classic arcade-style game where you control a snake to eat apples and grow in length. The goal is to eat as many apples as possible without colliding with your own body or the boundaries of the game area.

## Features

### Play the Game

- Snake Movement: Use the arrow keys to control the direction of the snake.
   - Left Arrow: Move the snake left.
   - Up Arrow: Move the snake up.
   - Right Arrow: Move the snake right.
   - Down Arrow: Move the snake down.
- Snake Growth: Each time the snake eats an apple, it grows longer.
- Apple Spawn: Apples randomly appear on the game grid, and the snake must eat them to score points and grow longer.

### Scoring

- Each apple eaten increases your score by 1 point.
- The score is displayed at the top of the game screen and updates dynamically as you eat apples.

### Collision Detection

- Self-collision: If the snake collides with its own body, the game ends.
- Boundary Collision: If the snake crosses the boundary of the game area, it will appear on the opposite side, making the game seamless.

### UI Components

- Canvas: Displays the game area where the snake and apple appear.
- Score Display: Shows the current score, which is updated every time the snake eats an apple.
- Game Over Alert: When the snake collides with itself, a game-over message appears with the final score.

### Game Reset
- After losing the game, you can restart the game by clicking on the screen. The game resets to its initial state.

## How to Use

1. **Start the Game:**
   - Open the game in a web browser. The snake starts in the center of the game area.

2. **Control the Snake:**
   - Use the arrow keys on your keyboard to control the direction of the snake:
      - Left arrow key to move left.
      - Up arrow key to move up.
      - Right arrow key to move right.
      - Down arrow key to move down.

3. **Eat Apples:**
   - Guide the snake to the randomly spawned apples. Every time the snake eats an apple, it grows longer and your score increases by 1.

4. **Avoid Collisions:**
   - Be careful not to collide with the snake's own body. If the snake collides with itself, the game will end, and a message will display your final score.

5. **Restart the Game:**
   - After the game ends, click anywhere on the screen to restart the game.

## Screenshots

**Gameplay:**
<img src="https://github.com/ElliotOne/Snake-Game-JS/blob/master/screenshots/first.png"/>

**Game Over:**
<img src="https://github.com/ElliotOne/Snake-Game-JS/blob/master/screenshots/second.png"/>

Enjoy the game, and may you achieve the highest score!
