const button = document.querySelector('btn');

button.addEventListener('click', function(event) {
        const buttonValue = event.target.value;

        console.log( buttonValue)
});

function getComputerChoice() {
        let choices = ['rock', 'paper', 'scissors']
        return choices[Math.floor(Math.random() * choices.length)]
        }

function playRound() {
        let computerSelection = computerPlay()
        let result = ""

        if (!choices.includes(playerSelection)) {
        return "Invalid input. Please choose rock, paper, or scissors.";
        }

        if (playerSelection === computerSelection) {
                return "It's a tie!";
        } else if (
                (playerSelection === "rock" && computerSelection === "scissors") ||
                (playerSelection === "paper" && computerSelection === "rock") ||
                (playerSelection === "scissors" && computerSelection === "paper")
        ) {
                return `You win! ${playerSelection} beats ${computerSelection}.`;
        } else {
                return `You lose! ${computerSelection} beats ${playerSelection}.`;
        }
}

console.log(playRound())

function game() {

}


