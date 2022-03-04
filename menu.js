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

// POPUP WINDOW
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

function showModal(){
  const projectDetails = document.querySelector('.project_details');
  const seenProject = document.querySelectorAll('.pro1');
  const main = document.querySelector('.main');
  seenProject.forEach((button) => {
    button.addEventListener('click', () => {
      const buttonId = button.getAttribute('id');
      projectDetails.classList.add('showpopup');
      main.classList.add('blur');

      const closePopup = projectDetails.querySelector('[data-close-button]');
      closePopup.addEventListener('click', () => {
      projectDetails.classList.remove('showpopup');
      main.classList.remove('blur');
      })
    })
  })
  const detailContent =projects.map((project) => { 
    `<div>
        <h1 class="detail-heading">${project[buttonId].name}</h1>
        <a id="popup-close" data-close-button class="close-button-project" >&times;</a>
      </div>
      <div>
        <ul class="list">
          <li class="canopy">CANOPY</li>
          <li class="end1">Back End Dev</li>
          <li class="end">2015</li>
        </ul> 
      </div>
      <img class="detail-image" src="${project[buttonId].image}" alt="Snapshoot">
      <div class="description">
        <div>
          <p class="detail">
            ${project[buttonId].description}
          </p>
        </div>
        <div id="buttons">
          <div>
            <ul class="butto multi" id="technologies">
              <li>
                <button type="button" class="ht">html</button>
              </li>
              <li>
                <button type="button" class="ssc">css</button>
              </li>
              <li>
                <button type="button" class="sj">javaScript</button>
              </li>
            </ul>
          </div>
          <button type="button" class=" live">
            See live  
            <img src="${project[buttonId].imageLive}" class="liveimage" alt="live-display">
          </button>
          <button type="button" class="Source">
            See Source
            <img src="${project[buttonId].imageGit}" class="sourceimage" alt="Source">
          </button>     
        </div>    
      </div>
    `
  })
.join('');
projectDetails.innerHTML = detailContent; 
}

document.addEventListener('DOMContentLoaded', () => {
  showModal();
}); 