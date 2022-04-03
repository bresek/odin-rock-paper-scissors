
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
        result = 'win'
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
        result = 'lose'
    }
    else{
        result = 'tie'
    }
    return(result)
}

function game(){
    let playerScore = 0;
    let computerScore = 0;
    for (let round = 0; round < 5; round++){
        let playerSelection = prompt("Enter your move (Rock/paper/scissors)");
        const computerSelection = computerPlay();
        const result = (playRound(playerSelection, computerSelection)); 
        
        // win 
        // lose `You lose! ${cs} beats ${cps}`
        // tie `Tie! You played ${cps} and the computer played ${cs}`

        if (result == 'win'){
            console.log(
              `You win! ${playerSelection} beats ${computerSelection}`
            );
            playerScore++
        }
        else if(result == 'lose'){
            console.log(
              `You lose! ${computerSelection} beats ${playerSelection}`
            );
            computerScore++
        }
        else{
            console.log(
              `Tie! You played ${playerSelection} and the computer played ${computerSelection}`
            );
        }
        console.log(`Round: ${round+1}. Player score: ${playerScore}, Computer score: ${computerScore}`)

    }
    
}

game()