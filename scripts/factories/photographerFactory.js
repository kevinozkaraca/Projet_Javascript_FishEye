function photographerFactory(data) {
  // Récupération des données du fichier JSON dans des variables
  const { city, country, id, name, portrait, price, tagline } = data;
  const picture = `assets/photographers/${portrait}`;

  function getUserCardDOM() {
    // Création des éléments pour l'affichage des photographes
    const div = document.createElement("div");
    const link1 = document.createElement("a");
    const article = document.createElement("article");
    const imgElement = document.createElement("img");
    const h2 = document.createElement("h2");
    const locationElement = document.createElement("p");
    const priceElement = document.createElement("p");
    const taglineElement = document.createElement("p");
    // Injection des éléments dans le DOM
    imgElement.setAttribute("src", picture);
    imgElement.alt = `Photo du photographe ${name}`;
    link1.href = `./photographer.html?id=${id}`;
    link1.ariaLabel = name;
    h2.textContent = name;
    article.appendChild(div);
    article.setAttribute("class", "photographer_section");
    article.appendChild(link1);
    link1.appendChild(imgElement);
    link1.appendChild(h2);
    link1.appendChild(locationElement);
    link1.appendChild(taglineElement);
    link1.appendChild(priceElement);
    locationElement.textContent = `${city}, ${country}`;
    taglineElement.textContent = tagline;
    priceElement.textContent = `${price} €/jour`;
    return article;
  }
  return { city, country, id, name, portrait, price, tagline, getUserCardDOM };
}
export default photographerFactory;
