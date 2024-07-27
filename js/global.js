'use strict'

// menu scroll //
window.addEventListener("scroll", () => {
    var menu = document.querySelector('nav') ;
    menu.classList.toggle("scrollMenu", window.scrollY > 0);
});

const scrollTop = (destiny) => {
    window.scrollTo({
        top: destiny,
        behavior: 'smooth'
    })
}

document.getElementById('descer').addEventListener('click', () => {scrollTop(window.innerHeight - 80)})
document.querySelector('.btnUp').addEventListener('click', () => {scrollTop(0)})