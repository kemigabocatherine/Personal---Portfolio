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

function showModal() {
  const projectDetails = document.querySelector('.project_details');
  const seenProject = document.querySelectorAll('.pro1');
  const main = document.querySelector('.main');
  seenProject.forEach((button) => {
    button.addEventListener('click', () => {
      const buttonId = button.getAttribute('id');
      projectDetails.classList.add('showpopup');
      main.classList.add('blur');

      const detailContent = `<div class="detail-header">
            <h1 class="detail-heading">${projects[buttonId].name}</h1>
            <a id="popup-close" data-close-button class="close-button-project" >&times;</a>
          </div>
          <div class="detail-list">
            <ul class="list">
              <li class="canopy">CANOPY</li>
              <li class="end1">Back End Dev</li>
              <li class="end">2015</li>
            </ul> 
          </div>
          <img class="detail-image" src="${projects[buttonId].image}" alt="Snapshoot">
          <div class="description">
            <div>
              <p class="detail">
                ${projects[buttonId].description}
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
                <img src="${projects[buttonId].imageLive}" class="liveimage" alt="live-display">
              </button>
              <button type="button" class="Source">
                See Source
                <img src="${projects[buttonId].imageGit}" class="sourceimage" alt="Source">
              </button>     
            </div>    
          </div>
        `;
      projectDetails.innerHTML = detailContent;
      const closePopup = projectDetails.querySelector('[data-close-button]');
      closePopup.addEventListener('click', () => {
        projectDetails.classList.remove('showpopup');
        main.classList.remove('blur');
      });
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  showModal();
});

// Form Validation
const form = document.forms[0];
const { email } = form.elements;
const validateMessage = document.querySelector('small');

function displayMessage() {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (email.value.toLowerCase() !== email.value) {
      validateMessage.textContent = 'e-mail should be in LOWER CASE, Form NOT submitted';
      validateMessage.classList.add('show');
    } else {
      form.submit();
    }
  });
}

displayMessage();

// LOCAL STORAGE
const personName = document.getElementById('name');
const personEmail = document.getElementById('email');
const personMessage = document.getElementById('Message');

function setChange() {
  const formInfo = {
    name: personName.value,
    email: personEmail.value,
    message: personMessage.value,
  };
  localStorage.setItem('form', JSON.stringify(formInfo));
}

document.addEventListener('DOMContentLoaded', () => {
  const formValue = localStorage.getItem('form');
  if (formValue) {
    const formObject = JSON.parse(formValue);
    personName.value = formObject.name;
    personEmail.value = formObject.email;
    personMessage.value = formObject.message;
  }
});

personName.onchange = setChange;
personEmail.onchange = setChange;
personMessage.onchange = setChange;