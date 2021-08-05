function hamOnClick(event) {
    let menuContainer = document.querySelectorAll('.menu-container')[0]
    let body = document.getElementsByTagName('body')[0]
    let ham = document.querySelectorAll('.ham')[0]
    if (ham.innerText === '☰') {
        ham.innerText = '╳'
        menuContainer.setAttribute('id', "ham-show");
        body.style.overflow = 'hidden';
    } else {
        body.style.overflow = 'auto';
        ham.innerText = '☰'
        menuContainer.setAttribute('id', "");
    }
}

window.addEventListener('resize', function() {
    let menuContainer = document.querySelectorAll('.menu-container')[0]
    let ham = document.querySelectorAll('.ham')[0]
    if (window.screen.width > 700) {
        ham.innerText = '☰'
        menuContainer.setAttribute('id', "");
    }
})
