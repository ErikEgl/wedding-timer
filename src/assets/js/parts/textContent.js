
  //after party btn click toggle textcontent
  const partyBtn = document.querySelector('button[data-party]');
  partyBtn.textContent = 'Нажми для режима вечеринки';
  const partyBtnTextContent = partyBtn.textContent;
  const regularRegimeBtnTextContent = 'Нажми для обычного режима';
  function textContentToggle() {
    if (partyBtn.textContent === partyBtnTextContent ) {
      partyBtn.textContent = regularRegimeBtnTextContent;
    } else {
      partyBtn.textContent = partyBtnTextContent;
    } 
  }
 

  if (localStorage.getItem("visited-mobile") || localStorage.getItem("visited")) {
    partyBtn.textContent = regularRegimeBtnTextContent;
  }