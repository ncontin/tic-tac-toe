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
    const result = document.querySelector(".result");

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
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                console.log(Players.currentPlayer.name + "win");
                result.textContent = Players.currentPlayer.name + "wins";
                return board[a];
            }
        }
        return null;
    };

    function resetGame() {
        Gameboard.resetBoard();
        Players.currentPlayer = Players.player1;
        renderBoard();
    }

    const resetBtn = document.getElementById("resetBtn");
    resetBtn?.addEventListener("click", resetGame);

    const playersDiv = document.querySelector(".players");

    const startBtn = document.getElementById("start");
    startBtn?.addEventListener("click", () => {
        startBtn.style.display = "none";
        playersDiv.style.display = "block";
    });

    const submitPlayersName = document.getElementById("btnPlayersName");

    submitPlayersName?.addEventListener("click", () => {
        playersDiv.style.display = "none";
        resetBtn.style.display = "block";
        Players.createPlayers();
        Players.currentPlayer = Players.player1;
        renderBoard();
    });

    return { getBoard, setMark, winCheck, resetBoard };
})();

const Players = (() => {
    const playerOneInput = document.getElementById("playerOne");
    const playerTwoInput = document.getElementById("playerTwo");
    const Player = (name, marker) => {
        return { name, marker };
    };

    let player1 = Player("Player 1", "X");
    let player2 = Player("Player 2", "O");

    const createPlayers = () => {
        player1 = Player(playerOneInput.value, "X");
        player2 = Player(playerTwoInput.value, "O");
    };

    let currentPlayer = player1;

    return { player1, player2, switchPlayer, currentPlayer, createPlayers };
})();

function switchPlayer() {
    Players.currentPlayer = Players.currentPlayer === Players.player1 ? Players.player2 : Players.player1;
}

function renderBoard() {
    console.log("current player is" + Players.currentPlayer.name);
    console.log(Players.player1, Players.player2);
    const board = Gameboard.getBoard();
    const gameboardDiv = document.querySelector("#gameboard");

    const winner = Gameboard.winCheck();
    // Clear the current board
    gameboardDiv.innerHTML = "";

    board.forEach((cell, index) => {
        const cellDiv = document.createElement("div");
        cellDiv.classList.add("cell");
        cellDiv.textContent = cell;
        // gameboardDiv.appendChild(cellDiv);
        cellDiv.addEventListener("click", () => {
            if (!winner && board[index] === "") {
                Gameboard.setMark(index, Players.currentPlayer.marker);
                renderBoard();
                Gameboard.winCheck();
                switchPlayer();
            }
            if (!winner && !board.includes("")) {
                console.log("tie");
            }
        });
        gameboardDiv.appendChild(cellDiv);
    });
}
