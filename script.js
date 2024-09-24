//Computer choice array
let rpsArray = ["rock", "paper", "scissors"]

//Create function that randomizes and returns computer choice
function getComputerChoice () {
    return rpsArray[Math.floor(Math.random()* rpsArray.length)]
}

console.log(getComputerChoice())

