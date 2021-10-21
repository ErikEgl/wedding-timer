
 if (localStorage.getItem('visited')) {
    body.classList.add('party');
    h1.forEach(item => {
      item.classList.add('h1-party');
    });
  } else {
    body.classList.remove('party');
    h1.forEach(item => {
      item.classList.remove('h1-party');
    });
  }
  