// Array of possible hands for the game
const hands = ['rock', 'paper', 'scissors'];

// Function to randomly select a hand from the hands array
function getHand() {
    // Generate a random index and use modulo to ensure it's within range of hands array
    return hands[parseInt(Math.random() * 10) % 3];
}

// Player 1 object with name and getHand function
const player1 = {
    name: 'Player 1',
    getHand: getHand
};

// Player 2 object with name and getHand function
const player2 = {
    name: 'Player 2',
    getHand: getHand
};

// Function to play one round of the game
function playRound(player1, player2) {
    // Get hands for each player using their getHand method
    const hand1 = player1.getHand();
    const hand2 = player2.getHand();

    // Log each player's chosen hand
    console.log(`${player1.name} plays ${hand1}`);
    console.log(`${player2.name} plays ${hand2}`);

    // Determine the winner based on the rules of rock-paper-scissors
    if (hand1 === hand2) {
        console.log("It's a tie!");
        return null; // Return null for tie
    } else if (
        (hand1 === 'rock' && hand2 === 'scissors') ||
        (hand1 === 'paper' && hand2 === 'rock') ||
        (hand1 === 'scissors' && hand2 === 'paper')
    ) {
        console.log(`${player1.name} wins!`);
        return player1; // Return player1 object if player1 wins
    } else {
        console.log(`${player2.name} wins!`);
        return player2; // Return player2 object if player2 wins
    }
}

// Call playRound function with player1 and player2 to play a round of the game
playRound(player1, player2);

