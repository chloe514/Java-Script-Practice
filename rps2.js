// Create a game of rock, paper, scissors that runs until one player has three wins
// Array of possible hands for the game
const hands = ['rock', 'paper', 'scissors'];

// Function to randomly select a hand from the hands array
function getHand() {
    return hands[parseInt(Math.random() * 10) % 3]; // Picks a random index (0, 1, or 2) from hands array
}

// Players defined as objects with a name and getHand function
const player1 = {
    name: 'Player 1',
    getHand: getHand
};

const player2 = {
    name: 'Player 2',
    getHand: getHand
};

// Function to play a single round between two players
function playRound(player1, player2) {
    // Get hands for both players
    const hand1 = player1.getHand();
    const hand2 = player2.getHand();

    // Display players' choices
    console.log(`${player1.name} plays ${hand1}`);
    console.log(`${player2.name} plays ${hand2}`);

    // Determine the winner of the round
    if (hand1 === hand2) {
        console.log("It's a tie!");
        return null; // Return null for tie
    } else if (
        (hand1 === 'rock' && hand2 === 'scissors') ||
        (hand1 === 'paper' && hand2 === 'rock') ||
        (hand1 === 'scissors' && hand2 === 'paper')
    ) {
        console.log(`${player1.name} wins!`);
        return player1; // Return player1 if they win
    } else {
        console.log(`${player2.name} wins!`);
        return player2; // Return player2 if they win
    }
}

// Function to play a game until one player wins a specified number of rounds (playUntil)
function playGame(player1, player2, playUntil) {
    let player1Wins = 0;
    let player2Wins = 0;

    // Continue playing rounds until one player reaches playUntil wins
    while (player1Wins < playUntil && player2Wins < playUntil) {
        const winner = playRound(player1, player2); // Play a round
        if (winner === player1) {
            player1Wins++; // Increment player1's win count
        } else if (winner === player2) {
            player2Wins++; // Increment player2's win count
        }
    }

    // Determine the final winner of the game
    const finalWinner = player1Wins === playUntil ? player1 : player2;
    console.log(`${finalWinner.name} wins the game!`);
    return finalWinner; // Return the final winner
}

// Function to play a tournament between four players, consisting of semi-finals and finals
function playTournament(player1, player2, player3, player4, playUntil) {
    // Play semi-final matches
    const semiFinalWinner1 = playGame(player1, player2, playUntil);
    const semiFinalWinner2 = playGame(player3, player4, playUntil);

    // Play final match between semi-final winners
    const tournamentWinner = playGame(semiFinalWinner1, semiFinalWinner2, playUntil);
    console.log(`${tournamentWinner.name} is the world champion!`);
}

// Define player3 and player4 as objects with name and getHand function
const player3 = {
    name: 'Player 3',
    getHand: getHand
};

const player4 = {
    name: 'Player 4',
    getHand: getHand
};

// Start the tournament with players player1, player2, player3, player4, playing until 3 wins
playTournament(player1, player2, player3, player4, 3);

