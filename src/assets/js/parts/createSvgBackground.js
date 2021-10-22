const rootBody = document.querySelector(".svg");


const SQUARES_NUMBER = 10;
let square;

    for (let i = 0; i < SQUARES_NUMBER; i++) {
        square = document.createElement("div");
        square.classList.add("square");
        square.classList.add(`${'svg_' + i}`);
        rootBody.append(square);
      }



  // let squares = document.querySelectorAll('.square')
  // squares.forEach(square => {
  //     console.log(square);  
  // })

  // images.forEach(svg => {
      
  //   // square.style.backgroundImage = `url('assets/svg/${svg}')`;
  // })

  // for (let i = 0; i < SQUARES_NUMBER; i++) {
  //   square = document.createElement("div");
  //   square.classList.add("square");
  //   rootBody.append(square);
  // }