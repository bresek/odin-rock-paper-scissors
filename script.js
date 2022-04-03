
function computerPlay(){
    const moves = ["rock","paper", "scissors"]
    const move = moves[Math.floor(Math.random()*moves.length)]
    return move
}

function playRound(playerSelection, computerSelection){
    const cps = playerSelection.toLowerCase();
    const cs = computerSelection
    console.log(cps)
    console.log(cs)
    // scenarios where player wins
    // rock beats scissors
    // scissors beats paper
    // paper beats rock
    let result = ''
    if (
        (cps === "rock" & cs === "scissors") ||
        (cps == "scissors" & cs === "paper") ||
        (cps =="paper" & cs == "rock")){
        result = `You win! ${cps} beats ${cs}`
        }
    // scenarios where player loses
    // rock beats scissors
    // scissors beats paper
    // paper beats rock
    else if (
        (cps == "scissors" & cs === "rock") ||
        (cps === "paper" & cs === "scissors") ||
        (cps === "rock" & cs === "paper")
    ){
        result = `You lose! ${cs} beats ${cps}`
    }
    else{
        result = `Tie! You played ${cps} and the computer played ${cs}`
    }
    return(result)
}

// console.log(computerPlay())

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));