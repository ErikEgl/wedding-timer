
  //after party btn click toggle textcontent
  const partyBtn = document.querySelector('button[data-party]');
  const partyBtnTextContent = partyBtn.textContent;
  function textContentToggle() {
    if (partyBtn.textContent === partyBtnTextContent) {
      partyBtn.innerHTML = 'Нажми для обычного режима';
    } else {
      partyBtn.innerHTML = partyBtnTextContent;
    }
  }
 