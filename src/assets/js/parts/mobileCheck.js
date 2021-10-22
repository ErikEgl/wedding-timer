// let usrlang = navigator.languages;
// console.log(usrlang);

// let userLang = navigator.language || navigator.userLanguage;
// alert('The language is: ' + userLang);

// const isMobile = ('ontouchstart' in document.documentElement && navigator.userAgent.match(/Mobi/));

// const isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;
// if (isMobile) {
//   body.classList.add('mobile');
// }

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
