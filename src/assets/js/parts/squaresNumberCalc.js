let windowWidth = window.innerWidth
let windowHeight = window.innerHeight
let windowSumArea;
let SQUARES_NUMBER


let jsReferenceSquare = document.querySelector('.jsReferenceSquare')
let jsReferenceSquareNaturalSideSize = jsReferenceSquare.offsetHeight;
let element = jsReferenceSquare.currentStyle || window.getComputedStyle(jsReferenceSquare);
let jsReferenceSquareOneSideMargin = parseInt(element.marginTop, 10)
let jsReferenceSquareTwoSideMargin = jsReferenceSquareOneSideMargin + jsReferenceSquareOneSideMargin
let jsReferenceSquareMarginAndSideSum = jsReferenceSquareNaturalSideSize + jsReferenceSquareTwoSideMargin


window.addEventListener('resize', () => {
    jsReferenceSquare = document.querySelector('.jsReferenceSquare')
    jsReferenceSquareNaturalSideSize = jsReferenceSquare.offsetHeight;
    element = jsReferenceSquare.currentStyle || window.getComputedStyle(jsReferenceSquare);
    jsReferenceSquareOneSideMargin = element.marginTop
    jsReferenceSquareTwoSideMargin = jsReferenceSquareOneSideMargin + jsReferenceSquareOneSideMargin
    jsReferenceSquareMarginAndSideSum = jsReferenceSquareNaturalSideSize + jsReferenceSquareTwoSideMargin
})

let squareSumArea = jsReferenceSquareMarginAndSideSum * jsReferenceSquareMarginAndSideSum


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

