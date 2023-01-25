
const options = ["Rock", "Paper", "Scissors"]

function getComputerChoice() {
    const choice = options[Math.floor(Math.random() * 3)];
    return choice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log( `It's a tie ${playerSelection} friends with ${computerSelection}`);
    }
    else if (playerSelection === "Rock" && computerSelection === "Scissors" ||
             playerSelection === "Scissors" && computerSelection === "Paper" ||
             playerSelection === "Paper" && computerSelection === "Rock") {
                console.log( `You win! ${playerSelection} beats ${computerSelection}`);
             }
    else if (playerSelection === "Scissors" && computerSelection === "Rock" ||
            playerSelection === "Paper" && computerSelection === "Scissors" ||
            playerSelection === "Rock" && computerSelection === "Paper") {
                console.log(`You loose! ${computerSelection} beats ${playerSelection}`)
    }
    else {
                console.log("You did not enter your choice")
    }
}





let computerSelection = getComputerChoice();
let playerSelection = prompt("Enter your choice");

playRound(playerSelection, computerSelection)

