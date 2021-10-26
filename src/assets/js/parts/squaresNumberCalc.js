let windowWidth = window.innerWidth
let windowHeight = window.innerHeight
let windowSumArea;
let SQUARES_NUMBER
const jsReferenceSquare = document.querySelector('.jsReferenceSquare')
const jsReferenceSquareNaturalSideSize = jsReferenceSquare.offsetHeight;
let style = jsReferenceSquare.currentStyle || window.getComputedStyle(jsReferenceSquare);
let jsReferenceSquareOneSideMargin = style.marginTop

window.addEventListener('resize', () => {
    jsReferenceSquare = document.querySelector('.jsReferenceSquare')
    jsReferenceSquareNaturalSideSize = jsReferenceSquare.offsetHeight;
    style = jsReferenceSquare.currentStyle || window.getComputedStyle(jsReferenceSquare);
    jsReferenceSquareOneSideMargin = style.marginTop
})

let squareSumArea = jsReferenceSquareNaturalSideSize * jsReferenceSquareNaturalSideSize


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

