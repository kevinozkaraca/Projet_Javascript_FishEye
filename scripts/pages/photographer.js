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
// Récupération des élément du DOM et boucle
async function displayData(medias) {
  const photographersHeader = document.querySelector(".photograph-header");

  for (let i = 0; i < medias.length; i++) {
    if (+photographerId == medias[i].photographerId) {
      const mediaModel = mediaFactory(medias[i]);
      const userMediaDom = mediaModel.getMediaCardDOM();
      console.log(medias[i]);
      photographersHeader.appendChild(userMediaDom);
    }
  }
}
// Récupèration la data des medias
async function init() {
  const { media } = await getMedia();
  displayData(media);
}
init();
