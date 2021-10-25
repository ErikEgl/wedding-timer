let windowWidth = window.innerWidth
let windowHeight = window.innerHeight
let windowSumArea;
let SQUARES_NUMBER
const squareSize = squareWidth = squareHeigh = 35;
const squareMargin = 100
const squareSumWidth = squareSumHeigh = (squareMargin + squareSize)


squareSumArea = squareSumWidth * squareSumHeigh
windowSumArea = windowHeight * windowWidth
SQUARES_NUMBER = Math.floor(windowSumArea / squareSumArea)

window.addEventListener('resize', () => {
    windowWidth = window.innerWidth
    windowHeight = window.innerHeight
    windowSumArea = windowHeight * windowWidth
    SQUARES_NUMBER = Math.floor(windowSumArea / squareSumArea)
    console.log(SQUARES_NUMBER);
})

console.log(SQUARES_NUMBER);