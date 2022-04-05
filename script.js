let currentPlayer = "X",
    board = [...new Array(9)].map((_, i) => i),
    inputsContainerElem = document.querySelector(`.inputsContainer`),
    allInputsElem = [...inputsContainerElem.children],
    restartBttnElem = document.querySelector(`.restartBttn`),
    h1Elem = document.querySelector("h1"),
    bttnsContainerElem = document.querySelector(".bttnsContainer"),
    isAIPlaying = false,
    hasGameEnded = false;

inputsContainerElem.addEventListener("click", (item) => handleInputClick(item.target.id));

const handleInputClick = (index) => {
    if (isNaN(board[index]) || hasGameEnded) return;
    allInputsElem[index].value = board[index] = currentPlayer;
    currentPlayer = currentPlayer === "X" ? "O" : "X";

    if (isThereWinner(board) || isTie(board)) onGameEnd();
    if (currentPlayer === "O" && isAIPlaying) AITurn(board);
};

function onGameEnd() {
    restartBttnElem.classList.remove("hide");
    const hasSomeoneWon = isThereWinner(board);
    if (hasSomeoneWon) hasSomeoneWon.forEach((item) => allInputsElem[item].classList.add("winningAnimation"));
    setTimeout(() => (hasSomeoneWon ? alert(`${isAIPlaying ? "AI" : currentPlayer === "O" ? "Player 1" : "Player 2"} has won the Game`) : alert(`It is a tie`)), 1);
    hasGameEnded = true;
}

function AITurn(arr) {
    let bestScores = -Infinity;
    let bestIndex = 0;

    for (let i = 0; i < arr.length; i++) {
        if (!isNaN(arr[i])) {
            arr[i] = "O";
            const score = miniMax(arr);
            arr[i] = i;

            if (score > bestScores) {
                bestScores = score;
                bestIndex = i;
            }
        }
    }

    allInputsElem[bestIndex].click();
}

function miniMax(arr, isAITurn = false) {
    if (isThereWinner(arr)) {
        return isAITurn ? -1 : 1;
    } else if (isTie(arr)) {
        return 0;
    }

    let bestScores = isAITurn ? -Infinity : Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (!isNaN(arr[i])) {
            arr[i] = isAITurn ? "O" : "X";
            const score = miniMax(arr, !isAITurn);
            bestScores = isAITurn ? Math.max(score, bestScores) : Math.min(score, bestScores);
            arr[i] = i;
        }
    }
    return bestScores;
}

const winnerConditionsArr = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

const isThereWinner = (arr) => winnerConditionsArr.find((conditionArr) => conditionArr.every((index) => arr[index] === arr[conditionArr[0]]));
const isTie = (arr) => arr.every((item) => isNaN(item));

function start(ai) {
    isAIPlaying = ai;
    h1Elem.innerHTML += ` With ${ai ? "AI" : "Friend"}`;
    bttnsContainerElem.classList.add("hide");
    inputsContainerElem.classList.remove("hide");
}

function restart() {
    window.location.reload();
}
