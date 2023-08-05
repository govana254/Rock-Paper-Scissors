let playerScore = 0
let computerScore = 0
const buttons = document.querySelectorAll('input')

function getComputerChoice() {
        let choices = ['rock', 'paper', 'scissors']
        return choices[Math.floor(Math.random() * choices.length)]
        }

function playRound() {
        let computerSelection = computerPlay()
        let result = ""

        if (playerSelection === computerSelection) {
                result = ('It\'s a tie. You both chose ' + playerSelection
                + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore);
        } else if (
                (playerSelection === "rock" && computerSelection === "scissors") ||
                (playerSelection === "paper" && computerSelection === "rock") ||
                (playerSelection === "scissors" && computerSelection === "paper")
        ) {
                return `You win! ${playerSelection} beats ${computerSelection}.`;
        } else {
                computerScore += 1
                result = ('You lose! ' + computerSelection + ' beats ' + playerSelection
                        + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)
        
                if (computerScore == 5) {
                        result += '<br><br>I won the game! Reload the page to play again'
                        disableButtons()
                }
        }
        document.getElementById('result').innerHTML = result
        return
}

buttons.forEach(button =>{
        button.addEventListener('click', function(){
                playRound(button.value)
                })
        })