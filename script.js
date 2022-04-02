
function computerPlay(){
    const moves = ["rock","paper", "scissors"]
    const move = moves[Math.floor(Math.random()*moves.length)]
    return move
}
console.log(computerPlay())
