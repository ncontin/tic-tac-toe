const Gameboard = (() => {
    const board = ["X", "X", "X", "X", "X", "O", "O", "O", "O"];

    const getBoard = () => board;

    return { getBoard };
})();

const Player = (name, marker) => {
    return { name, marker };
};

const player1 = Player("Player 1", "X");
const player2 = Player("Player 2", "O");

function renderBoard() {
    const board = Gameboard.getBoard();
    const gameboardDiv = document.querySelector("#gameboard");

    board.forEach((cell) => {
        const cellDiv = document.createElement("div");
        cellDiv.classList.add("cell");
        cellDiv.textContent = cell;
        gameboardDiv.appendChild(cellDiv);
    });
}

renderBoard();
