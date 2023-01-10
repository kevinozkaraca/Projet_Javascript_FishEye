import mediaFactory from "../factories/mediaFactory.js";
// Récupération des informations du lien de la page :
const params = new URLSearchParams(window.location.search);
const photographerId = params.get("id");

// Séléction du photographe et affichage de son  :
function fetchPhotographer(photographerId) {
  fetch("./data/photographers.json").then(function (response) {
    response.json().then(function (json) {
      console.log(json.media[0]);
      // Data du photographe
      const dataPhotographers = json.photographers.find((data) => data.id == photographerId);
      const { city, country, id, name, portrait, price, tagline } = dataPhotographers;
      // Medias du photographe
      const dataMedias = json.media;
      // Affichage des médias du photographe
      for (let i = 0; i < dataMedias.length; i++) {
        if (dataPhotographers.id == dataMedias[i].photographerId) {
          // A integrer
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
