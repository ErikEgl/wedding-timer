const wMonths = document.querySelector('span[data-wMonths]');
const wDays = document.querySelector('span[data-wDays]');
const wHours = document.querySelector('span[data-wHours]');
const wMinutes = document.querySelector('span[data-wMinutes]');
const wSeconds = document.querySelector('span[data-wSeconds]');

const cMonths = document.querySelector('span[data-cMonths]');
const cDays = document.querySelector('span[data-cDays]');
const cHours = document.querySelector('span[data-cHours]');
const cMinutes = document.querySelector('span[data-cMinutes]');
const cSeconds = document.querySelector('span[data-cSeconds]');

const wordEndMonthsW = document.querySelector('span[data-wordEnd-wmonth]');
const wordEndDaysW = document.querySelector('span[data-wordEnd-wday]');
const wordEndHoursW = document.querySelector('span[data-wordEnd-whour]');
const wordEndMinutesW = document.querySelector('span[data-wordEnd-wminute]');
const wordEndSecondsW = document.querySelector('span[data-wordEnd-wsecond]');

const wordEndMonthsC = document.querySelector('span[data-wordEnd-cmonth]');
const wordEndDaysC = document.querySelector('span[data-wordEnd-cday]');
const wordEndHoursC = document.querySelector('span[data-wordEnd-chour]');
const wordEndMinutesC = document.querySelector('span[data-wordEnd-cminute]');
const wordEndSecondsC = document.querySelector('span[data-wordEnd-csecond]');


const body = document.querySelector('body');
const h1 = document.querySelectorAll('h1');


const images = [
    "bride-bouquet.svg",
    "bride-dress-wedding.svg",
    "gift.svg",
    "heart-balloons.svg",
    "stars-balloons.svg",
    "heart2.svg",
    "heart.svg",
    "time.svg",
    "wedding-day.svg",
    "wedding-building.svg",
    "wedding-cake.svg",
    "wedding-arch.svg",
    "wedding-suit.svg",
    "ring-heart.svg",
    "wedding.svg",
    "bride-dress-wedding.svg",
    "bride-bouquet.svg",
    "wedding-ring.svg",
    "ice-skate.svg",
  ];

function clock() {
    let currentTime = new Date();
  
    let wYear = 2022;
    let wMonth = 1;
    let wDay = 26;
    let wHour = 12;
  
    let cYear = 2021;
    let cMonth = 11;
    let cDay = 6;
    let cHour = 12;
    let weddingDay = new Date(wYear, wMonth, wDay, wHour);
    let comingDay = new Date(cYear, cMonth, cDay, cHour);
  
    function msCount(msEvent, $mo, $d, $h, $mi, $s) {
      let millisecondsTillComing = msEvent - currentTime;
      let months = parseInt(
        (millisecondsTillComing / (1000 * 60 * 60 * 24 * 30)) % 12
      );
      let days = parseInt((millisecondsTillComing / (1000 * 60 * 60 * 24)) % 30);
      let hours = parseInt((millisecondsTillComing / (1000 * 60 * 60)) % 24);
      let minutes = parseInt((millisecondsTillComing / (1000 * 60)) % 60);
      let seconds = parseInt((millisecondsTillComing / 1000) % 60);
  
      //add zero, if <10
      hours = hours < 10 ? '0' + hours : hours;
      minutes = minutes < 10 ? '0' + minutes : minutes;
      seconds = seconds < 10 ? '0' + seconds : seconds;
  
      //declension of numerical values
      function declOfNum(n, text_forms) {
        n = Math.abs(n) % 100;
        let n1 = n % 10;
        if (n > 10 && n < 20) {
          return text_forms[2];
        }
        if (n1 > 1 && n1 < 5) {
          return text_forms[1];
        }
        if (n1 == 1) {
          return text_forms[0];
        }
        return text_forms[2];
      }
  
      $mo.textContent =
        months + declOfNum(months, [' месяц', ' месяца', ' месяцев']);
      $d.textContent = days + declOfNum(days, [' день', ' дня', ' дней']);
      $h.textContent = hours + declOfNum(hours, [' час', ' часа', ' часов']);
      $mi.textContent =
        minutes + declOfNum(minutes, [' минута', ' минуты', ' минут']);
      $s.textContent =
        seconds + declOfNum(seconds, [' секунда', ' секунды', ' секунд']);
    }
    msCount(weddingDay, wMonths, wDays, wHours, wMinutes, wSeconds);
    msCount(comingDay, cMonths, cDays, cHours, cMinutes, cSeconds);
  }
  clock();
  setInterval(clock, 1000);
  


  

  //after party btn click toggle textcontent
  const partyBtn = document.querySelector('button[data-party]');
  partyBtn.textContent = 'Нажми для режима вечеринки';
  const partyBtnTextContent = partyBtn.textContent;
  const regularRegimeBtnTextContent = 'Нажми для обычного режима';
  function textContentToggle() {
    if (partyBtn.textContent === partyBtnTextContent ) {
      partyBtn.textContent = regularRegimeBtnTextContent;
    } else {
      partyBtn.textContent = partyBtnTextContent;
    } 
  }
 

  if (localStorage.getItem("visited-mobile") || localStorage.getItem("visited")) {
    partyBtn.textContent = regularRegimeBtnTextContent;
  }
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


