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
  const photographHeader = document.querySelector(".photograph-header");
  const contactButton = document.querySelector(".contact_button");
  const mainSection = document.querySelector("#main");
  for (let i = 0; i < photographers.length; i++) {
    const div4 = document.createElement("div");
    if (+photographerId == photographers[i].id) {
      const h2 = document.createElement("h2");
      const p1 = document.createElement("p");
      const p2 = document.createElement("p");
      const imgElement = document.createElement("img");
      const div1 = document.createElement("div");
      const div2 = document.createElement("div");
      const div3 = document.createElement("div");
      photographHeader.insertBefore(div1, contactButton);
      div1.appendChild(h2);
      div1.appendChild(p1);
      div1.appendChild(p2);
      h2.innerText = `${photographers[i].name}`;
      p1.innerText = `${photographers[i].city}, ${photographers[i].country}`;
      p2.innerText = `${photographers[i].tagline}`;
      photographHeader.appendChild(imgElement);
      imgElement.src = `../assets/${photographers[i].name.replace(/[\s-]+/g, "")}.jpg`;
      imgElement.appendChild(div2);
      div2.appendChild(div3);
      div3.innerText = "ca mark";
    }
  }
}

// Récupèration la data des medias
async function init() {
  const { media, photographers } = await getMedia();
  displayData(media, photographers);
}
init();
