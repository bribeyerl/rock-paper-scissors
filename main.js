const choices = ['rock', 'paper', 'scissors'];
let computerSelection;
let playerSelection;
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const randomLogic = Math.floor(Math.random() * choices.length)
    computerSelection = choices[randomLogic]
}

function getPlayerChoice() {
    let choice = prompt('Please type Rock, paper or scissors below.')
    playerSelection = choice.toLowerCase()
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

function game() {
    for (let i = 0; i < 5; i++) {
        getComputerChoice()
        getPlayerChoice()
        playRound(playerSelection, computerSelection)
    }
    if (computerScore > playerScore) {
        console.log(`Computer wins game! Final score: ${computerScore} - ${playerScore}`)
    } else {
        console.log(`Player wins game! Final score: ${playerScore} - ${computerScore}`)
    }
}
