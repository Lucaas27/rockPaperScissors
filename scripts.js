const playerChoices = document.querySelector('.game__choices-player').childNodes;
const compChoices = document.querySelectorAll('.game__choices-computer>button');
const choices = ['rock', 'paper', 'scissors'];
const playerScoreDisplay = document.querySelector('.score__player');
const compScoreDisplay = document.querySelector('.score__computer');
const logSection = document.querySelector('.log');
// variable to store round winner
let roundResult;
// player and computer scores
let playerScore = 0;
let compScore = 0;
// player and computer choices
let playerResult;
let compResult;
// get buttons of chosen pick
let compBtn;
let playerBtn;
// variable to store round number
let roundCounter = 0;
// array with current round winner
let roundWinner = [];


// iterate over player buttons and add an event listener for a click to each
playerChoices.forEach(choice => {
	choice.addEventListener('click', play);

})

// main call back function, gets called when a player button is clicked
function play(e) {
	// console.log(e.target.innerText)
	playerResult = e.target.classList[0]; //0 to retrieve first class;
	compResult = choices[Math.floor(Math.random() * choices.length)]
	// get buttons of chosen pick
	compBtn = document.querySelector(`.comp-${compResult}`);
	playerBtn = document.querySelector(`.${playerResult}`);

	addAnimation();
	results();
	displayLogScore();
	checkGameWinner();
}

// Decides round result and push it into the roundWinner array
function results() {

	// increment round counter
	roundCounter++;

	// possible results
	switch (playerResult + compResult) {
		case 'scissorspaper':
		case 'rockscissors':
		case 'paperrock':
			roundResult = `Round #${roundCounter}: You Win! ${captalise(playerResult)} beats ${captalise(compResult)}`;
			playerScore++
			// Player wins the game
			switch (playerScore) {
				case 5:
					roundResult = `Round #${roundCounter}: YOU WON THE GAME!!!! ${captalise(playerResult)} beats ${captalise(compResult)}`
			}
			break;
		case 'rockpaper':
		case 'paperscissors':
		case 'scissorsrock':
			roundResult = `Round #${roundCounter}: You Lose! ${captalise(compResult)} beats ${captalise(playerResult)}`;
			compScore++
			// Computer wins the game
			switch (compScore) {
				case 5:
					roundResult = `Round #${roundCounter}: YOU LOST THE GAME!!!! ${captalise(compResult)} beats ${captalise(playerResult)} :(`
			}
			break;
		case 'rockrock':
		case 'paperpaper':
		case 'scissorsscissors':
			roundResult = `Round #${roundCounter}: It's a draw! ${captalise(playerResult)} and ${captalise(compResult)}`;
			break;
	}
	// push round results to an array
	roundWinner.push(roundResult)

}


// Display Score and round logs on the page
function displayLogScore() {
	// Create a paragraph 
	const result = document.createElement('p');
	// append latest round result to the element 
	result.append(roundWinner[roundWinner.length - 1])
	// and insert it in the page
	logSection.insertAdjacentElement('afterbegin', result);
	// display scores
	playerScoreDisplay.textContent = playerScore;
	compScoreDisplay.textContent = compScore;
}


// Adds button animation
function addAnimation() {
	// Adds animation for Computer and player "Button" 
	[playerBtn, compBtn].forEach(btn => {
		btn.classList.add('pick-animation');
		// removes animation at the end of transition
		btn.addEventListener('transitionend', () => {
			if (!btn) return;
			btn.classList.remove('pick-animation')
		})
	})
}


// Check for a winner. Whoever gets 5 wins win the game.
function checkGameWinner() {
	if (playerScore >= 5 || compScore >= 5) {
		playerChoices.forEach(choice => {
			// remove listener if there is a winner
			choice.removeEventListener('click', play);
		})
		// Creates a button to refresh page
		const newGame = document.createElement('button');
		newGame.textContent = `Play again`;
		newGame.classList.add('refresh');
		// append button between game choices and log
		logSection.insertAdjacentElement('beforebegin', newGame);
		// Refresh Page Button at the end of the game
		newGame.addEventListener('click', refreshPage);
	}
}


// Function to refresh page
function refreshPage() {
	window.location.reload(true);
}

// captalise words
function captalise(word) {
	const firstLetter = word.charAt(0);
	const upper = firstLetter.toUpperCase();
	const newWord = upper + word.slice(1);
	return newWord;
}