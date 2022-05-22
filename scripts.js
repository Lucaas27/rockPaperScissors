(function () {
    'use strict';

    const computerPlay = () => {

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

    const playRound = (playerSelection, computerSelection) => { }

    console.log(computerPlay());
})()