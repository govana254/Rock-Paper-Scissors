
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

function playRound ( playerSelection, computerSelection){
        let win_array = [
                [0, 2, 1], 
                [1, 0, 2], 
                [2, 1, 0]
        ];
        let result = win_array[playerSelection][compChoiceInt];
        if (result == 0){
        console.log(`Its a tie! You chose ${playerSelection} and The computer chose ${compChoice.Value}`);
        }
        else if (result == 1){
        console.log(`You won! You chose ${playerSelection} and The computer chose ${compChoice.Value}`);
        }
        else if (result == 2){
        console.log(`You lost! You chose ${playerSelection} and The computer chose ${compChoice.Value}`);
        }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));