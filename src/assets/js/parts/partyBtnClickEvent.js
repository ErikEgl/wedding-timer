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