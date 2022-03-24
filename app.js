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
        return "It's a tie!";
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 'You lose!';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'You win!';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'You win!';
    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
        return "It's a tie!";
    } else if (
        playerSelection === 'paper' &&
        computerSelection === 'scissors'
    ) {
        return 'You lose!';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'You lose!';
    } else if (
        playerSelection === 'scissors' &&
        computerSelection === 'paper'
    ) {
        return 'You win!';
    } else if (
        playerSelection === 'scissors' &&
        computerSelection === 'scissors'
    ) {
        return "It's a tie!";
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
