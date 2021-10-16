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


const monthsArr = ["месяц", "месяца", "месяцев"]
const dayArr = ["день", "дня", "дней"]
const hourArr = ["час", "часа", "часов"]
const minuteArr = ["минута", "минуты", "минут"]
const secondArr = ["секунда", "секунды", "секунд"]


function clock() {
  let currentTime = new Date();

let wYear = 2022;
let wMonth = 1;
let wDay = 26;

let cYear = 2021;
let cMonth = 11;
let cDay = 6;
  let weddingDay = new Date(wYear, wMonth, wDay);
  let comingDay = new Date(cYear, cMonth, cDay);




  function msCount(msEvent, $mo, $d, $h, $mi, $s) {
    let millisecondsTillComing = msEvent - currentTime;
    let months = parseInt((millisecondsTillComing / (1000 * 60 * 60 * 24 * 30)) % 12);
    let days = parseInt((millisecondsTillComing / (1000 * 60 * 60 * 24)) % 30);
    let hours = parseInt((millisecondsTillComing / (1000 * 60 * 60)) % 24);
    let minutes = parseInt((millisecondsTillComing / (1000 * 60)) % 60);
    let seconds = parseInt((millisecondsTillComing / 1000) % 60);
    //add zero, if <10
      hours = hours < 10 ? '0' + hours : hours;
      minutes = minutes < 10 ? '0' + minutes : minutes;
      seconds = seconds < 10 ? '0' + seconds : seconds;
     
      function declOfNum(n, text_forms) {  
        n = Math.abs(n) % 100; 
        var n1 = n % 10;
        if (n > 10 && n < 20) { return text_forms[2]; }
        if (n1 > 1 && n1 < 5) { return text_forms[1]; }
        if (n1 == 1) { return text_forms[0]; }
        return text_forms[2];
      }

      $mo.textContent = months + declOfNum(months, [" месяц", " месяца", " месяцев"]);
      $d.textContent = days + declOfNum(days, [" день", " дня", " дней"]);
      $h.textContent = hours + declOfNum(hours, [" час", " часа", " часов"]);
      $mi.textContent = minutes + declOfNum(minutes, [" минута", " минуты", " минут"]);
      $s.textContent = seconds + declOfNum(seconds, [" секунда", " секунды", " секунд"]);

  
  }
  msCount(weddingDay, wMonths, wDays, wHours, wMinutes, wSeconds)
  msCount(comingDay, cMonths, cDays, cHours, cMinutes, cSeconds)

}
clock();
setInterval(clock, 1000);

