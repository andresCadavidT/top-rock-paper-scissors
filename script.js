let playerCounter = 0
let computerCounter = 0

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getComputerChoice(){
    number = randomNumber(1,3)
    switch (number) {
        case 1:
            choise = "Rock"
            break;
        case 2:
            choise = "Paper"
            break;
        case 3:
                choise = "Scissors"
            break;
    }
    return choise.toLowerCase()
}

function playRound(computerSelection, playerSelection) {
    if (playerSelection === computerSelection) {
        return "Draw"
    } else if(playerSelection === "rock" & computerSelection === "scissors") {
        return ++playerCounter 
    } else if(playerSelection === "paper" & computerSelection === "rock") {
        return ++playerCounter 
    } else if(playerSelection === "scissors" & computerSelection === "paper") {
        return ++playerCounter 
    } else {
        return ++computerCounter
    }
}

function game(){
    alert("Let's play best of 5")
    for (let i = 0; i < 5; i++) {
        playRound(getComputerChoice(), (prompt("Please, Choose one: Rock, Paper or Scissors")).toLowerCase())
        console.log(playerCounter)
        console.log(computerCounter)
    }
    if (playerCounter === computerCounter) {
        alert("empate")
    } else if (playerCounter > computerCounter) {
        alert("ganaste")
    } else if (playerCounter < computerCounter) {
        alert("perdiste")
    }
}

game()



