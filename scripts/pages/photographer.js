// Récupération des informations du lien de la page :
const params = new URLSearchParams(window.location.search);
const photographerId = params.get("id");

// Séléction du photographe :
function fetchPhotographer(photographerId) {
  fetch("./data/photographers.json").then(function (response) {
    response.json().then(function (json) {
      const result = json.photographers.find((data) => data.id == photographerId);
      const { city, country, id, name, portrait, price, tagline } = result;
      console.log(city, country, id, name, portrait, price, tagline);
    });
  });
}

fetchPhotographer(photographerId);
