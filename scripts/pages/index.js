import photographerFactory from "../factories/photographerFactory.js";
import browsItems from "../utils/browseItems.js";
import tabindexIndex from "../utils/tabindexIndex.js";
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
