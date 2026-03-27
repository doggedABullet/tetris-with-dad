// Tetris Game in JavaScript

// Game Variables
const canvas = document.getElementById('tetris');
const context = canvas.getContext('2d');

const grid = 32;
let score = 0;

// Define the pieces
const pieces = [
    [
        [1, 1, 1, 1] // I piece
    ],
    [
        [1, 1],
        [1, 1] // O piece
    ],
    [
        [0, 1, 1],
        [1, 1, 0] // S piece
    ],
    [
        [1, 1, 0],
        [0, 1, 1] // Z piece
    ],
    [
        [1, 1, 1],
        [0, 1, 0] // T piece
    ],
    [
        [1, 1, 1],
        [1, 0, 0] // L piece
    ],
    [
        [1, 1, 1],
        [0, 0, 1] // J piece
    ]
];

let currentPiece;
let currentPosition;
let gameState = 'playing';

// Create a board
let board = Array.from({ length: 20 }, () => Array(10).fill(0));

// Initialize the game
function startGame() {
    currentPiece = getRandomPiece();
    currentPosition = { x: 3, y: 0 };
    draw();
    drop();
}

// Random piece generator
function getRandomPiece() {
    const index = Math.floor(Math.random() * pieces.length);
    return pieces[index];
}

// Drawing the game
function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawBoard();
    drawPiece(currentPiece, currentPosition);
}

function drawBoard() {
    for (let y = 0; y < board.length; y++) {
        for (let x = 0; x < board[y].length; x++) {
            if (board[y][x]) {
                context.fillStyle = 'blue';
                context.fillRect(x * grid, y * grid, grid, grid);
            }
        }
    }
}

function drawPiece(piece, position) {
    context.fillStyle = 'red';
    for (let y = 0; y < piece.length; y++) {
        for (let x = 0; x < piece[y].length; x++) {
            if (piece[y][x]) {
                context.fillRect((position.x + x) * grid, (position.y + y) * grid, grid, grid);
            }
        }
    }
}

// Collision detection
function isColliding(piece, position) {
    for (let y = 0; y < piece.length; y++) {
        for (let x = 0; x < piece[y].length; x++) {
            if (piece[y][x]) {
                if (board[position.y + y] && board[position.y + y][position.x + x]) {
                    return true;
                }
            }
        }
    }
    return false;
}

// Dropping pieces
function drop() {
    if (gameState === 'playing') {
        currentPosition.y++;
        if (isColliding(currentPiece, currentPosition)) {
            currentPosition.y--;
            merge();
            clearLines();
            newPiece();
        }
        draw();
        setTimeout(drop, 1000);
    }
}

// Merging piece to board
function merge() {
    for (let y = 0; y < currentPiece.length; y++) {
        for (let x = 0; x < currentPiece[y].length; x++) {
            if (currentPiece[y][x]) {
                board[currentPosition.y + y][currentPosition.x + x] = currentPiece[y][x];
            }
        }
    }
}

// Clear complete lines
function clearLines() {
    for (let y = board.length - 1; y >= 0; y--) {
        if (board[y].every(value => value > 0)) {
            board.splice(y, 1);
            board.unshift(Array(10).fill(0));
            score += 10;
        }
    }
}

// Start Game
startGame();

// Key controls
document.addEventListener('keydown', (e) => {
    if (gameState === 'playing') {
        if (e.key === 'ArrowLeft') {
            currentPosition.x--;
            if (isColliding(currentPiece, currentPosition)) {
                currentPosition.x++;
            }
        }
        if (e.key === 'ArrowRight') {
            currentPosition.x++;
            if (isColliding(currentPiece, currentPosition)) {
                currentPosition.x--;
            }
        }
        if (e.key === 'ArrowDown') {
            drop();
        }
        if (e.key === 'ArrowUp') {
            currentPiece = rotate(currentPiece);
            if (isColliding(currentPiece, currentPosition)) {
                currentPiece = rotate(currentPiece, true);
            }
        }
        draw();
    }
});

// Rotate a piece
function rotate(piece, reverse = false) {
    return reverse ? piece.map((val, index) => piece.map(row => row[index]).reverse()) : piece.reverse().map((val, index) => piece.map(row => row[index]));
}