
//Declare user score variable 
let userScore = 0 

//Declare computer score variable
let compScore = 0 


//Computer choice array
let rpsArray = ["rock", "paper", "scissors"];

//Selecting the rock button
const rockBtn = document.getElementById("rock");
//Selecting inner HTML of rock button 
const rockBtnTxt = rockBtn.innerHTML;
//console.log(rockBtnTxt)

//Selecting the paper button
const paperBtn = document.getElementById("paper");
//Selecting inner HTML of paper button 
const paperBtnTxt = paperBtn.innerHTML;
//console.log(paperBtnTxt)

//Selecting the scissors button
const scissorsBtn = document.getElementById("scissors");
//Selecting inner HTML of scissors button 
const scissorsBtnTxt = scissorsBtn.innerHTML;
//console.log(scissorsBtnTxt)



//Create function that randomizes and returns computer choice
function getComputerChoice () {
    return rpsArray[Math.floor(Math.random()* rpsArray.length)]
}
console.log(getComputerChoice())

//Create function that takes the user choice

function getUserChoice(choice){
console.log(choice)
}

function getHumanChoice (){
}


