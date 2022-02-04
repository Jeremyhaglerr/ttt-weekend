/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/
let boardArray = []//1.1
let playerTurn = null//1.2
let winner = null//1.3
/*------------------------ Cached Element References ------------------------*/

squareOptions = document.querySelectorAll(".square")//2.1
stateMessage = document.querySelector("#message")//2.2 
resetBtn = document.getElementById("replay")
/*----------------------------- Event Listeners -----------------------------*/
squareOptions.forEach(function (idx) {
  idx.addEventListener('click', handleClick)
})
resetBtn.addEventListener('click', init)
/*-------------------------------- Functions --------------------------------*/

function init() {//3.1
  boardArray = []
  for (let i = 0; i < 9; i++) { boardArray[i] = null; } //3.2.1
  playerTurn = 1//3.2.2
  winner = null//3.2.3
  render()//3.2.4
}
init()

function render() {//3.3
  boardArray.forEach(function (square, index) {//3.3.1
    let squareContent
    if (square === 1) {
      squareContent = 'X'
    } else if (square === -1) {
      squareContent === 'O'
    } else if (square === null) {
      squareContent === ''
    }
    squareOptions[index].textContent = squareContent
  })
  getStateMessage()//3.3.2
}

function getStateMessage() {//3.3.2
  if (winner === null){
    stateMessage.textContent = `It is ${playerTurn === 1 ? "X" : "O"}'s turn, Choose a square!`
  } else if (winner === 'T'){
    stateMessage.textContent = `It's a Tie, Try Again!`
  } else {
    stateMessage.textContent =  `Good Job! ${winner === 1 ? "X" : "O"}  wins!!`
  }
}

function handleClick() {

}

