let windowWidth = window.innerWidth
let windowHeight = window.innerHeight
let windowSumArea;
let SQUARES_NUMBER
const jsReferenceSquare = document.querySelector('.jsReferenceSquare')
const jsReferenceSquareNaturalSideSize = jsReferenceSquare.naturalHeight;

squareSumArea = jsReferenceSquareNaturalSideSize * jsReferenceSquareNaturalSideSize


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
