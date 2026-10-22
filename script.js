const btnMovile = document.querySelector('.btn-menu');

const menuMobile = document.getElementById('menu-mobile');

//manejod el evento click

document.addEventListener('click', (e) => {
    if (e.target === btnMovile) {

        return menuMobile.classList.toggle('open')
    }

    menuMobile.classList.remove('open')
})

//manejod el evento scroll
document.addEventListener('scroll', () => {

    menuMobile.classList.remove('open')
})