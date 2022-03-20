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
