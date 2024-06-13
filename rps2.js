
const hands = ['rock', 'paper', 'scissors'];


function getHand() {
    return hands[parseInt(Math.random() * 10) % 3];
}


const player1 = {
    name: 'Player 1',
    getHand: getHand
};

const player2 = {
    name: 'Player 2',
    getHand: getHand
};


function playRound(player1, player2) {
    
    const hand1 = player1.getHand();
    const hand2 = player2.getHand();

    
    console.log(`${player1.name} plays ${hand1}`);
    console.log(`${player2.name} plays ${hand2}`);

    
    if (hand1 === hand2) {
        console.log("It's a tie!");
        return null;
    } else if (
        (hand1 === 'rock' && hand2 === 'scissors') ||
        (hand1 === 'paper' && hand2 === 'rock') ||
        (hand1 === 'scissors' && hand2 === 'paper')
    ) {
        console.log(`${player1.name} wins!`);
        return player1;
    } else {
        console.log(`${player2.name} wins!`);
        return player2;
    }
}


function playGame(player1, player2, playUntil) {
    let player1Wins = 0;
    let player2Wins = 0;

    while (player1Wins < playUntil && player2Wins < playUntil) {
        const winner = playRound(player1, player2);
        if (winner === player1) {
            player1Wins++;
        } else if (winner === player2) {
            player2Wins++;
        }
    }

    const finalWinner = player1Wins === playUntil ? player1 : player2;
    console.log(`${finalWinner.name} wins the game!`);
    return finalWinner;
}


function playTournament(player1, player2, player3, player4, playUntil) {
    const semiFinalWinner1 = playGame(player1, player2, playUntil);
    const semiFinalWinner2 = playGame(player3, player4, playUntil);
    const tournamentWinner = playGame(semiFinalWinner1, semiFinalWinner2, playUntil);
    console.log(`${tournamentWinner.name} is the world champion!`);
}


const player3 = {
    name: 'Player 3',
    getHand: getHand
};

const player4 = {
    name: 'Player 4',
    getHand: getHand
};


playTournament(player1, player2, player3, player4, 3);
