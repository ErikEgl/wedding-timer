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
