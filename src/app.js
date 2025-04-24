var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

var grid = 16;
var count = 0;

var snake = {
    // Initial position of the snake
    x: 160, 
    y: 160,

    // Speed of the snake, moving in x or y direction
    dx: grid,
    dy: 0,

    // All points of the snake's body
    cells: [],

    // Snake's length
    maxCells: 4
};

var apple = {
    // Initial position of the apple
    x: 320,
    y: 320
};

// Display score
var resultScore = document.querySelector(".result-score");

// Generate a random number
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// Game loop
function loop() {
    requestAnimationFrame(loop);

    // Slow down the speed of the game
    if (++count < 12) {
        return;
    }

    count = 0;
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Move the snake
    snake.x += snake.dx;
    snake.y += snake.dy;

    // Adjust snake position horizontally at the edge of the screen
    if (snake.x < 0) {
        snake.x = canvas.width - grid;
    }
    else if (snake.x >= canvas.width) {
        snake.x = 0;
    }

    // Adjust snake position vertically at the edge of the screen
    if (snake.y < 0) {
        snake.y = canvas.height - grid;
    }
    else if (snake.y >= canvas.height) {
        snake.y = 0;
    }

    // Store the snake's position - the head of the snake is always at the front of the array
    snake.cells.unshift({ x: snake.x, y: snake.y });

    // Remove cells as it moves
    if (snake.cells.length > snake.maxCells) {
        snake.cells.pop();
    }

    // Display the apple
    context.fillStyle = '#f12f95';
    context.fillRect(apple.x, apple.y, grid - 1, grid - 1);

    // Display the snake's body
    context.fillStyle = '#ff2211';
    snake.cells.forEach(function (cell, index) {

        context.fillRect(cell.x, cell.y, grid - 1, grid - 1);

        // Eating the apple
        if (cell.x === apple.x && cell.y === apple.y) {
            snake.maxCells++;

            resultScore.innerHTML = parseInt(resultScore.innerHTML) + 1;

            // canvas = 400x400 = 25x25 grid
            apple.x = getRandomInt(0, 25) * grid;
            apple.y = getRandomInt(0, 25) * grid;
        }

        // Check for collision with snake's own body
        for (var i = index + 1; i < snake.cells.length; i++) {

            // End game and reset values to initial state
            if (cell.x === snake.cells[i].x && cell.y === snake.cells[i].y) {

                var resultAlert = "You lost the game with " + resultScore.innerHTML + " points. Click to restart."
                
                alert(resultAlert);
		
		resultScore.innerHTML = 0;
		
                snake.x = 160;
                snake.y = 160;
                snake.cells = [];
                snake.maxCells = 4;
                snake.dx = grid;
                snake.dy = 0;

                apple.x = getRandomInt(0, 25) * grid;
                apple.y = getRandomInt(0, 25) * grid;
            }
        }
    });
}

// Keyboard key press event
document.addEventListener('keydown', function (e) {
    // Second part of each condition is to prevent snake from turning into its own body
    // When moving right and left key is pressed, and other similar cases are avoided

    // Left arrow key
    if (e.which === 37 && snake.dx === 0) {
        snake.dx = -grid;
        snake.dy = 0;
    }
    // Up arrow key
    else if (e.which === 38 && snake.dy === 0) {
        snake.dy = -grid;
        snake.dx = 0;
    }
    // Right arrow key
    else if (e.which === 39 && snake.dx === 0) {
        snake.dx = grid;
        snake.dy = 0;
    }
    // Down arrow key
    else if (e.which === 40 && snake.dy === 0) {
        snake.dy = grid;
        snake.dx = 0;
    }
});

// Start the game
requestAnimationFrame(loop);
