const btns = document.querySelectorAll('button');
const userChoiceOutput = document.querySelector('.user-choice');
const computerChoiceOutput = document.querySelector('.computer-choice');
const userScoreOutput = document.querySelector('.user-score');
const computerScoreOutput = document.querySelector('.computer-score');

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
        } else if (result === 'lose') {
            computerScore += 1;
            computerScoreOutput.textContent = computerScore;
        }

        if (checkUserWin()) {
            btns.forEach((button) => {
                button.disabled = true;
            });
        }

        if (checkComputerWin()) {
            btns.forEach((button) => {
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

// function game() {
//     let gameActive = true;

//     let playerScore = 0;
//     let computerScore = 0;

//     while (gameActive) {
//         const playerChoice = prompt('Pick your choice! ');
//         const computerChoice = computerPlay();

//         const result = playRound(playerChoice, computerChoice);

//         if (result === undefined) {
//             console.log('Please enter a valid choice');
//             continue;
//         } else if (result.includes('win')) {
//             playerScore++;
//             console.log('You win this round');
//             console.log(
//                 `Your score: ${playerScore}. Computer score: ${computerScore}`
//             );
//         } else if (result.includes('lose')) {
//             computerScore++;
//             console.log('You lose this round...');
//             console.log(
//                 `Your score: ${playerScore}. Computer score: ${computerScore}`
//             );
//         } else {
//             console.log("It's a tie");
//         }

//         if (playerScore >= 5) {
//             console.log('PLAYER WINS!!!!');
//             gameActive = false;
//         } else if (computerScore >= 5) {
//             console.log('COMPUTER WINS... :(');
//             gameActive = false;
//         }
//     }
// }
