const Gameboard = (() => {
    const board = ["", "", "", "", "", "", "", "", ""];
    const getBoard = () => board;
    const setMark = (position, marker) => {
        board[position] = marker;
    };
    const resetBoard = () => {
        for (let index = 0; index < board.length; index++) {
            board[index] = "";
        }
    };
    const winCheck = () => {
        const winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < winningCombinations.length; i++) {
            const [a, b, c] = winningCombinations[i];
            let counter = 0;
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                console.log(currentPlayer + "win");

                return board[a];
            }
        }
        return null;
    };

    return { getBoard, setMark, winCheck, resetBoard };
})();

const Player = (name, marker) => {
    return { name, marker };
};

const player1 = Player("Player 1", "X");
const player2 = Player("Player 2", "O");

let currentPlayer = player1;

function switchPlayer() {
    currentPlayer = currentPlayer === player1 ? player2 : player1;
}

function renderBoard() {
    const board = Gameboard.getBoard();
    const gameboardDiv = document.querySelector("#gameboard");

    // Clear the current board
    gameboardDiv.innerHTML = "";

    board.forEach((cell, index) => {
        const cellDiv = document.createElement("div");
        cellDiv.classList.add("cell");
        cellDiv.textContent = cell;
        // gameboardDiv.appendChild(cellDiv);
        cellDiv.addEventListener("click", () => {
            if (board[index] === "") {
                Gameboard.setMark(index, currentPlayer.marker);
                switchPlayer();
                renderBoard();
                Gameboard.winCheck();
            }
        });
        gameboardDiv.appendChild(cellDiv);
    });
}

renderBoard();
