 //after party btn click add party styles to text
 const body = document.querySelector('body');
 const h1 = document.querySelectorAll('h1');
 partyBtn.addEventListener('click', () => {
   if (localStorage.getItem('visited')) {
     localStorage.removeItem('visited');
   } else {
     localStorage.setItem('visited', JSON.stringify(true));
   }
   body.classList.toggle('party');
   h1.forEach(item => {
     item.classList.toggle('h1-party');
   });
   textContentToggle();
 });
 