let computerSelection
let computerInt = 0
let playerSelection
let playerChoice
let playerInt = 0
let playerScore = 0
let computerScore = 0
let click
const rpsImages = document.querySelector('.photos')
const startBtn = document.querySelector('#startBtn')

const playerChoices = document.querySelectorAll('.rps-image')

Array.from(playerChoices).forEach(element => element.addEventListener('click', getPlayerChoice))
startBtn.addEventListener('click', beginGame)

    function beginGame() {
        startBtn.classList.add('hidden')
        rpsImages.classList.toggle('hidden')
    }

    function getPlayerChoice(click) {
        if (click.target.classList.contains('rock')) {
            playerSelection = 'rock'
        } else if (click.target.classList.contains('paper')) {
            playerSelection = 'paper'
        } else if (click.target.classList.contains('scissors')){
            playerSelection = 'scissors'
        }
        return playerSelection
    }

    function getComputerChoice() {
        let computerInt = Math.floor(Math.random() * 3 + 1)
        let computerOption = ''

        switch (computerInt) {
            case 1:
                computerOption = 'rock'
                break
            case 2:
                computerOption = 'paper'
                break
            case 3:
                computerOption = 'scissors'
                break
        }
        return computerOption
    }


function playRound(playerSelection, computerSelection) {
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
    computerSelection = getComputerChoice()

    if (playerScore >= 5 || computerScore >= 5) {
        rpsImages.classList.add('hidden')
    } else {
        playRound(playerSelection, computerSelection)
    }
}

//Change all console.log notifications to gui
//Add scoreboard
//Add end game function
//Add restart button
