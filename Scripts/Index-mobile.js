const hamburgerMenu = document.getElementById('hamburger-menu');
hamburgerMenu.addEventListener('click', showMobileMenu);

function showMobileMenu() {
  const header = document.getElementById('header');
  header.style.padding = '0';
  header.style.flexDirection = 'column';
  header.style.justifyContent = 'center';
  header.style.width = '100vw';
  header.style.height = '100vh';

  const headerNav = document.getElementById('header_nav');
  headerNav.style.flexDirection = 'column';
  headerNav.style.width = '100%';
  headerNav.style.height = '100%';

  const mobileNav = document.getElementById('mobile-nav');
  mobileNav.style.display = 'block';
  hamburgerMenu.style.display = 'none';
}

const closeMenuBtn = document.getElementById('closeMenuBtn');
closeMenuBtn.addEventListener('click', closeMobileMenu);

function closeMobileMenu(){
  const header = document.getElementById('header');
  header.style.padding = '20px';
  header.style.flexDirection = 'row-reverse';
  header.style.justifyContent = 'space-between';
  header.style.width = '100vw';
  header.style.height = '100px';

  const headerNav = document.getElementById('header_nav');
  headerNav.style.width = '';
  
  const mobileNav = document.getElementById('mobile-nav');
  mobileNav.style.display = 'none';
  hamburgerMenu.style.display = 'block';
}

