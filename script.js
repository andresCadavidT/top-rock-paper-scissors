let playerCounter = 0
let computerCounter = 0

const rock = document.querySelector(".rock")
const paper = document.querySelector(".paper")
const scissors = document.querySelector(".scissors")
const results = document.querySelector(".results")
const parcialPlayerScore = document.querySelector(".parcial-player-score")
const parcialComputerScore = document.querySelector(".parcial-computer-score")
const lastGameResult = document.querySelector(".last-game-result")

function verifyResult(){
    if (playerCounter === computerCounter) {
        results.textContent = "empate"  
    } else if (playerCounter > computerCounter) {
        results.textContent = "ganaste" 
    } else if (playerCounter < computerCounter) {
        results.textContent = "perdiste" 
    }
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getComputerChoice(){
    number = randomNumber(1,3)
    switch (number) {
        case 1:
            choise = "rock"
            return choise.toLowerCase()
        case 2:
            choise = "paper"
            return choise.toLowerCase()
        case 3:
                choise = "scissors"
            return choise.toLowerCase()
    }
}


alert("First on get 5 points, Win.")

rock.addEventListener("click", () => {
    if (playerCounter == 5 || computerCounter == 5) {verifyResult()} 
    else if (playerCounter < 5 || computerCounter < 5)  {playRound(getComputerChoice(), "rock")}
})
paper.addEventListener("click", () => {
    if (playerCounter == 5 || computerCounter == 5) {verifyResult()} 
    else if (playerCounter < 5 || computerCounter < 5) {playRound(getComputerChoice(), "paper")}
})
scissors.addEventListener("click", () => {
    if (playerCounter < 5 || computerCounter < 5) {playRound(getComputerChoice(), "scissors")}
})



parcialPlayerScore.textContent = playerCounter
parcialComputerScore.textContent = computerCounter
function playRound(computerSelection, playerSelection) {
    if (playerSelection === computerSelection) {
        lastGameResult.textContent = "Empate"
        if (playerCounter == 5 || computerCounter == 5) {verifyResult()} 
    } else if(playerSelection === "rock" & computerSelection === "scissors") {
        playerCounter= ++playerCounter 
        parcialPlayerScore.textContent = playerCounter
        lastGameResult.textContent = "Victoria"
        if (playerCounter == 5 || computerCounter == 5) {verifyResult()} 
    } else if(playerSelection === "paper" & computerSelection === "rock") {
        playerCounter= ++playerCounter 
        parcialPlayerScore.textContent = playerCounter
        lastGameResult.textContent = "Victoria"
        if (playerCounter == 5 || computerCounter == 5) {verifyResult()} 
    } else if(playerSelection === "scissors" & computerSelection === "paper") {
        playerCounter = ++playerCounter 
        parcialPlayerScore.textContent = playerCounter
        lastGameResult.textContent = "Victoria"
        if (playerCounter == 5 || computerCounter == 5) {verifyResult()} 
    } else {
        computerCounter = ++computerCounter
        parcialComputerScore.textContent = computerCounter
        lastGameResult.textContent = "Derrota"
        if (playerCounter == 5 || computerCounter == 5) {verifyResult()} 
    }
}





