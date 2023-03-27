import mediaFactory from "../factories/mediaFactory.js";
import formDisplay from "../utils/contactForm.js";
import tabindexPhotographer from "../utils/tabindexPhotographer.js";
import modalNavigation from "../utils/modalNavigation.js";
// Récupération des informations du lien de la page :
const params = new URLSearchParams(window.location.search);
const photographerId = params.get("id");
async function getMedia() {
  const response = await fetch("./data/photographers.json");
  const data = response.json();
  return data;
}

// Affichage des élements du body avec un effet de fade-in
function fadeInAllElements() {
  // Récupération de tous les éléments de la page
  const elements = document.querySelectorAll('*');
  const body = document.querySelector('body');
  body.style.opacity = 0;
  // Attente de 1 seconde avant de commencer la transition
  setTimeout(() => {
    elements.forEach(element => {
      element.style.opacity = 0;
      element.style.transition = 'opacity 1s ease-in-out';
    });
    let opacity = 0;
    function fadeIn() {
      opacity += 0.5;
      elements.forEach(element => {
        element.style.opacity = opacity;
      });
      if (opacity < 1) {
        requestAnimationFrame(fadeIn);
      }
    }

    requestAnimationFrame(fadeIn);
  }, 1000);
}
fadeInAllElements()


// Récupération des élément du DOM et boucle pour les image
async function displayData(media, photographers) {
  for (let i = 0; i < media.length; i++) {
    const imagesContainer = document.querySelector(".images-container");
    const mediaModel = mediaFactory(media[i]);
    const userMediaDom = mediaModel.getMediaCardDOM();
    const filter = document.getElementById("filter");
    if (+photographerId == media[i].photographerId) {
      imagesContainer.appendChild(userMediaDom);
      filter.addEventListener("change", function () {
        if (filter.value == "Popularity") {
          const allArticle = document.querySelectorAll("article");
          for (let i = 0; i < allArticle.length; i++) {
            allArticle[i].remove();
            media = media.sort((a, b) => b.likes - a.likes);
            const mediaModel = mediaFactory(media[i]);
            const userMediaDom = mediaModel.getMediaCardDOM();
            imagesContainer.appendChild(userMediaDom);

          }
        }
        if (filter.value == "Title") {
          const allArticle = document.querySelectorAll("article");
          for (let i = 0; i < allArticle.length; i++) {
            allArticle[i].remove();
            media = media.sort((a, b) => a.title.localeCompare(b.title));
            const mediaModel = mediaFactory(media[i]);
            const userMediaDom = mediaModel.getMediaCardDOM();
            imagesContainer.appendChild(userMediaDom);

          }
        }
        if (filter.value == "Date") {
          const allArticle = document.querySelectorAll("article");
          for (let i = 0; i < allArticle.length; i++) {
            allArticle[i].remove();
            media = media.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
            const mediaModel = mediaFactory(media[i]);
            const userMediaDom = mediaModel.getMediaCardDOM();
            imagesContainer.appendChild(userMediaDom);

          }
        }
        const imageAndVideoContainer = document.querySelectorAll("#imageAndVideoContainer");
        imageAndVideoContainer.forEach((element) => {
          element.setAttribute("tabindex", "4");
        })
        const likeButton = document.querySelectorAll(".likeButton")
        likeButton.forEach((element) => {
          element.setAttribute("tabindex", "4");
        })
      });
    }
  }

  // Affichage des éléments en fonctions du photographe
  const mainSection = document.querySelector("#main");
  for (let i = 0; i < photographers.length; i++) {
    const div1 = document.createElement("div");
    if (+photographerId == photographers[i].id) {
      // variables utiles pour la gestion des likes
      const allLikes = document.querySelectorAll(".likes");
      let allLikesCounter = 0;
      for (let i = 0; i < allLikes.length; i++) {
        allLikesCounter += +allLikes[i].innerHTML.slice(0, 2).toString();
      }
      const template = `
      <div class="photograph-header">
        <div class="photographInfo">
          <h2>${photographers[i].name}</h2>
          <p>${photographers[i].city}, ${photographers[i].country}</p>
          <p>${photographers[i].tagline}</p>
          </div>
          <button class="contact_me_button" alt="contact_me">Contactez-moi</button> <img src="./assets/${photographers[
          i
        ].name.replace(/[\s-]+/g, "")}.jpg" alt="${photographers[i].name}"/>
        <div id="likeAndPrice">
          <p id="allLikesCounter" arial-label="likes">${allLikesCounter} </p>
          <p>❤</p>
          <p id="spaceDiv">
          <p>${photographers[i].price}€/jour</p>
        </div>
      </div>
      `;
      mainSection.appendChild(div1);
      div1.innerHTML = template;
      // Afficher le formulaire
      formDisplay(photographers[i]);
    }
  }
}

// Récupèration la data des medias
async function init() {
  const { media, photographers } = await getMedia();
  displayData(media, photographers);
  tabindexPhotographer();
  modalNavigation();
}
init();

