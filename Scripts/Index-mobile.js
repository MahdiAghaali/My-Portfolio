const hamburgerMenu = document.getElementById('hamburger-menu');
const closeMenuBtn = document.getElementById('closeMenuBtn');
const header = document.getElementById('header');
const headerNav = document.getElementById('header_nav');
const mobileNav = document.getElementById('mobile-nav');

function showMobileMenu() {
  header.classList.add('open');
  headerNav.classList.add('open');
  mobileNav.classList.add('open');
  hamburgerMenu.classList.add('open');
}

function closeMobileMenu() {
  header.classList.remove('open');
  headerNav.classList.remove('open');
  mobileNav.classList.remove('open');
  hamburgerMenu.classList.remove('open');
}

const aTagArray = mobileNav.querySelectorAll('li a');
aTagArray.forEach((element) => {
  element.addEventListener('click', closeMobileMenu);
});

hamburgerMenu.addEventListener('click', showMobileMenu);

closeMenuBtn.addEventListener('click', closeMobileMenu);