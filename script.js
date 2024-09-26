
//Declare user score variable 
let userScore = 0 

//Declare computer score variable
let compScore = 0 

//Selecting all 3 buttons
const allBtns = document.querySelectorAll('.my-button');


//Computer choice array
let rpsArray = ["rock", "paper", "scissors"];


//Create function that randomizes and returns computer choice
function getComputerChoice () {
    return rpsArray[Math.floor(Math.random()* rpsArray.length)]
}
console.log(getComputerChoice())

//Create function that takes the user choice
allBtns.forEach(allBtns => {
allBtns.addEventListener("click", function getUserChoice(){
    const getValue = this.innerHTML
    console.log(getValue)
});
});

