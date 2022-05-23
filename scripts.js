(function () {
    'use strict';

    let computerSelection;
    let promptUser;
    let playerSelection;
    const choices = ["rock", "paper", "scissors"];

    function computerPlay() {

        // let rand = Math.floor(Math.random() * 16);
        // console.log(rand);
        // if (rand <= 5) {
        //     return ("rock");
        // }
        // else if (rand <= 10) {
        //     return ("paper");
        // } else {
        //     return ("scissors");
        // }
        let rand = Math.floor(Math.random() * choices.length);
        console.log(choices[rand]);
        return (choices[rand]);

    }

    const playRound = (playerSelection, computerSelection) => {

        if (playerSelection === computerSelection) {
            // console.log(`playerSelection: ${playerSelection}`);
            // console.log(`computerSelection: ${computerSelection}`);
            return `It's a draw ! You both chose ${playerSelection}.`
        }
        else if (
            playerSelection === "paper" && computerSelection === "rock"
            ||
            playerSelection === "rock" && computerSelection === "scissors"
            ||
            playerSelection === "scissors" && computerSelection === "paper"
        ) {
            // console.log(`playerSelection: ${playerSelection}`);
            // console.log(`computerSelection: ${computerSelection}`);
            return `You Win! ${playerSelection} beats ${computerSelection}`
        }
        else if (
            computerSelection === "paper" && playerSelection === "rock"
            ||
            computerSelection === "rock" && playerSelection === "scissors"
            ||
            computerSelection === "scissors" && playerSelection === "paper"
        ) {
            // console.log(`playerSelection: ${playerSelection}`);
            // console.log(`computerSelection: ${computerSelection}`);
            return `You Lose! ${computerSelection} beats ${playerSelection}`
        }
        else {
            console.warn("Incorrect Value !!");
            return `You Lose! Invalid choice`
        }
    }

    function game() {
        for (let index = 0; index < 5; index++) {
            computerSelection = computerPlay();
            promptUser = prompt("Rock, paper or scissors?", "")
            playerSelection = promptUser.toLowerCase();
            console.log(playRound(playerSelection, computerSelection));
        }
    }

    game()
})()