//after party btn click add localStorage
function isMobileSetLocalStorage() {
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    ) ||
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.platform
    )
  ) {
    if (localStorage.getItem("visited")) {
      localStorage.removeItem("visited");
    } 
   //after party btn click set localstorage with MOBILE party styles to text
   partyBtn.addEventListener("click", () => {
    if (localStorage.getItem("visited-mobile")) {
      localStorage.removeItem("visited-mobile");
    } else {
      localStorage.setItem("visited-mobile", JSON.stringify(true));
    }
    textContentToggle();
  });
  
  } else {
    if (localStorage.getItem("visited-mobile")) {
      localStorage.removeItem("visited-mobile");
    } 
    //after party btn click set localstorage with PC party styles to text
    partyBtn.addEventListener("click", () => {
      if (localStorage.getItem("visited")) {
        localStorage.removeItem("visited");
      } else {
        localStorage.setItem("visited", JSON.stringify(true));
      }
      textContentToggle();
    });
  }
}
isMobileSetLocalStorage();
function isMobileSetLocalStorageStyle() {
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    ) ||
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.platform
    )
  ) {
   //check localstorage with MOBILE party styles to apply to text

   if (localStorage.getItem("visited-mobile")) {
    body.classList.add("party-mobile");
    h1.forEach((item) => {
      item.classList.add("h1-party-mobile");
    });
  } else {
    body.classList.remove("party-mobile");
    h1.forEach((item) => {
      item.classList.remove("h1-party-mobile");
    });
  }
  } else {
    //check localstorage with PC party styles to apply to text

    if (localStorage.getItem("visited")) {
      body.classList.add("party");
      h1.forEach((item) => {
        item.classList.add("h1-party");
      });
    } else {
      body.classList.remove("party");
      h1.forEach((item) => {
        item.classList.remove("h1-party");
      });
    }
  }
}
isMobileSetLocalStorageStyle();

function isMobile() {
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    ) ||
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.platform
    )
  ) {
     //after party btn click add MOBILE party styles to text
     partyBtn.addEventListener("click", () => {
      body.classList.toggle("party-mobile");
      h1.forEach((item) => {
        item.classList.toggle("h1-party-mobile");
      });
    });
  } else {
    //after party btn click add PC party styles to text
    partyBtn.addEventListener("click", () => {
      body.classList.toggle("party");
      h1.forEach((item) => {
        item.classList.toggle("h1-party");
      });
    });
  }
}
isMobile();

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

//toggle svg squares
function hideSquares() {
  let squaresToHide = document.querySelectorAll(".square");
  squaresToHide.forEach((squaresToHide) => {
    squaresToHide.classList.toggle('d-none')
  });
}

partyBtn.addEventListener("click", () => {
  if (!square) {
    generateSquares();
  } else {
    hideSquares();
  }
});

if (!square) {
  generateSquares();
} else {
  hideSquares();
}

if (square) {
  window.addEventListener("resize", () => {
    generateSquares();
  });
}



function timesOnSite() {
    let loaded = parseInt( localStorage.getItem('loaded'), 10 ),
        loaded_numb = loaded ? loaded+1 : 1;
    localStorage.setItem('loaded', loaded_numb);
    body.append('Счётчик посещений: ' + loaded_numb);
}
timesOnSite()

