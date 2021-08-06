let headerTag = document.getElementById('header')

function header () {
    const menuContainer = document.createElement('div')
    menuContainer.setAttribute('class', 'menu-container')
    const logolink = document.createElement('a')
    logolink.setAttribute('href','http://sitedesign.no/')
    const logo = document.createElement ('img')
    logo.setAttribute('src','logo.png')
    logo.setAttribute('alt','sitedesign logo')
    logolink.appendChild(logo)
    menuContainer.appendChild(logolink)
    const navbar = document.createElement('nav')
    const Menulist = [
        {href: './index.html', name: 'Home'},
        {href: '#Services', name: 'Services'},
        {href: './project.html', name: 'Projects'},
        {href: './demo.html', name: 'Demo'},
        {href: './about.html', name: 'About'},
        {href: './contact.html', name: 'Contact'},
    ]
    for (let i = 0; i < Menulist.length; i++) {
        // const element = Menulist[i];
        const span = document.createElement('span')
        const atag = document.createElement('a')
        atag.setAttribute('href',Menulist[i].href)
        let name = document.createTextNode(Menulist[i].name)
        atag.appendChild(name)
        span.appendChild(atag)
        navbar.appendChild(span)        
    }
    menuContainer.appendChild(navbar)
    const aham = document.createElement('a')
    let hamname = document.createTextNode('☰')
    // aham.onclick("hamOnClick(event)")
    aham.addEventListener('click', () => {
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
    })
    aham.appendChild(hamname)
    aham.classList.add('ham')
    // aham.addsetAttribute('class','ham')
    menuContainer.appendChild(aham)
    headerTag.append(logolink)
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

