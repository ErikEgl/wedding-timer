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
    
      $mo.textContent = months
      $d.textContent = days
      $h.textContent = hours
      $mi.textContent = minutes
      $s.textContent = seconds

      // function checkEnding (time, word, arrName) {
      //   if(time === 1) {
      //     word.textContent = arrName[0]
      //   } else if (time >=2 && time < 5){
      //     word.textContent = arrName[1]
      //   } else {
      //     word.textContent = arrName[2]
      //   }
      // }

      // checkEnding(months ,wordEndMonthsW, monthsArr)
      // checkEnding(months ,wordEndMonthsC, monthsArr)


    //   function checkEnding() {
    //     var num, result;
    //     num = months;
    
    //     var string = num.toString();
    //     var char = string.charAt(string.length-1);
    
    //     if (char == "1" && !(num == 11)) {
    //         result = num + " пользователь в сети1.";
    //     }  
    //     else if (char == "2" && !(num == 12)) {
    //         result = num + " пользователя в сети2.";
    //     }
    //     else if (char == "3" && !(num == 13)) {
    //         result = num + " пользователя в сети3.";
    //     }
    //     else if (char == "4" && !(num == 14)) {
    //         result = num + " пользователя в сети4.";
    //     }  
    //     else {
    //         result = num + " пользователей в сети5.";
    //     }
    
    //     wordEndMonthsW.innerHTML = result;     
    // }  
    // checkEnding() 
  }
  msCount(weddingDay, wMonths, wDays, wHours, wMinutes, wSeconds)
  msCount(comingDay, cMonths, cDays, cHours, cMinutes, cSeconds)

}
clock();
setInterval(clock, 1000);
