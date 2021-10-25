const rootBody = document.querySelector(".svg");

const SQUARES_NUMBER = 10;
let square;

partyBtn.addEventListener("click", () => {
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
});

let squares = document.querySelectorAll(".square");

partyBtn.addEventListener("click", () => {
  if (squares) {
    squares.forEach((squareItem) => {
    //   if (body.classList.length) {
    //     squareItem.classList.toggle("d-none");
    //   }
    console.log(squareItem);
    });
    // console.log('squareItem');
  }
});

// else {

//   squares.forEach(squareItem => {

//   })
// }
