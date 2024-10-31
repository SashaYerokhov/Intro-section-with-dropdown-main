const menuNav = document.querySelector('.header__menu');
// console.log(menuNav);

const menuBtn = document.querySelector('.header__up-menu');
const closeBtn = document.querySelector('.header__up-close');

let backDrop = document.querySelector('.backdrop')

menuBtn.addEventListener('click', openMenu);

function openMenu() {
    menuBtn.classList.add('active');
    menuNav.classList.add('active');
    closeBtn.classList.add('active');
    backDrop.classList.add('active');
};

closeBtn.addEventListener('click', closeMenu);

function closeMenu() {
    menuBtn.classList.remove('active')
    menuNav.classList.remove('active')
    closeBtn.classList.remove('active');
    backDrop.classList.remove('active');
}