const cells = document.querySelectorAll("[data-cell]");
const messageElement = document.getElementById("message");
const messageText = document.getElementById("message-text");
let isXTurn = true;


// Winning combinations
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

// Start the game
function startGame() {
    cells.forEach(cell => {
        cell.classList.remove("taken");
        cell.textContent = "";
        cell.addEventListener("click", handleClick, { once: true });
    });
    messageElement.style.display = "none";
    isXTurn = true;
}

// Handle cell click
function handleClick(e) {
    const cell = e.target;
    const currentPlayer = isXTurn ? "X" : "O";
    cell.textContent = currentPlayer;
    cell.classList.add("taken");

    if (checkWin(currentPlayer)) {
        endGame(`${currentPlayer} Ganó!`);
    } else if (isDraw()) {
        endGame("Es un empate!");
    } else {
        isXTurn = !isXTurn;
    }
}

// Check for a win
function checkWin(currentPlayer) {
    return winningCombinations.some(combination => {
        return combination.every(index => {
            return cells[index].textContent === currentPlayer;
        });
    });
}

// Check for a draw
function isDraw() {
    return [...cells].every(cell => {
        return cell.textContent === "X" || cell.textContent === "O";
    });
}

// End the game
function endGame(message) {
    messageText.textContent = message;
    messageElement.style.display = "block";
    setTimeout(startGame, 2000);
}

// Initialize the game
startGame();

