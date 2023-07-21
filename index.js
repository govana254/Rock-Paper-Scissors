let playerSelection = prompt()

console.log(playerSelection)



function getComputerChoice() {
    const number = Math.floor(Math.random() * 3);
        if (number % 3 === 0) {
                return 'rock';
        }
        if (number % 3 === 1) {
                return 'paper';
        }
        return 'scissors';
}
console.log(getComputerChoice())

let computerSelection = getComputerChoice()

function playRound() {
        
        if (playerSelection === computerSelection){
                return "You draw"
        }else if ((playerSelection === "rock") && (computerSelection === "paper")){
                return "You Lose! Paper beats Rock"
        }else if ((playerSelection === "paper") && (computerSelection === "scissors")){
                return "You Lose! Scissor beats Paper"
        }else if ((playerSelection === "scissors") && (computerSelection === "rock")){
                return "You Lose! Rock beats Scissors"
        }else if ((playerSelection === "paper") && (computerSelection === "rock")){
                return "You Win! Paper beats Rock"
        }else if ((playerSelection === "scissors") && (computerSelection === "paper")){
                return "You Win! Scissor beats Paper"
        }else if ((playerSelection === "rock") && (computerSelection === "scissors")){
                return "You Win! Rock beats Scissors"
        }
}


console.log(playRound())