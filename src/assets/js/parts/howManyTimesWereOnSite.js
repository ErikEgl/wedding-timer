function timesOnSite() {
    let loaded = parseInt( localStorage.getItem('loaded'), 10 ),
        loaded_numb = loaded ? loaded+1 : 1;
    localStorage.setItem('loaded', loaded_numb);
    body.append('Счётчик посещений таймера: ' + loaded_numb);
}
timesOnSite()