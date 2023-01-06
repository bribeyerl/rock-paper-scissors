const choices = ['rock', 'paper', 'scissors'];
const images = Array.from(document.querySelectorAll('.rps-image'))
let computerSelection;
let computerInt = 0
let playerSelection;
let playerInt = 0
let playerScore = 0;
let computerScore = 0;
const rockBtn = document.querySelector('.rockBtn')
const paperBtn = document.querySelector('.paperBtn')
const scissorsBtn = document.querySelector('.scissorsBtn')
const playerChoices = [rockBtn, paperBtn, scissorsBtn]
const computerChoices = ['rock', 'paper', 'scissors']


document.querySelector('#startBtn').addEventListener('click', game)

playerChoices.forEach(option => {
    option.addEventListener('click', function(){

        playerSelection = option.id
        if(playerSelection === 'rock') {
            playerInt = 1
        } else if (playerSelection === 'paper') {
            playerInt = 2
        } else if (playerSelection === 'scissors') {
            playerInt = 3
        } computerInt = getComputerChoice(computerSelection)
        // game()
    })
})

function getComputerChoice() {
    const randomLogic = Math.floor(Math.random() * choices.length)
    computerSelection = choices[randomLogic]
}

// function getPlayerChoice() {
//     playerSelection = image.dataset.image
// }

function playRound(player, computer) {
    if (playerSelection === computerSelection) {
        console.log('Tie! Try again')
    } else if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            computerScore++
            console.log(`Computer won! ${computerSelection} beats ${playerSelection}! Score: Player - ${playerScore}, Computer - ${computerScore}`)
        } else {
            playerScore++
            console.log(`Player won! ${playerSelection} beats ${computerSelection}! Score: Player - ${playerScore}, Computer - ${computerScore}`)
        }
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            computerScore++
            console.log(`Computer won! ${computerSelection} beats ${playerSelection}! Score: Player - ${playerScore}, Computer - ${computerScore}`)
        } else {
            playerScore++
            console.log(`Player won! ${playerSelection} beats ${computerSelection}! Score: Player - ${playerScore}, Computer - ${computerScore}`)
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'scissors') {
            computerScore++
            console.log(`Computer won! ${computerSelection} beats ${playerSelection}! Score: Player - ${playerScore}, Computer - ${computerScore}`)
        } else {
            playerScore++
            console.log(`Player won! ${playerSelection} beats ${computerSelection}! Score: Player - ${playerScore}, Computer - ${computerScore}`)
        }
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        playRound(playerSelection, computerSelection)
    }
    if (computerScore > playerScore) {
        console.log(`Computer wins game! Final score: ${computerScore} - ${playerScore}`)
    } else {
        console.log(`Player wins game! Final score: ${playerScore} - ${computerScore}`)
    }
}
