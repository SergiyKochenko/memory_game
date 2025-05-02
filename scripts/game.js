let game = {
    currentGame: [],
    playerMoves: [],
    score: 0,
    turnNumber: 0,
    lastButton: "",
    turnInProgress: false,
    choices: ["button1", "button2", "button3", "button4"]
};

function newGame() {
    game.currentGame = [];
    game.playerMoves = [];
    game.score = 0;

    for (let circle of document.getElementsByClassName("circle")) {
        if (circle.getAttribute("data-listener") !== "true") {
            circle.addEventListener("click", (e) => {
                if (game.currentGame.length > 0 && !game.turnInProgress) {
                    let move = e.target.getAttribute("id");
                    game.lastButton = move;
                    game.playerMoves.push(move);
                    lightsOn(move);
                    playerTurn();
                }
            });
            circle.setAttribute("data-listener", "true");
        }
    }
    showScore();
    addTurn();
}

function addTurn() {
    game.playerMoves = [];
    const randomChoice = game.choices[Math.floor(Math.random() * game.choices.length)];
    if (randomChoice) { // Ensure the random choice is valid
        game.currentGame.push(randomChoice);
        showTurns();
    } else {
        console.error("Invalid choice generated.");
    }
}

function showTurns() {
    game.turnInProgress = true;
    game.turnNumber = 0;
    let turns = setInterval(function () {
        const currentId = game.currentGame[game.turnNumber];
        if (currentId) { // Ensure the current ID is valid
            lightsOn(currentId);
            game.turnNumber++;
            if (game.turnNumber >= game.currentGame.length) {
                clearInterval(turns);
                game.turnInProgress = false;
            }
        } else {
            console.error(`Invalid ID in game.currentGame at index ${game.turnNumber}.`);
            clearInterval(turns);
            game.turnInProgress = false;
        }
    }, 800);
}

function lightsOn(circleId) {
    const circle = document.getElementById(circleId);
    if (circle) { // Ensure the element exists
        circle.classList.add('light');
        setTimeout(() => {
            circle.classList.remove('light');
        }, 500);
    } else {
        console.error(`Element with ID "${circleId}" not found.`);
    }
}

function playerTurn() {
    let i = game.playerMoves.length - 1;
    if (game.currentGame[i] === game.playerMoves[i]) {
        if (game.currentGame.length === game.playerMoves.length) {
            game.score++;
            showScore();
            addTurn();
        }
    } else {
        alert("Wrong move!");
        newGame();
    }
}

function showScore() {
    document.getElementById("score").innerText = game.score;
}

// Ensure compatibility with browser environments
if (typeof module !== "undefined" && module.exports) {
    module.exports = { game, newGame, showScore, addTurn, lightsOn, showTurns, playerTurn };
}