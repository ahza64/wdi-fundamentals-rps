////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    var playerMove = getPlayerMove();
    var computerMove = getComputerMove();
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of //playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats //'rock'.
    if (playerMove == 'rock') {
        if (computerMove === 'paper') {
            winner = 'computer';
        } else if (computerMove === 'scissors') {
            winner = 'player';
        } else if (computerMove === 'rock') {
            winner = 'tie';
        }
    } else if (playerMove === 'paper') {
        if (computerMove === 'scissors') {
            winner = 'computer';
        } else if (computerMove === 'rock') {
            winner = 'player';
        } else if (computerMove === 'paper') {
            winner = 'tie';
        }
    } else if (playerMove === 'scissors') {
        if (computerMove === 'rock') {
            winner = 'computer';
        } else if (computerMove === 'paper') {
            winner = 'player';
        } else if (computerMove === 'scissors') {
            winner = 'tie';
        }
    }
    console.log("player move: " + playerMove, "computer move: " + computerMove);
    return winner;
}
function playToFive(round) {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    while ((playerWins < 5) && (computerWins < 5)) {
        var round = getWinner();
        if (round == 'player') {
            playerWins += 1;
            console.log("score: player: " + playerWins, ", computer: " + computerWins);
            console.log("round winner: " + round);
        } else if (round == 'computer') {
            computerWins += 1;
            console.log("score: player: " + playerWins, ", computer: " + computerWins);
            console.log("round winner: " + round);
        } else {
            computerWins += 1;
            playerWins += 1;
            console.log("score: player: " + playerWins, ", computer: " + computerWins);
            console.log("round winner: " + round);
        }
    }
    return [playerWins, computerWins];
}
playToFive();