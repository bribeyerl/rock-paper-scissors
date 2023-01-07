let computerSelection
let computerInt = 0
let playerSelection
let playerChoice
let playerInt = 0
let playerScore = 0
let computerScore = 0

const playerChoices = document.querySelectorAll('.rps-image')

Array.from(playerChoices).forEach(element => element.addEventListener('click', getPlayerChoice))

// document.querySelector('#startBtn').addEventListener('click', game)


    //Get playerSelection and computerSelection
    // playerChoices.forEach(option => {
    //     option.addEventListener('click', function(){
    //         if (playerScore >= 5 || computerScore >= 5) {
    //             return
    //         }
    //         game(option.dataset.option)
    //     })
    // })

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
    getComputerChoice()
    for (let i = 0; i < 5; i++) {
        playRound(playerSelection, computerSelection)
    }
    if (computerScore > playerScore) {
        console.log(`Computer wins game! Final score: ${computerScore} - ${playerScore}`)
    } else {
        console.log(`Player wins game! Final score: ${playerScore} - ${computerScore}`)
    }
}
