const rootBody = document.querySelector(".svg");


let square;

function generateSquares() {
  if (body.classList.length && !square) {
    for (let i = 0, j = 0; i < SQUARES_NUMBER; i++, j++) {
      if (j >= images.length) {
        j = 0;
      }
      square = document.createElement("img");
      square.classList.add("square");
      square.setAttribute("src", `assets/svg/${images[j]}`);
      rootBody.append(square);
    }
  }
}
function deleteSquares() {
  if (square) {
    console.log('square');
  }
}

partyBtn.addEventListener("click", () => {
  generateSquares()
});

generateSquares()


if (square) {
  window.addEventListener('resize', () => {
    generateSquares()
})
}