const choices = ['rock', 'paper', 'scissors'];
let computerSelection;
let playerSelection = 'rock';
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const randomLogic = Math.floor(Math.random() * choices.length)
    let computerSelection = choices[randomLogic]
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log('Tie! Try again')
    } else if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            computerScore++
            console.log(`Computer won! Score: Player: ${playerScore}, Computer: ${computerScore}`)
        } else {
            playerScore++
            console.log(`Player won! Score: Player: ${playerScore}, Computer: ${computerScore}`)
        }
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            computerScore++
            console.log(`Computer won! Score: Player ${playerScore}, Computer ${computerScore}`)
        } else {
            playerScore++
            console.log(`Player won! Score: Player: ${playerScore}, Computer: ${computerScore}`)
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'scissors') {
            computerScore++
            console.log(`Computer won! Score: Player: ${playerScore}, Computer: ${computerScore}`)
        } else {
            playerScore++
            console.log(`Player won! Score: Player: ${playerScore}, Computer: ${computerScore}`)
        }
    }
}
// function getPlayerSelection() {
//     ask for selection in a dialog box using window.prompt()
//     store response in playerSelection var
//     change toLower 
// }

// function playRound(playerSelection, computerSelection) {

// }