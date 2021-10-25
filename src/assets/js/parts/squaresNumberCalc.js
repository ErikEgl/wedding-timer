let windowWidth = window.innerWidth
let windowHeight = window.innerHeight
let windowSumArea;
let SQUARES_NUMBER
const squareSize = squareWidth = squareHeigh = 35;
const squareMargin = 100
const squareSumWidth = squareSumHeigh = (squareMargin + squareSize)
squareSumArea = squareSumWidth * squareSumHeigh


function calcSquaresAmount() {
windowSumArea = windowHeight * windowWidth
SQUARES_NUMBER = Math.floor(windowSumArea / squareSumArea)
}
calcSquaresAmount()

window.addEventListener('resize', () => {
    windowWidth = window.innerWidth
    windowHeight = window.innerHeight
    calcSquaresAmount()
})
