const Gameboard = (() => {
    const board = ["", "", "", "", "", "", "", "", ""];

    const getBoard = () => board;
    const setMark = (position, marker) => {
        board[position] = marker;
    };
    return { getBoard, setMark };
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
            }
        });
        gameboardDiv.appendChild(cellDiv);
    });
}

renderBoard();
