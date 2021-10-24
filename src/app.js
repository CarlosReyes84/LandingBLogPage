document.addEventListener('DOMContentLoaded', () => {
    navegationAdd()
    navigationRemove()
    mini()
});

let close = document.querySelector('.img-close')
let hamburger = document.querySelector('.img-hamburger')
let menu = document.querySelector('.tabs')



function navegationAdd() {
    hamburger.addEventListener('click', () => {
        menu.classList.toggle('mostrar')
        close.classList.add('mostrar3')
        hamburger.classList.add('mostrar4')
    })
}

function navigationRemove() {
    close.addEventListener('click', () => {
        console.log('nice')
        menu.classList.toggle('mostrar')
        close.classList.remove('mostrar3')
        hamburger.classList.remove('mostrar4')
    })
}

function mini() {
    const last = document.querySelector('.last')
    const mini = document.querySelector('.mini')
    
    last.addEventListener('click', (e) => {
        e.preventDefault()
        mini.classList.toggle('mostrar2')
    })
}
