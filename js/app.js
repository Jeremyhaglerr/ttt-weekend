/*-------------------------------- Constants --------------------------------*/






/*---------------------------- Variables (state) ----------------------------*/
let boardArray = []//1.1
let playerTurn = null//1.2
let winner = null//1.3
/*------------------------ Cached Element References ------------------------*/

let squareOptions = document.querySelectorAll('.square')//2.1
let stateMessage = document.querySelector('#message')//2.2 
let resetButton = document.getElementById('replay')//6.2
let winSound = new Audio("sounds/win-yay.wav")// win audio 
let TieSound = new Audio("sounds/tie-boo.wav")//tie audio
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
  render()//3.2.4
  winSound.pause()
  TieSound.pause()
  confetti.remove()
  resetButton.style.visibility = 'hidden'
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
  }
  resetButton.style.visibility = 'visible'
  getStateMessage()//3.3.2
}

function getStateMessage() {//3.3.2
  if (winner === null) {//3.3.2.1) 
    stateMessage.textContent = `It is ${playerTurn === 1 ? 'X' : 'O'}'s turn, Choose a square!`
  } else if (winner === 'T') {//3.3.2.2
    stateMessage.textContent = `It's a Tie, Try Again!`
    TieSound.play()
    TieSound.currentTime = 0
  } else {// 3.3.2.3
    stateMessage.textContent = `Good Job! ${winner === 1 ? 'X' : 'O'}  wins!!`
    winSound.play()
    winSound.currentTime = 0
    confetti.start(2000)
    confetti.start(5000)
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