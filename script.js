function header () {
    let headerTag = document.getElementById('header')
    const menuContainer = document.createElement('div')
    menuContainer.setAttribute('class', 'menu-container')
    const logoLink = document.createElement('a')
    logoLink.setAttribute('href','http://sitedesign.no/')
    const logoImg = document.createElement ('img')
    logoImg.setAttribute('src','./img/logo.png')
    logoImg.setAttribute('class','logo')
    logoImg.setAttribute('alt','sitedesign logo')
    logoLink.append(logoImg)
    menuContainer.append(logoLink)
    const navBar = document.createElement('nav')

    const servicesList = [
        {href: "ITConsulting.html" , name: "IT Consulting"},
        {href: "website.html" , name: "Website"},
        {href: "webshop.html" , name: "Webshops"},
        {href: "programing.html" , name: "Programming"},
        {href: "wordpress.html" , name: "Wordpress"},
        {href: "SEO.html" , name:"SEO"},
        {href: "Graphic_design.html" , name:"Graphic Design"},
        {href: "Digitalmarketing.html" , name:"Digital Marketing"}
    ]

    const menuList = [
        {href: './index.html', name: 'Home'},
        {href: './services.html', name: 'Services'},
        {href: './project.html', name: 'Projects'},
        {href: './demo.html', name: 'Demo'},
        {href: './about.html', name: 'About'},
        {href: './contact.html', name: 'Contact'},
    ]
    for (let i = 0; i < menuList.length; i++) {
        let span = document.createElement('span')
        let aTag = document.createElement('a')
        aTag.setAttribute('href',menuList[i].href)
        let name = document.createTextNode(menuList[i].name)
        aTag.append(name)
        span.append(aTag)
        if (menuList[i].name === 'Services') {
            aTag.setAttribute('id', 'menu-services')
            const container = document.createElement('div')
            container.setAttribute('id', 'services-popup')
            servicesList.forEach(service => {
                const serviceATag = document.createElement('a')
                serviceATag.setAttribute('href', service.href)
                serviceATag.append(service.name)
                container.append(serviceATag)
            })
            span.addEventListener('mouseover', function() {
                container.style.display = 'flex';
            })
            span.addEventListener('mouseleave', function() {
                container.style.display = 'none';
            })
            span.style.display = 'flex';
            span.append(container)
            let arrow = document.createElement('span')
            arrow.setAttribute('id', 'arrow-down')
            arrow.append('»')
            span.append(arrow)
        }

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

function footer() {
    let foorterTag = document.getElementById('footer')
    const div = document.createElement('div')
    div.setAttribute('class', 'Footer')
    const footerList = [
        {href: 'https://www.facebook.com/sitedesign.no', src: './img/facebook.svg', alt: 'Facebook Logo'},
        {href: 'https://instagram.com/sitedesign.no', src: './img/instagram.svg', alt:'instagram Logo'},
        {href: 'https://linkedin.com/company/konsulenthuset', src: './img/linkedin.svg', alt:'linkedin Logo'},
        {href: 'mailto:info@sitedesing.no', src: './img/email.svg', alt:'email Logo'},
        {href: 'tel:+4740075666', src: './img/phone-call.svg', alt:'phone Logo'},
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
    div2.setAttribute('class','copyright')
    const h4 = document.createElement('h1')
    const a2 = document.createElement('a')  
    h4.innerHTML = '© 2018 All rights reserved by '
    a2.setAttribute('href','http://sitedesign.no')
    a2.innerHTML = 'Sitedesign.no'
    h4.append(a2)
    div2.append(h4)
    foorterTag.append(div)
    foorterTag.append(div2)
}

header()
footer ()

window.addEventListener('resize', function() {
    let menuContainer = document.querySelector('.menu-container')
    let ham = document.querySelector('.ham')
    if (window.screen.width > 750) {
        ham.innerText = '☰'
        menuContainer.setAttribute('id', "");
    }
})