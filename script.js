const Gameboard = (() => {
    const board = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

    const getBoard = () => board;

    return { getBoard };
})();

const Player = (name, marker) => {
    return { name, marker };
};

const player1 = Player("Player 1", "X");
const player2 = Player("Player 2", "O");
