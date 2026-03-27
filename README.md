# Tetris Game Instructions

## Game Overview
Experience the classic Tetris game, where you aim to complete horizontal lines by moving and rotating falling blocks.

## Features
- Classic Tetris gameplay
- Real-time multiplayer mode
- Leaderboard with top scores
- Customizable controls
- Sound effects and music

## Setup Guide
1. Clone the repository:
   ```bash
   git clone https://github.com/doggedABullet/tetris-with-dad.git
   ```
2. Navigate to the project directory:
   ```bash
   cd tetris-with-dad
   ```
3. Install the required dependencies:
   ```bash
   npm install
   ```
4. Start the game:
   ```bash
   npm start
   ```

## File Structure
```
/tetris-with-dad
│
├── /src                # Source files
│   ├── /components      # React components
│   ├── /assets          # Game assets (images/sounds)
│   ├── /utils           # Utility functions
│   └── App.js           # Main app file
│
├── index.html          # Main HTML file
├── package.json         # Project metadata and dependencies
└── README.md            # This file
```

## Game Rules
- Blocks fall from the top of the screen. 
- You can move them left, right, or rotate them to fit them into gaps. 
- Completing a horizontal line will remove it from the board and score points.
- The game ends when blocks reach the top of the play area.

## Technologies Used
- React
- JavaScript
- CSS
- HTML

## Browser Compatibility
Tested on:
- Chrome
- Firefox
- Safari
- Edge

## Playing Tips
- Keep your play area organized.
- Try to create Tetris (four-line combo) for maximum points.
- Use the rotate function wisely to fit blocks into tight spaces.

## Future Improvements
- Add new game modes (e.g. time attack, puzzle).
- Include power-ups and special blocks.
- Enhance graphics and animations.
- Implement user accounts for saving progress and scores.
