const options = ["rock", "paper", "scissors"];


function getComputerChoice() {
     return options [Math.floor(Math.random() * options.length)];
     
}

function getPlayerChoice() {
    let isInputValid = false
    while(isInputValid === false) {
        let playerChoice = prompt("Enter your choice!")
        if(playerChoice === ""){
            continue;
        }
        else {
            playerChoice = playerChoice.toLowerCase();
            if(options.includes(playerChoice)) {
                return playerChoice;
            }
        }
    }
}

function checkWinner(computerSelection, playerSelection) {
    if (computerSelection == playerSelection) {
        return "tie";
    }
    
    else if(computerSelection == "rock" && playerSelection == "paper" ||
        computerSelection == "scissors" && playerSelection == "rock" ||
        computerSelection == "paper" && playerSelection == "scissors") {
        return "player";
    }
    else {
        return "computer"
    }
}
        
function playRound(computerSelection, playerSelection) {
    roundResult = checkWinner(computerSelection, playerSelection);
    if (roundResult == "tie") {
        return "It's a tie!"
    }
    else if (roundResult == "player"){
        return "You win!"
    }
    else {
        return "You lose!"
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++){
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(computerSelection, playerSelection));
        if(checkWinner(computerSelection, playerSelection) == "player"){
            playerScore++;
        }
        else if (checkWinner(computerSelection, playerSelection) == "computer") {
            computerScore++;
        }
    }
    console.log("----------------")
    if(playerScore > computerScore) {
        console.log("You're the champion!")
    }
    else if(computerScore > playerScore) {
        console.log("You're a loser")
    }
    else {
        console.log("No one wins")
    }
}

game()