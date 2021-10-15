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



const wordEndMonths = document.querySelectorAll('span[data-wordEnd-month]');
const wordEndDays = document.querySelectorAll('span[data-wordEnd-day]');
const wordEndHours = document.querySelectorAll('span[data-wordEnd-hour]');
const wordEndMinutes = document.querySelectorAll('span[data-wordEnd-minute]');
const wordEndSeconds = document.querySelectorAll('span[data-wordEnd-second]');


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
    let seconds = parseInt((millisecondsTillComing / 1000) % 60);
    let minutes = parseInt((millisecondsTillComing / (1000 * 60)) % 60);
    let hours = parseInt((millisecondsTillComing / (1000 * 60 * 60)) % 24);
    let days = parseInt((millisecondsTillComing / (1000 * 60 * 60 * 24)) % 30);
    let months = parseInt((millisecondsTillComing / (1000 * 60 * 60 * 24 * 30)) % 12);
      //add zero, if <10
      hours = hours < 10 ? '0' + hours : hours;
      minutes = minutes < 10 ? '0' + minutes : minutes;
      seconds = seconds < 10 ? '0' + seconds : seconds;
    
      $mo.textContent = months
      $d.textContent = days
      $h.textContent = hours
      $mi.textContent = minutes
      $s.textContent = seconds
  }
  msCount(weddingDay, wMonths, wDays, wHours, wMinutes, wSeconds)
  msCount(comingDay, cMonths, cDays, cHours, cMinutes, cSeconds)

}
clock();
setInterval(clock, 1000);
