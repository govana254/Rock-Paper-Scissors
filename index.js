const myArray = ["Rock", "Paper", "Scissors"]

function getComputerChoice() {
    return myArray[~~(Math.random()* myArray.length)]
}
console.log(getComputerChoice())