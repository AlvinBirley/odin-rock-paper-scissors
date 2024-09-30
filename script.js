//Select div with the id of "score"
let scoreDiv = document.getElementById("score")
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
 if (humanChoice==="rock"&&computerChoice==="rock"){
        const content = document.createElement('div');
        content.classList.add('content');
        content.textContent = 'Rock vs Rock: Tie Game.';
        score.appendChild(content);
 }

 else if (humanChoice==="paper"&&computerChoice==="paper"){
            const content = document.createElement('div');
            content.classList.add('content');
            content.textContent = 'Paper vs Paper: Tie Game.';
            score.appendChild(content);
    }
    else if (humanChoice==="scissors"&&computerChoice==="scissors"){
        const content = document.createElement('div');
        content.classList.add('content');
        content.textContent = 'Scissors vs Scissors: Tie Game.';
        score.appendChild(content);
    }
    
        else if (humanChoice==="rock"&&computerChoice==="paper"){
            const content = document.createElement('div');
            content.classList.add('content');
            content.textContent = 'Rock vs Paper: You lose.';
            score.appendChild(content);

    }

    else if (humanChoice==="rock"&&computerChoice==="scissors"){
        const content = document.createElement('div');
        content.classList.add('content');
        content.textContent = 'Rock vs Scissors: You win.';
        score.appendChild(content);

}
else if (humanChoice==="paper"&&computerChoice==="rock"){
    const content = document.createElement('div');
    content.classList.add('content');
    content.textContent = 'Paper vs Rock: You win.';
    score.appendChild(content);
}

else if (humanChoice==="paper"&&computerChoice==="scissors"){
    const content = document.createElement('div');
    content.classList.add('content');
    content.textContent = 'Paper vs Scissors: You lose.';
    score.appendChild(content);
}

else if (humanChoice==="paper"&&computerChoice==="scissors"){
    const content = document.createElement('div');
    content.classList.add('content');
    content.textContent = 'Paper vs Scissors: You lose.';
    score.appendChild(content);
}
else if (humanChoice==="scissors"&&computerChoice==="rock"){
    const content = document.createElement('div');
    content.classList.add('content');
    content.textContent = 'Scissors vs Rock: You lose.';
    score.appendChild(content);
}
else {
    const content = document.createElement('div');
    content.classList.add('content');
    content.textContent = 'Scissors vs Paper: You win.';
    score.appendChild(content);
}

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