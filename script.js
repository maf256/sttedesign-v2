let headerTag = document.getElementById('header')

function header () {
    const menuContainer = document.createElement('div')
    menuContainer.setAttribute('class', 'menu-container')
    const logoLink = document.createElement('a')
    logoLink.setAttribute('href','http://sitedesign.no/')
    const logoImg = document.createElement ('img')
    logoImg.setAttribute('src','logo.png')
    logoImg.setAttribute('class','logo')
    logoImg.setAttribute('alt','sitedesign logo')
    logoLink.append(logoImg)
    menuContainer.append(logoLink)
    const navBar = document.createElement('nav')
    const menuList = [
        {href: './index.html', name: 'Home'},
        {href: '#Services', name: 'Services'},
        {href: './project.html', name: 'Projects'},
        {href: './demo.html', name: 'Demo'},
        {href: './about.html', name: 'About'},
        {href: './contact.html', name: 'Contact'},
    ]
    for (let i = 0; i < menuList.length; i++) {
        const span = document.createElement('span')
        const aTag = document.createElement('a')
        aTag.setAttribute('href',menuList[i].href)
        let name = document.createTextNode(menuList[i].name)
        aTag.append(name)
        span.append(aTag)
        navBar.append(span)        
    }
    menuContainer.append(navBar)
    const aTagHam = document.createElement('a')
    let hamName = document.createTextNode('☰')
    aTagHam.append(hamName)
    aTagHam.addEventListener('click', () => {
        let body = document.getElementsByTagName('body')[0]
        if (aTagHam.innerText === '☰') {
            aTagHam.innerText = '╳'
            menuContainer.setAttribute('id', "ham-show");
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = 'auto';
            aTagHam.innerText = '☰'
            menuContainer.setAttribute('id', "");
        }
    })
    
    aTagHam.setAttribute('class', 'ham')
    menuContainer.append(aTagHam)
    headerTag.append(menuContainer)
}

header()

// function hamOnClick(event) {
//     let menuContainer = document.querySelectorAll('.menu-container')[0]
//     let body = document.getElementsByTagName('body')[0]
//     let ham = document.querySelectorAll('.ham')[0]
//     if (ham.innerText === '☰') {
//         ham.innerText = '╳'
//         menuContainer.setAttribute('id', "ham-show");
//         body.style.overflow = 'hidden';
//     } else {
//         body.style.overflow = 'auto';
//         ham.innerText = '☰'
//         menuContainer.setAttribute('id', "");
//     }
// }

window.addEventListener('resize', function() {
    let menuContainer = document.querySelectorAll('.menu-container')[0]
    let ham = document.querySelectorAll('.ham')[0]
    if (window.screen.width > 750) {
        ham.innerText = '☰'
        menuContainer.setAttribute('id', "");
    }
})

