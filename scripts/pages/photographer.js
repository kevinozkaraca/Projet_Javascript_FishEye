import mediaFactory from "../factories/mediaFactory.js";

// Récupération des informations du lien de la page :
const params = new URLSearchParams(window.location.search);
const photographerId = params.get("id");
async function getMedia() {
  const response = await fetch("../data/photographers.json");
  const data = response.json();
  return data;
}

// Récupération des élément du DOM et boucle pour les image
async function displayData(media) {
  const imagesContainer = document.querySelector(".images-container");
  for (let i = 0; i < media.length; i++) {
    if (+photographerId == media[i].photographerId) {
      const mediaModel = mediaFactory(media[i]);
      const userMediaDom = mediaModel.getMediaCardDOM();
      imagesContainer.appendChild(userMediaDom);
    }
  }
}
// Récupèration la data des medias
async function init() {
  const { media } = await getMedia();
  displayData(media);
}
init();
