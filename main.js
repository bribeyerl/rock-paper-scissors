const choices = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    const randomLogic = Math.floor(Math.random() * choices.length)
    let computerResponse = choices[randomLogic]
    console.log(computerResponse)
}

