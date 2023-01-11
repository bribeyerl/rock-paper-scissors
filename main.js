let computerSelection
let playerSelection
let playerScore = 0
let computerScore = 0

const rpsImages = document.querySelector('.photos')
const startBtn = document.querySelector('#startBtn')
const restartBtn = document.querySelector('.restart')
const scoreboard = document.querySelector('.scoreboard')
const rock = document.querySelector('.rock')
const paper = document.querySelector('.paper')
const scissors = document.querySelector('.scissors')
let score = document.querySelector('#score')
const message = document.querySelector('#winningMessage') 
const playerChoices = document.querySelectorAll('.rps-image')



startBtn.addEventListener('click', beginGame)
restartBtn.addEventListener('click', restartGame)
rock.addEventListener('click', setRock)
paper.addEventListener('click', setPaper)
scissors.addEventListener('click', setScissors)

    function beginGame() {
        startBtn.classList.add('hidden')
        rpsImages.classList.toggle('hidden')
    }

    function getComputerChoice() {
        let computerChoices = ['rock', 'paper', 'scissors']
        return computerChoices[Math.floor(Math.random() * computerChoices.length)]
    }

    function setRock() {
        playerSelection = 'rock'
        computerSelection = getComputerChoice()
        game()
    }

    function setPaper() {
        playerSelection = 'paper'
        computerSelection = getComputerChoice()
        game()
    }

    function setScissors() {
        playerSelection = 'scissors'
        computerSelection = getComputerChoice()
        game()
    }


function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        message.textContent = 'Tie! Try again!'
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
            message.textContent = 'Paper beats rock. Computer won!'
            computerScore++
            score.innerText = `You: ${playerScore} - Computer: ${computerScore}`
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
            message.textContent = 'Paper beats rock. You won!'
            playerScore++
            score.innerText = `You: ${playerScore} - Computer: ${computerScore}`
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
            message.textContent = 'Rock beats scissors. Computer won!'
            computerScore++
            score.innerText = `You: ${playerScore} - Computer: ${computerScore}`
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
            message.textContent = 'Rock beats scissors. You won!'
            playerScore++
            score.innerText = `You: ${playerScore} - Computer: ${computerScore}`
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
            message.textContent = 'Scissors beats paper. Computer won!'
            computerScore++
            score.innerText = `You: ${playerScore} - Computer: ${computerScore}`
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
            message.textContent = 'Scissors beats paper. You won!'
            playerScore++
            score.innerText = `You: ${playerScore} - Computer: ${computerScore}`
        }
    }

function game() {
    if (playerScore > 4 || computerScore > 4) {
        rpsImages.classList.add('hidden')
        restartBtn.classList.toggle('hidden')
        message.classList.add('hidden')
    } else {
        playRound(playerSelection, computerSelection)
    }
}

function restartGame() {
    rpsImages.classList.toggle('hidden')
    restartBtn.classList.toggle('hidden')
    message.classList.toggle('hidden')
    playerScore = 0
    computerScore = 0
    playerSelection = ''
    computerSelection = ''
    message.textContent = ''
    score.textContent = `You: ${playerScore} - Computer: ${computerScore}`
    game()
}
