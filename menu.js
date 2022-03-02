/* Mobile-menu */
const menuIcon = document.querySelector('#menu');
const mobileMenu = document.querySelector('#mobile-menu');
const closeMenu = document.querySelector('#menu-exit');
const menuLinks = document.querySelectorAll('.menu-link');

function displayMenu() {
  mobileMenu.style.transform = 'translateX(0%)';
}

function exitMenu() {
  mobileMenu.style.transform = 'translateX(-100%)';
}

menuIcon.addEventListener('click', displayMenu);
closeMenu.addEventListener('click', exitMenu);
menuLinks.forEach((link) => {
  link.addEventListener('click', exitMenu);
});

// PROJECT SECTION & POP UP WINDOW
const cardContent = {
  images: {
    card1_mobile:'images2/SnapshootPortfolio.png',
    card2_mobile:'images2/SnapshootPortfolio(1).png',
    card3_mobile:'images2/SnapshootPortfolio(2).png',
    card4_mobile:'images2/SnapshootPortfolio(3).png',
    card1_desktop:'images3/Desktopcard1.png',
    card2_desktop:'images3/desktop-project2.png',
    card3_desktop:'images3/desktop-project3.png',
    card4_desktop:'images3/desktop-project4.png',
    popup1:'images/icon.png',
    popup2:'images/popup.png'
  },

  headings: {
    card1_3:'Tonic',
    card2_4:'Multi-Post Stories',
    card3_desktop:'Facebook 360',
    card4_desktop:'Uber Navigation'
  },

  paragraph: {
    cards:'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    popup:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent"
  },

  list: {
    links: [
      'CANOPY', 'Back End Dev', '2015'
    ],

    technologies: [
      'html', 'css', 'javascript'
    ]
  },

  buttons: [
    'See project', 'See live', 'See Source'
  ]
}