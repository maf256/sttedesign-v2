function hamOnClick(event) {
    let menuContainer = document.querySelectorAll('.menu-container')[0]


    let src = event.target.src
    let srcArr = src.split('/')
    let srcTarget = srcArr[srcArr.length - 1]
    let target = srcTarget.split('.')[0]

    if (target === 'ham') {
        event.target.src = 'times.png'
        menuContainer.setAttribute('id', "ham-show");
    } else {
        event.target.src = 'ham.png'
        menuContainer.setAttribute('id', "");
    }
}