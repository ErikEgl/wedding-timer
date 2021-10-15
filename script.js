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

function wClock() {
  let currentTime = new Date();
  let weddingDay = new Date(2022, 1, 26);

  let millisecondsTillWedding = weddingDay - currentTime;

  let seconds = parseInt((millisecondsTillWedding / 1000) % 60);
  let minutes = parseInt((millisecondsTillWedding / (1000 * 60)) % 60);
  let hours = parseInt((millisecondsTillWedding / (1000 * 60 * 60)) % 24);
  (days = Math.floor((millisecondsTillWedding / (1000 * 60 * 60 * 24)) % 30)), 
  (months = Math.floor((millisecondsTillWedding / (1000 * 60 * 60 * 24 * 30)) % 12)),
  (years = Math.floor(millisecondsTillWedding / (1000 * 60 * 60 * 24 * 30 * 12))),

  //add zero, if <10
  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  wMonths.textContent = months
  wDays.textContent = days
  wHours.textContent = hours
  wMinutes.textContent = minutes
  wSeconds.textContent = seconds
}
wClock();
setInterval(wClock, 1000);




function cClock() {
  let currentTime = new Date();
  let comingDay = new Date(2021, 11, 6);

  let millisecondsTillComing = comingDay - currentTime;


  let seconds = parseInt((millisecondsTillComing / 1000) % 60);
  let minutes = parseInt((millisecondsTillComing / (1000 * 60)) % 60);
  let hours = parseInt((millisecondsTillComing / (1000 * 60 * 60)) % 24);
  (days = Math.floor((millisecondsTillComing / (1000 * 60 * 60 * 24)) % 30)), 
  (months = Math.floor((millisecondsTillComing / (1000 * 60 * 60 * 24 * 30)) % 12)),
  (years = Math.floor(millisecondsTillComing / (1000 * 60 * 60 * 24 * 30 * 12))),


  //add zero, if <10
  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  cMonths.textContent = months
  cDays.textContent = days
  cHours.textContent = hours
  cMinutes.textContent = minutes
  cSeconds.textContent = seconds
}
cClock();
setInterval(cClock, 1000);
