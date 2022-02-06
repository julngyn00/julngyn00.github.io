const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

// Display Mobile Menu
const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu);

const scrollTop = $(window).scrollTop();
const documentHeight = $(document).height();
const windowHeight = $(window).height();
const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;
