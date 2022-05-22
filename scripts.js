(function () {
    'use strict';

    const promptUser = prompt("Rock, paper or scissors?", "")
    let playerSelection = promptUser.toLowerCase();
    let computerSelection = computerPlay();

    function computerPlay() {

        let rand = Math.floor(Math.random() * 16);
        console.log(rand);
        if (rand <= 5) {
            return ("rock");
        }
        else if (rand <= 10) {
            return ("paper");
        } else {
            return ("scissors");
        }
    }

    const playRound = (playerSelection, computerSelection) => {

        if (playerSelection === computerSelection) {
            console.log(`playerSelection: ${playerSelection}`);
            console.log(`computerSelection: ${computerSelection}`);
            return `It's a draw ! You both chose ${playerSelection}.`
        }
        else if (
            playerSelection === "paper" && computerSelection === "rock"
            ||
            playerSelection === "rock" && computerSelection === "scissors"
            ||
            playerSelection === "scissors" && computerSelection === "paper"
        ) {
            console.log(`playerSelection: ${playerSelection}`);
            console.log(`computerSelection: ${computerSelection}`);
            return `You Win! ${playerSelection} beats ${computerSelection}`
        }
        else if (
            computerSelection === "paper" && playerSelection === "rock"
            ||
            computerSelection === "rock" && playerSelection === "scissors"
            ||
            computerSelection === "scissors" && playerSelection === "paper"
        ) {
            console.log(`playerSelection: ${playerSelection}`);
            console.log(`computerSelection: ${computerSelection}`);
            return `You Lose! ${computerSelection} beats ${playerSelection}`
        }
        else {
            console.warn("Incorrect Value !!");
            return `You Lose! Invalid choice`
        }
    }

    console.log(playRound(playerSelection, computerSelection));
})()