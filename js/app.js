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
  playerTurn = 1//3.2.2
  render()
}
init()

function render() {

}

function handleClick() {

}