import photographerFactory from "../factories/photographerFactory.js";
import tabindexIndex from "../utils/tabindexIndex.js";

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

// Récupération des données du fichier JSON
async function getPhotographers() {
  const response = await fetch("./data/photographers.json");
  const data = response.json();
  return data;
}
// Récupération des élément du DOM et boucle
async function displayData(photographers) {
  const photographersSection = document.querySelector(".photographer_section");
  photographers.forEach((photographer) => {
    const photographerModel = photographerFactory(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
  });
}
// Récupèration la data des photographes
async function init() {
  const { photographers } = await getPhotographers();
  displayData(photographers);
  tabindexIndex();
}
init();




