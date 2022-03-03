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

//POPUP WINDOW
const projects = [
  {
    /* Has id=0 in HTML because this is the first element in this array with index 0 */
    name: 'Tonic',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    image: 'images2/SnapshootPortfolio.png',
    imageGit: 'images/popup.png',
    imageLive: 'images/Icon.png',

  },
  {
    /* Has id=1 in HTML because this is the first element in this array with index 1 */
    name: 'Multi-Post Stories',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    image: 'images2/SnapshootPortfolio(1).png',
    imageGit: 'images/popup.png',
    imageLive: 'images/Icon.png',

  },
  {
    /* Has id=2 in HTML because this is the first element in this array with index 2 */
    name: 'Tonic',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    image: 'images2/SnapshootPortfolio(2).png',
    imageGit: 'images/popup.png',
    imageLive: 'images/Icon.png',

  },
  {
    /* Has id=3 in HTML because this is the first element in this array with index 3 */
    name: 'Multi-Post Stories',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    image: 'images2/SnapshootPortfolio(3).png',
    imageGit: 'images/popup.png',
    imageLive: 'images/Icon.png',

  },
];

const seenProject = document.querySelectorAll('.pro1');
const main = document.querySelector('.main');
seenProject.forEach(button => {
  button.addEventListener('click', () => {
    const buttonId = button.getAttribute('id');
    const projectDetails = document.querySelector('.project_details');
    projectDetails.classList.add('showpopup');
    main.classList.add('blur');
    const heading = projectDetails.querySelector('.detail-heading');
    const paragrah = projectDetails.querySelector('.detail');
    const image = projectDetails.querySelector('.detail-image');
    const githubImage = projectDetails.querySelector('.github');
    const liveImage = projectDetails.querySelector('.liveimage');

    heading.innerHTML = projects[buttonId].name;
    paragrah.innerHTML = projects[buttonId].description;
    image.src = projects[buttonId].image;
    githubImage.src = projects[buttonId].imageGit;
    liveImage.src = projects[buttonId].imageLive;

    const closePopup = projectDetails.querySelector('.close-popup');

    closePopup.addEventListener('click', () => {
      projectDetails.classList.remove('showpopup');
      main.classList.remove('blur');
    });  
  })
  
})


