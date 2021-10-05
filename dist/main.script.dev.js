"use strict";

// console.log('connected to script');
document.querySelector('.social-widget').addEventListener('click', function (e) {
  return document.querySelector('.social-widget').classList.toggle('active');
});
webGallery = document.querySelector('.gallery.web');
mobileGallery = document.querySelector('.gallery.mobile');
projects = [{
  "id": "T7Chicken",
  "name": "T7Chicken Legacy",
  "description": "T7ChickenLegacy is a website for the T7 Chicken restaurant. It was built using HTML, CSS, and JavaScript.",
  "link": "https://t7chicken.com",
  "image": "@resources/mobile/T7Legacy.png",
  "github": "",
  "class": ["mobile"],
  "preview": []
}, {
  "id": "HelpDesk",
  "name": "Help Desk",
  "description": "T7ChickenLegacy is a website for the T7 Chicken restaurant. It was built using HTML, CSS, and JavaScript.",
  "link": "https://t7chicken.com",
  "image": "@resources/web/helpdesk.png",
  "github": "",
  "class": [],
  "preview": []
}, {
  "id": "PokemonTCG",
  "name": "Pokémon Card Game Companion",
  "description": "T7ChickenLegacy is a website for the T7 Chicken restaurant. It was built using HTML, CSS, and JavaScript.",
  "link": "https://t7chicken.com",
  "image": "@resources/mobile/PokemonTCG.png",
  "github": "",
  "class": ['mobile'],
  "preview": []
}];

function openDetailsPane(project) {
  windowWidth = window.innerWidth;
  if (windowWidth < 760) return;
  projectAtIndex = projects.filter(function (projectItem) {
    return projectItem.id == project;
  })[0];
  popupBar = document.querySelector('.popupBar');
  image = popupBar.querySelector('.image');
  imageContainer = popupBar.querySelector('.image-box');
  title = popupBar.querySelector('h4');
  description = popupBar.querySelector('.description p');

  if (popupBar.classList.contains('active')) {
    image.style.transform = 'translateX(-400px)';
    image.addEventListener('transitionend', function () {
      imageContainer.classList.remove('mobile');
      image.style.backgroundImage = "url(".concat(projectAtIndex.image, ")");

      if (projectAtIndex["class"].length > 0) {
        imageContainer.classList.add(projectAtIndex["class"]);
      }

      image.style.transform = 'translateX(0px)';
    });
  } else {
    imageContainer.classList.remove('mobile');

    if (projectAtIndex["class"].length > 0) {
      imageContainer.classList.add(projectAtIndex["class"]);
    }

    image.style.backgroundImage = "url(".concat(projectAtIndex.image, ")");
  }

  title.innerText = projectAtIndex.name;
  description.innerText = projectAtIndex.description;
  popupBar.classList.add('active');
}

function closePopup() {
  popupBar = document.querySelector('.popupBar');
  popupBar.classList.remove('active');
}

function itemTemplate(project) {
  projectAtIndex = projects.filter(function (projectItem) {
    return projectItem.id == project;
  })[0];
  item = document.createElement('div');
  itemContainer = document.createElement('div');
  backgroundImage = document.createElement('div');
  title = document.createElement('div');
  item.classList.add('item');
  itemContainer.classList.add('item-container');
  backgroundImage.classList.add('set-background-image', 'full-container');
  title.classList.add('item-title');
  item.setAttribute('onCLick', 'openDetailsPane("' + projectAtIndex.id + '")');
  backgroundImage.style.backgroundImage = "url(".concat(projectAtIndex.image, ")");
  title.innerText = projectAtIndex.name;
  item.appendChild(itemContainer);
  itemContainer.appendChild(backgroundImage);
  itemContainer.appendChild(title);
  return item;
}

for (var i = 0; i < projects.length; i++) {
  var project = projects[i];

  if (project["class"].includes('mobile')) {
    mobileGallery.appendChild(itemTemplate(project.id));
  } else {
    webGallery.appendChild(itemTemplate(project.id));
  }
}