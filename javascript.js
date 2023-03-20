const options = ["rock", "paper", "scissors"];
let buttons = document.querySelectorAll('button');
const playerScoreEl = document.getElementById("player-score")
const computerScoreEl = document.getElementById("computer-score")
const resultPlaceholderEl = document.getElementById("result-placeholder")

function getComputerChoice() {
     return options [Math.floor(Math.random() * options.length)];
}


const playAgainBtn = document.createElement("button");
playAgainBtn.innerHTML = "Play Again!";
playAgainBtn.classList.add("play-again-btn");
playAgainBtn.style.display = "none"
document.querySelector(".selections").appendChild(playAgainBtn)


const playerSelected = document.createElement("span");
playerSelected.innerHTML = "?";
playerSelected.classList.add("player-selected");
document.querySelector(".player-selected-slot").appendChild(playerSelected)

const computerSelected = document.createElement("span");
computerSelected.innerHTML = "?";
computerSelected.classList.add("player-selected");
document.querySelector(".computer-selected-slot").appendChild(computerSelected)


let playerScore = 0;
let computerScore = 0;
let roundLength = 5;


buttons.forEach(function(button){
    button.addEventListener('click', function(){
        const playerSelection = button.id
        const computerSelection = getComputerChoice();
        console.log(playRound(computerSelection,playerSelection))
        let winner = checkWinner(computerSelection, playerSelection)

            if(winner === "player") {
                playerScore++
                playerScoreEl.innerHTML = playerScore;
                resultPlaceholderEl.innerHTML = `You win! <br>Computer chose ${computerSelection}`
            }
            else if (winner === "computer") {
                computerScore++
                computerScoreEl.innerHTML = computerScore;
                resultPlaceholderEl.innerHTML = `You lose! <br>Computer chose ${computerSelection}`
            }
            else if (winner === "tie") {
                resultPlaceholderEl.innerHTML = `It's a tie! <br>Computer chose ${computerSelection} too!`
            }
            
            console.log (playerScore)
            console.log (computerScore)
            playerScoreEl.innerHTML = playerScore;
            computerScoreEl.innerHTML = computerScore;

        if(playerScore === roundLength) {
            console.log(`You defeated the computer!`)
            playerScore = 0;
            computerScore = 0;
            resultPlaceholderEl.innerHTML = `Congratulations! <br><br>You defeated the computer!`
            buttons.forEach(function(button) {
                button.style.display = "none";
              });
              playAgainBtn.style.display = "inline-block"

        }
        else if (computerScore === roundLength) {
            console.log("Awww! You have been defeated by the computer!")
            playerScore = 0;
            computerScore = 0;
            resultPlaceholderEl.innerHTML = `Awww! <br><br>You have been defeated by the computer!`
            buttons.forEach(function(button) {
                button.style.display = "none";
              });
              playAgainBtn.style.display = "inline-block"
        }

        playAgainBtn.addEventListener("click", () => {
            buttons.forEach(function(button) {
                button.style.display = "block";
              });
              playAgainBtn.style.display = "none"
              resultPlaceholderEl.innerHTML = "Choose your weapon!"
              playerScore = 0;
              computerScore = 0;
              playerScoreEl.innerHTML = playerScore;
              computerScoreEl.innerHTML = computerScore;
        })
        
    })
})






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
    let roundResult = checkWinner(computerSelection, playerSelection);
    if (roundResult == "tie") {
        return `It's a tie! ${computerSelection} is same as ${playerSelection}`
    }
    else if (roundResult == "player"){
        return `You win! ${playerSelection} is powerful than ${computerSelection}`
    }
    else {
        return `You lose! ${playerSelection} is weaker than ${computerSelection}`
    }
}





// function getPlayerChoice() {
//     let isInputValid = false
//     while(isInputValid === false) {
//         let playerChoice = prompt("Enter your choice!")
//         if(playerChoice === ""){
//             continue;
//         }
//         else {
//             playerChoice = playerChoice.toLowerCase();
//             if(options.includes(playerChoice)) {
//                 return playerChoice;
//             }
//         }
//     }
// }




// function game() {
//     let playerScore = 0;
//     let computerScore = 0;
//     let roundLength = 5;
//     for (let i = 0; i < roundLength; i++){

//         const playerSelection = getPlayerChoice();
//         const computerSelection = getComputerChoice();
//         console.log(playRound(computerSelection, playerSelection));
//         if(checkWinner(computerSelection, playerSelection) == "player"){
//             playerScore++;
//         }
//         else if (checkWinner(computerSelection, playerSelection) == "computer") {
//             computerScore++;
//         }
//         else if (checkWinner(computerSelection, playerSelection) == "tie") {
//             roundLength++;
//         }
//     }
//     console.log("----------------")
//     if(playerScore > computerScore) {
//         console.log("You're the champion!")
//     }
//     else if(computerScore > playerScore) {
//         console.log("You're a loser")
//     }
//     else {
//         console.log("No one wins")
//     }
// }

// game()