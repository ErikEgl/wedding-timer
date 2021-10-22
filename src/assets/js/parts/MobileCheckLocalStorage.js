function isMobileSetLocalStorageStyle() {
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    ) ||
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.platform
    )
  ) {
   //check localstorage with MOBILE party styles to apply to text

   if (localStorage.getItem("visited-mobile")) {
    body.classList.add("party-mobile");
    h1.forEach((item) => {
      item.classList.add("h1-party-mobile");
    });
  } else {
    body.classList.remove("party-mobile");
    h1.forEach((item) => {
      item.classList.remove("h1-party-mobile");
    });
  }
  } else {
    //check localstorage with PC party styles to apply to text

    if (localStorage.getItem("visited")) {
      body.classList.add("party");
      h1.forEach((item) => {
        item.classList.add("h1-party");
      });
    } else {
      body.classList.remove("party");
      h1.forEach((item) => {
        item.classList.remove("h1-party");
      });
    }
  }
}
isMobileSetLocalStorageStyle();
