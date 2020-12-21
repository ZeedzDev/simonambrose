const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links')
burger.addEventListener('click', (e) => {

    console.log(nav.style.display)
    if(nav.style.display === '' || nav.style.display === 'none') {
        nav.style.display = 'block'
        setTimeout(() => {
            nav.classList.add('nav-active')

        }, 5);
    } else {
        nav.classList.remove('nav-active')
        setTimeout(() => {
            nav.style.display = 'none'
        }, 500);
    }
})

function resized() {
    if(window.innerWidth > 600) nav.style.display = ''
}
window.onresize = resized


const scrollButton = document.querySelector('.scrollButton')

scrollButton.addEventListener('click', (e) => {
    window.scrollTo({ top: 0, behavior: "smooth"})
})