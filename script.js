let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    return Math.floor(Math.random()*10)
}

const compareGuesses =  (user, computer, targetNumber)  => {
    let userGuess = Math.abs(targetNumber - user);
    let computerGuess = Math.abs(targetNumber - computer);
    if (computerGuess > userGuess){
        return true
    } else if (computerGuess === userGuess){
        return true
    } else {
        return false
    }
}

const updateScore = winner => {
    if (winner === "human"){
        humanScore ++;
    }
    else if (winner === "computer"){
        computerScore ++;
    }
}

const advanceRound = () => {
    currentRoundNumber ++;
}
