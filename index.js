function getComputerChoice(){
        let compChoice = ""
        let choiceNum = Math.floor(Math.random() * 3);
        if (choiceNum == 0){
        compChoice = "rock";
        }
        else if (choiceNum == 1){
        compChoice = "paper";
        }
        else if(choiceNum == 2){
        compChoice = "scissors";
        }
        return compChoice;
}

function playRound(playerSelection) {
        const choices = ["rock", "paper", "scissors"];
        const computerSelection = getComputerChoice();

        playerSelection = playerSelection.toLowerCase();

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

console.log(playRound("paper"))


