
  //after party btn click toggle textcontent
  const partyBtn = document.querySelector('button[data-party]');
  const partyBtnTextContent = partyBtn.textContent;
  const regularRegimeBtnTextContent = 'Нажми для обычного режима';
  function textContentToggle() {
    if (partyBtn.textContent === partyBtnTextContent ) {
      partyBtn.innerHTML = regularRegimeBtnTextContent;
    } else {
      partyBtn.innerHTML = partyBtnTextContent;
    } 
  }
 

  if (localStorage.getItem("visited-mobile") || localStorage.getItem("visited")) {
    partyBtn.innerHTML = regularRegimeBtnTextContent;
  }