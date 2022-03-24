const btns = document.querySelectorAll('button');
const userChoiceOutput = document.querySelector('.user-choice');
const computerChoiceOutput = document.querySelector('.computer-choice');
const userScoreOutput = document.querySelector('.user-score');
const computerScoreOutput = document.querySelector('.computer-score');
const outputMessage = document.querySelector('.output-message');
const reloadBtn = document.getElementById('reload-btn');

let userScore = 0;
let computerScore = 0;

btns.forEach((button) => {
    button.addEventListener('click', function (e) {
        const computerChoice = computerPlay();
        userChoiceOutput.textContent = e.target.id;
        computerChoiceOutput.textContent = computerChoice;

        const result = playRound(e.target.id, computerChoice);

        if (result === 'win') {
            userScore += 1;
            userScoreOutput.textContent = userScore;
            outputMessage.textContent = 'User wins this round!';
        } else if (result === 'lose') {
            computerScore += 1;
            computerScoreOutput.textContent = computerScore;
            outputMessage.textContent = 'Computer wins this round!';
        } else {
            outputMessage.textContent = "It's a tie!";
        }

        if (checkUserWin()) {
            btns.forEach((button) => {
                outputMessage.textContent = 'USER WINS';
                button.disabled = true;
            });
        }

        if (checkComputerWin()) {
            btns.forEach((button) => {
                outputMessage.textContent = 'COMPUTER WINS';
                button.disabled = true;
            });
        }
    });
});

function checkUserWin() {
    if (userScore === 5) {
        return true;
    } else {
        return false;
    }
}

function checkComputerWin() {
    if (computerScore === 5) {
        return true;
    } else {
        return false;
    }
}

function computerPlay() {
    const rand = Math.floor(Math.random() * 3) + 1;
    if (rand === 3) {
        return 'Rock';
    } else if (rand === 2) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === 'rock' && computerSelection === 'rock') {
        return 'tie';
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 'lose';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'win';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'win';
    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
        return 'tie!';
    } else if (
        playerSelection === 'paper' &&
        computerSelection === 'scissors'
    ) {
        return 'lose';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'lose';
    } else if (
        playerSelection === 'scissors' &&
        computerSelection === 'paper'
    ) {
        return 'win';
    } else if (
        playerSelection === 'scissors' &&
        computerSelection === 'scissors'
    ) {
        return 'tie';
    }
}

reloadBtn.addEventListener('click', function () {
    userScore = 0;
    computerScore = 0;
    userScoreOutput.textContent = userScore;
    computerScoreOutput.textContent = computerScore;
    outputMessage.textContent = 'Make a choice!';
    userChoiceOutput.textContent = '';
    computerChoiceOutput.textContent = '';

    btns.forEach((button) => {
        button.disabled = false;
    });
});
