import mediaFactory from "../factories/mediaFactory.js";
import photographerFactory from "../factories/photographerFactory.js";
// Récupération des informations du lien de la page :
const params = new URLSearchParams(window.location.search);
const photographerId = params.get("id");

async function getMedia() {
  const response = await fetch("../data/photographers.json");
  const data = response.json();
  return data;
}

async function displayData(medias) {
  const photographersHeader = document.querySelector(".photograph-header");
  medias.forEach((media) => {
    const mediaModel = mediaFactory(media);
    const userMediaDom = mediaModel.getMediaCardDOM();
    for (let i = 0; i < media.length; i++) {
      if (photographerId == medias[i].photographerId) {
        photographersHeader.appendChild(userMediaDom);
        console.log("A corriger le IF ");
      }
    }
  });
}

async function init() {
  const { media } = await getMedia();
  displayData(media);
}
init();

/*
// Séléction du photographe et affichage de son  :
function fetchPhotographer(photographerId) {
  fetch("./data/photographers.json").then(function (response) {
    response.json().then(function (json) {
      const mediaModel = mediaFactory(json.media);

      // Data du photographe
      const dataPhotographers = json.photographers.find((data) => data.id == photographerId);
      const { city, country, id, name, portrait, price, tagline } = dataPhotographers;
      // Medias du photographe
      const dataMedias = json.media;
      // Affichage des médias du photographe
      for (let i = 0; i < dataMedias.length; i++) {
        if (dataPhotographers.id == dataMedias[i].photographerId) {
          // Implémentation du code !
          console.log(mediaModel.getMediaCardDOM());
          
          console.log(
            dataMedias[i].id,
            dataMedias[i].photographerId,
            dataMedias[i].title,
            dataMedias[i].image,
            dataMedias[i].likes,
            dataMedias[i].date,
            dataMedias[i].price
          );
        }
      }
    });
  });
}

fetchPhotographer(photographerId);
*/
