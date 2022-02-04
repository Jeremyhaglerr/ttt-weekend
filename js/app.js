/*-------------------------------- Constants --------------------------------*/

winCombos = [//4.1
  //horizantal lines
  [0, 1, 2], [3, 4, 5], [6, 7, 8]
  //vertical lines
  [0, 3, 6], [1, 4, 7], [2, 5, 8]
  //diagonal lines
  [0, 4, 8], [2, 4, 6]
]

/*---------------------------- Variables (state) ----------------------------*/
let boardArray = []//1.1
let playerTurn = null//1.2
let winner = null//1.3
/*------------------------ Cached Element References ------------------------*/

squareOptions = document.querySelectorAll('.square')//2.1
stateMessage = document.querySelector('#message')//2.2 
resetButton = document.getElementById('replay')//6.2
/*----------------------------- Event Listeners -----------------------------*/
squareOptions.forEach(function (index) {
  index.addEventListener('click', handleClick)
})
resetButton.addEventListener('click', init)// 6.3
/*-------------------------------- Functions --------------------------------*/

function init() {//3.1
  boardArray = [null, null, null, null, null, null, null, null, null]//3.2.1 & 3.4
  playerTurn = 1//3.2.2
  winner = null//3.2.3
  resetButton.setAttribute('hidden', true)
  render()//3.2.4
}
init()

function render() {//3.3
  boardArray.forEach(function (square, index) {//3.3.1
    let squareContent = null
    if (square === 1) {
      squareContent = 'X'
    } else if (square === -1) {
      squareContent = 'O'
    } else if (square === null) {
      squareContent = ''
    }
    squareOptions[index].textContent = squareContent
  })
  if (boardArray.includes(1 || -1)) {
    resetButton.removeAttribute('hidden')
  }
  
  getStateMessage()//3.3.2
}

function getStateMessage() {//3.3.2
  if (winner === null) {//3.3.2.1) 
    stateMessage.textContent = `It is ${playerTurn === 1 ? 'X' : 'O'}'s turn, Choose a square!`
  } else if (winner === 'T') {//3.3.2.2
    stateMessage.textContent = `It's a Tie, Try Again!`
  } else {// 3.3.2.3
    stateMessage.textContent = `Good Job! ${winner === 1 ? 'X' : 'O'}  wins!!`
  }
}

function handleClick(evt) {
  let squareIndex = parseInt(evt.target.id.replace('sq', ''))  //5.1.1

  if (boardArray[squareIndex]) {//5.2
    return
  } else if (winner !== null) {//5.3
    return
  }
  boardArray[squareIndex] = playerTurn//5.4
  playerTurn = playerTurn * -1//5.5
  winner = getWinner()
  render()// 5.7
}

function getWinner() {//5.6
  if (Math.abs(boardArray[0] + boardArray[1] + boardArray[2]) === 3){ 
    return boardArray[0]}//5.6.2
  if (Math.abs(boardArray[3] + boardArray[4] + boardArray[5]) === 3){ 
    return boardArray[3]}//5.6.2
  if (Math.abs(boardArray[6] + boardArray[7] + boardArray[8]) === 3){ 
    return boardArray[6]}//5.6.2
  if (Math.abs(boardArray[0] + boardArray[3] + boardArray[6]) === 3){ 
    return boardArray[0]}//5.6.2
  if (Math.abs(boardArray[1] + boardArray[4] + boardArray[7]) === 3){ 
    return boardArray[1]}//5.6.2
  if (Math.abs(boardArray[2] + boardArray[5] + boardArray[8]) === 3){ 
    return boardArray[2]}//5.6.2
  if (Math.abs(boardArray[0] + boardArray[4] + boardArray[8]) === 3){ 
    return boardArray[0]}//5.6.2
  if (Math.abs(boardArray[2] + boardArray[4] + boardArray[6]) === 3){ 
    return boardArray[2]}//5.6.2

  if (boardArray.includes(null)) {//5.6.3
    return null//5.6.5
  } else {
    return 'T'//5.6.4
  }
}