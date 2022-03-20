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
