/*Mobile-menu*/
var menuIcon = document.querySelector('#menu');
var mobileMenu = document.querySelector('#mobile-menu');
var closeMenu = document.querySelector('#menu-exit');
var menuLinks = document.querySelectorAll('.menu-link');


menuIcon.addEventListener('click', displayMenu);
closeMenu.addEventListener('click', exitMenu);
menuLinks.forEach(link => {
  link.addEventListener('click', exitMenu);
})

function displayMenu() {
  mobileMenu.style.transform = 'translateX(0%)';
}

function exitMenu() {
  mobileMenu.style.transform = 'translateX(-100%)';
}