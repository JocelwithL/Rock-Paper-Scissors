
const options = ["rock", "paper", "scissors"]

function getComputerChoice() {
    return options[Math.floor(Math.random() * options.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `It's a tie ${playerSelection} friends with ${computerSelection}`;
    }
    else if (playerSelection === "rock" && computerSelection === "scissors" ||
             playerSelection === "scissors" && computerSelection === "paper" ||
             playerSelection === "paper" && computerSelection === "rock") {
                return `You win! ${playerSelection} beats ${computerSelection}`;
             }
    else if (playerSelection === "scissors" && computerSelection === "rock" ||
            playerSelection === "paper" && computerSelection === "scissors" ||
            playerSelection === "rock" && computerSelection === "paper") {
                return `You loose! ${computerSelection} beats ${playerSelection}`;
    }
    else {
                return "You did not enter your choice correctly";
    }
}

function getPlayerChoice(){
    let validatedInput = false;
    while(validatedInput == false){
        let choice = prompt("Enter you choice!");
        if (choice == null) {
            continue;
        }
        choice = choice.toLowerCase();
        if(options.includes(choice)) {
            validatedInput = true;
            return choice;
        }
        
    }
}

function game () {
    for (let i=0; i<5; i++) {
        const computerSelection = getComputerChoice();
        let playerSelection = getPlayerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
    console.log("Game Over")
}

game();