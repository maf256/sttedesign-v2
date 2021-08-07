let headerTag = document.getElementById('header')
let foorterTag = document.getElementById('footer')

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

function footer() {
    const div = document.createElement('div')
    div.setAttribute('class', 'Footer')
    const footerList = [
        {href: 'https://facebook.com/konsulenthuset1', src: 'facebook.svg', alt:'Facebook Logo'},
        {href: 'https://www.instagram.com/konsulenthuset', src: 'instagram.svg', alt:'instagram Logo'},
        {href: 'https://linkedin.com/company/konsulenthuset', src: 'linkedin.svg', alt:'linkedin Logo'},
        {href: 'mailto:info@sitedesing.no', src: 'email.svg', alt:'email Logo'},
        {href: 'tel:+4740186111', src: 'phone-call.svg', alt:'phone Logo'},
    ]
    for (let i = 0; i < footerList.length; i++) {
        const span = document.createElement('span')
        const a = document.createElement('a')
        const img = document.createElement('img')
        a.setAttribute('href',footerList[i].href)
        img.setAttribute('src',footerList[i].src)
        img.setAttribute('alt',footerList[i].alt)
        a.append(img)
        span.append(a)
        div.append(span)
    }
    const div2 = document.createElement('div')
    div2.setAttribute('class','class="copyright')
    const h4 = document.createElement('h4')
    h4.innerHTML = '© 2018 All rights reserved by'
    const a2 = document.createElement('a')  
    a2.setAttribute('href','http://sitedesign.no')
    a2.innerHTML = 'Sitedesign.no'
    // let h = document.createTextNode('☰')
    h4.append(a2)
    div2.append(h4)
    // div.append(div2)
    foorterTag.append(div)
    foorterTag.append(div2)

    // foorterTag.append(div2)
}

footer ()

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

