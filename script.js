let wMonths = document.querySelector('.months');
let wWeeks = document.querySelector('.weeks');
let wDays = document.querySelector('.days');
let wHours = document.querySelector('.hour');
let wMinutes = document.querySelector('.minutes');
let wSeconds = document.querySelector('.seconds');

function сlock() {
  let currentTime = new Date();
  let weddingDay = new Date(2022, 1, 26);
  let millisecondsTillWedding = weddingDay - currentTime;
  let seconds = parseInt((millisecondsTillWedding / 1000) % 60);
  let minutes = parseInt((millisecondsTillWedding / (1000 * 60)) % 60);
  let hours = parseInt((millisecondsTillWedding / (1000 * 60 * 60)) % 24);
  (days = Math.floor((millisecondsTillWedding / (1000 * 60 * 60 * 24)) % 30)), 
  (months = Math.floor((millisecondsTillWedding / (1000 * 60 * 60 * 24 * 30)) % 12)),
  (years = Math.floor(millisecondsTillWedding / (1000 * 60 * 60 * 24 * 30 * 12))),

  
  (hours = hours < 10 ? '0' + hours : hours);
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;
  console.log(years, months, days, hours + ':' + minutes + ':' + seconds);
  wMonths.textContent = months
  wDays.textContent = days
  wHours.textContent = hours
  wMinutes.textContent = minutes
  wSeconds.textContent = seconds
}
сlock();
setInterval(сlock, 1000);
