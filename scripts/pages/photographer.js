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
async function displayData(media, photographers) {
  const imagesContainer = document.querySelector(".images-container");
  for (let i = 0; i < media.length; i++) {
    if (+photographerId == media[i].photographerId) {
      const mediaModel = mediaFactory(media[i]);
      const userMediaDom = mediaModel.getMediaCardDOM();
      imagesContainer.appendChild(userMediaDom);
    }
  }
  const mainSection = document.querySelector("#main");
  for (let i = 0; i < photographers.length; i++) {
    const div1 = document.createElement("div");
    if (+photographerId == photographers[i].id) {
      const gabarit = `
      <div class="photograph-header">
        <div>
          <h2>${photographers[i].name}</h2>
          <p>${photographers[i].city}</p>
          <p>${photographers[i].tagline} </p>
          </div>
        <button class="contact_button">Contactez-moi</button> <img src="../assets/${photographers[i].name.replace(
          /[\s-]+/g,
          ""
        )}.jpg" />
        <div id="likeAnd">
          <p>${297081} ❤</p>
          <p>${photographers[i].price} €/jour</p>
        </div>
      </div>
      `;
      mainSection.appendChild(div1);
      div1.innerHTML = gabarit;
    }
  }
}
// Récupèration la data des medias
async function init() {
  const { media, photographers } = await getMedia();
  displayData(media, photographers);
}
init();
