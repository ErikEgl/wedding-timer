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
  const partyBtnTextContent = partyBtn.textContent;
  function textContentToggle() {
    if (partyBtn.textContent === partyBtnTextContent) {
      partyBtn.innerHTML = 'Нажми для обычного режима';
    } else {
      partyBtn.innerHTML = partyBtnTextContent;
    }
  }
 
 //after party btn click add party styles to text
 const body = document.querySelector('body');
 const h1 = document.querySelectorAll('h1');
 partyBtn.addEventListener('click', () => {
   if (localStorage.getItem('visited')) {
     localStorage.removeItem('visited');
   } else {
     localStorage.setItem('visited', JSON.stringify(true));
   }
   body.classList.toggle('party');
   h1.forEach(item => {
     item.classList.toggle('h1-party');
   });
   textContentToggle();
 });
 

 if (localStorage.getItem('visited')) {
    body.classList.add('party');
    h1.forEach(item => {
      item.classList.add('h1-party');
    });
  } else {
    body.classList.remove('party');
    h1.forEach(item => {
      item.classList.remove('h1-party');
    });
  }
  

  // let usrlang = navigator.languages;
  // console.log(usrlang);
  
  // let userLang = navigator.language || navigator.userLanguage;
  // alert('The language is: ' + userLang);
  
  
    // const isMobile = ('ontouchstart' in document.documentElement && navigator.userAgent.match(/Mobi/));
  
    // const isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;
    // if (isMobile) {
    //   body.classList.add('mobile');
    // }
  
    // function isMobile () {
    //     if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
    //       (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.platform))) {
    //         body.classList.add('party-mobile');
    //         h1.classList.add('h1-party-mobile');
    //         if (localStorage.getItem('visited')) {
    //           body.classList.add('party-mobile');
    //           h1.forEach(item => {
    //             item.classList.add('h1-party-mobile');
    //           });
    //         } else {
    //           body.classList.remove('h1-party-mobile');
    //           h1.forEach(item => {
    //             item.classList.remove('h1-party-mobile');
    //           });
    //         }
    //       }
    //       else {
    //         body.classList.remove('party-mobile');
    //         h1.classList.remove('h1-party-mobile');
    //       };
    //     };
    //     isMobile()
