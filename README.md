# Project: Tic Tac Toe | The Odin Project

<a href="https://ncontin.github.io/tic-tac-toe">Live Demo</a>

This project is a web-based Tic Tac Toe game that you can play in your browser. The game is built using HTML, CSS, and JavaScript.

## Project Setup
The project is set up with separate HTML, CSS, and JavaScript files. The gameboard is stored as an array inside a Gameboard object, and the players are stored in Player objects. An additional object controls the flow of the game.

The main goal of this project was to have as little global code as possible. Most of the code is tucked away inside of modules or factories. For instance, the Gameboard and the game flow controller are modules as we only need one of each. The Players are created with factories as we need multiple instances.

## Game Logic
The game logic allows players to add marks to a specific spot on the board. The game is tied to the DOM, letting players click on the gameboard to place their marker. The logic also prevents players from playing in spots that are already taken.

The logic that checks for when the game is over is also implemented. It checks for 3-in-a-row and a tie.

## User Interface
The user interface allows players to put in their names, includes a button to start/restart the game, and adds a display element that congratulates the winning player.



## How to Play
Enter the names of Player 1 and Player 2.
Click the "Start" button to start the game.
Players take turns clicking on the gameboard to place their marker.
The game ends when one player has 3 in a row or all spots on the board are taken. If a player gets 3 in a row, they are the winner. If all spots are taken and no player has 3 in a row, the game is a tie.
The "Reset Board" button can be used to start a new game.
## Conclusion
This project was a great exercise in organizing code and thinking about where each bit of logic should reside. It was also a fun challenge to implement the AI player. Enjoy the game!

    
