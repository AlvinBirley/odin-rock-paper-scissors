//Select div with the id of "score"
const scoreDiv = document.getElementById("score")
//Declare user score variable 
let userScore = 0 

//Declare computer score variable
let compScore = 0 

//User choice stand-in for now
let word = "user choice"

//Computer choice array
let rpsArray = ["rock", "paper", "scissors"];

//Function to get computer choice
function getComputerChoice () {
    return rpsArray[Math.floor(Math.random()* rpsArray.length)]
}

//Declare variable to store computer choice function

let lastUserChoice = ""


function playRound(humanChoice, computerChoice){
    console.log(humanChoice)
    console.log(computerChoice)
    }
    

    function getButtonValue(event) {
        return event.target.value; 
    }
    

    function handleButtonClick(event) {
        const buttonValue = getButtonValue(event); 
       const lastUserChoice = buttonValue
       let robotChoice = getComputerChoice();
       playRound(lastUserChoice, robotChoice)
    }
    
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', handleButtonClick);
    });