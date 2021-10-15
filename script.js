const wMonths = document.querySelector('.wMonths');
const wDays = document.querySelector('.wDays');
const wHours = document.querySelector('.wHour');
const wMinutes = document.querySelector('.wMinutes');
const wSeconds = document.querySelector('.wSeconds');

const cMonths = document.querySelector('.cMonths');
const cDays = document.querySelector('.cDays');
const cHours = document.querySelector('.cHour');
const cMinutes = document.querySelector('.cMinutes');
const cSeconds = document.querySelector('.cSeconds');





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




  function c(msEvent, $mo, $d, $h, $mi, $s) {
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
  c(weddingDay, wMonths, wDays, wHours, wMinutes, wSeconds)
  c(comingDay, cMonths, cDays, cHours, cMinutes, cSeconds)

}
clock();
setInterval(clock, 1000);
