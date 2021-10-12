// console.log('connected to script');
document.querySelector('.social-widget').addEventListener('click', e => document.querySelector('.social-widget').classList.toggle('active'));

webGallery = document.querySelector('.gallery.web');
mobileGallery = document.querySelector('.gallery.mobile');

projects = [
    //  {
    //     "id" : "t7chicken",
    //     "name" : "T7Chicken Legacy",
    //     "date" : "2021",
    //     "description" : "A support application for users of the popular game Tekken 7. This application, on the completion of its development, will show all character moves as well as the frame data connected to it. <BR>This is a personal project intended to update T7ChickenPro, an application that has not been updated since 2017, and no longer is able to be updated due to its age. I intend to recreate the application with the assistance of its original developer to update the UI, as well as to add new features.",
    //     "link" : "https://t7chicken.com",
    //     "image": "@resources/mobile/T7Legacy.png",
    //     "github" : "",
    //     "class" : ["mobile"],
    //     "preview": []
    // },
    {
        "id" : "pokemontcg",
        "name" : "Pokémon Card Game Companion",
        "date" : "2020",
        "description" : "This application assists users with keeping track of their cards. As an original fan of the pokemon card game, I know how hard it is to remember all of your decks; and there is always that one card that you need for all of them. This application solves that problem. This application was made for iPhone. <br><br> This application is a swift native application, with the use of the users local storage and the official pokemon card api.",
        "link" : "",
        "image": "@resources/mobile/PokemonTCG.PNG",
        "github" : "https://github.com/CPritchard007/Pokemon-TCG-Companion-app",
        "class" : ['mobile'],
        "preview": []
    },
    {
        "id" : "lifesensible",
        "name" : "Life Sensible",
        "date" : "2021",
        "description" : "This website is an e-commerce website that allows our customers to learn more about health in the age of technology <i>(the website is currently in development, so all content is to be changed)</i>. <br><br>The website was created entirely by me with the use of WordPress and the Elementor plugin.",
        "link" : "https://lifesensible.com",
        "image": "@resources/web/lifesensible.png",
        "github" : "",
        "class" : [],
        "preview": []
    },
    {
        "id" : "maplecrossing",
        "name" : "Maple Crossing",
        "date" : "2020",
        "description" : "This is a utility app for cross-border workers. Working across the border can be hard sometimes since wait times vary every day. With this application, you have access to border delays for the bridge and tunnel. The application also displays slowdowns on the map, allowing you to change your route on the go.<br><br>This application uses the power of flutter to build for both Native iOS and Android systems.",
        "link" : "",
        "image": "@resources/mobile/MapleCrossing.jpg",
        "github" : "https://github.com/CPritchard007/Maple-Crossing-Frontend",
        "class" : ['mobile'],
        "preview": []
    }
];


function openDetailsPane(project) {

    windowWidth = window.innerWidth;
    if (windowWidth < 760) {
        header = document.querySelector('header');
        warning = document.createElement('div');
        warning.classList.add('warning');
        warning.innerHTML = 'for the best experiece, please use a computer';
        header.appendChild(warning);
        return;
    }
    projectAtIndex = projects.filter(projectItem => projectItem.id == project)[0];


    buttonBar = document.querySelector('.buttonBar').querySelectorAll('a');
    buttonBar.forEach(button => button.classList.add('disabled'));

    buttonBar[0].classList.remove('disabled');
    if (projectAtIndex.link != '') {
        buttonBar[1].href = projectAtIndex.link;
        buttonBar[1].classList.remove('disabled');
    } 
    
    if (projectAtIndex.github != '') {
        buttonBar[2].href = projectAtIndex.github;
        buttonBar[2].classList.remove('disabled');
    }


    popupBar = document.querySelector('.popupBar');
    image = popupBar.querySelector('.image');
    imageContainer = popupBar.querySelector('.image-box');
    title = popupBar.querySelector('h4');
    description = popupBar.querySelector('.description p');


    if (popupBar.classList.contains('active')) {
        
        image.style.transform = 'translateX(-400px)';
        
        image.addEventListener('transitionend', () => {
            imageContainer.classList.remove('mobile');
            image.style.backgroundImage = `url(${projectAtIndex.image})`;
            if (projectAtIndex.class.length > 0) {
                imageContainer.classList.add(projectAtIndex.class);
            }
            image.style.transform = 'translateX(0px)';
        });

    } else {
        imageContainer.classList.remove('mobile');
        if (projectAtIndex.class.length > 0) {
            imageContainer.classList.add(projectAtIndex.class);
        }

        image.style.backgroundImage = `url(${projectAtIndex.image})`;
    }


    title.innerHTML = projectAtIndex.name + ' <i style="font-size: 14px; vertical-align: top">(' + projectAtIndex.date + ')</i>';
    description.innerHTML = projectAtIndex.description;
    

    popupBar.classList.add('active');
}

function closePopup () {
    popupBar = document.querySelector('.popupBar');
    popupBar.classList.remove('active');

}

function itemTemplate (project) {    

    projectAtIndex = projects.filter(projectItem => projectItem.id == project)[0];

    item = document.createElement('div');
    itemContainer = document.createElement('div');
    backgroundImage = document.createElement('div');
    title = document.createElement('div');

    item.classList.add('item');
    itemContainer.classList.add('item-container');
    backgroundImage.classList.add('set-background-image','full-container');
    title.classList.add('item-title');
    
    item.setAttribute('onCLick', 'openDetailsPane("' + projectAtIndex.id + '")');
    backgroundImage.style.backgroundImage = `url(${projectAtIndex.image})`;
    
    title.innerHTML = projectAtIndex.name;

    item.appendChild(itemContainer);
    itemContainer.appendChild(backgroundImage);
    itemContainer.appendChild(title);

    return item;
}

for (let i = 0; i < projects.length; i++) {
    let project = projects[i];
    if (project.class.includes('mobile')) {
        mobileGallery.appendChild(itemTemplate(project.id));
    } else {
        webGallery.appendChild(itemTemplate(project.id));
    }
}
