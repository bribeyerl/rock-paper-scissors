const choices = ['rock', 'paper', 'scissors'];
let computerSelection;
let playerSelection;

function getComputerChoice() {
    const randomLogic = Math.floor(Math.random() * choices.length)
    let computerSelection = choices[randomLogic]
    console.log(computerResponse)
}

// function getPlayerSelection() {
//     ask for selection in a dialog box using window.prompt()
//     store response in playerSelection var
//     change toLower 
// }

// function playRound(playerSelection, computerSelection) {

// }