
  // let usrlang = navigator.languages;
  // console.log(usrlang);
  
  // let userLang = navigator.language || navigator.userLanguage;
  // alert('The language is: ' + userLang);
  
  
    // const isMobile = ('ontouchstart' in document.documentElement && navigator.userAgent.match(/Mobi/));
  
    // const isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;
    // if (isMobile) {
    //   body.classList.add('mobile');
    // }
  
    function isMobile () {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
          (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.platform))) {
            body.classList.add('party-mobile');
            h1.classList.add('h1-party-mobile');
            if (localStorage.getItem('visited')) {
              body.classList.add('party-mobile');
              h1.forEach(item => {
                item.classList.add('h1-party-mobile');
              });
            } else {
              body.classList.remove('h1-party-mobile');
              h1.forEach(item => {
                item.classList.remove('h1-party-mobile');
              });
            }
          }
          else {
            body.classList.remove('party-mobile');
            h1.classList.remove('h1-party-mobile');
          };
        };
        isMobile()