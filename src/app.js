document.addEventListener('DOMContentLoaded', () => {
    navegation()
});

function navegation() {
    const hamburger = document.querySelector('.img-hamburger')
    const menu = document.querySelector('.mobileMenu')
    hamburger.addEventListener('click', () => {
        menu.classList.toggle('mostrar')
        console.log('g')
    })
}

//active state of nav desktop
