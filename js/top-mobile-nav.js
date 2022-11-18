const btnMobile = document.querySelector('.nav__mobile'); // находим элемент мобильной навигации с помощью класса .nav-mobile
const nav = document.querySelector('.nav'); // находим элемент навигации с помощью класса .nav
const menuIcon= document.querySelector('.menu-icon'); // находим элемент иконку мобильной навигации с помощью класса .menu-icon


btnMobile.addEventListener('click', function(){
    nav.classList.toggle('open');
    nav.classList.toggle('active');
    menuIcon.classList.toggle('active');
    document.body.classList.toggle('no-scroll');

})