function photographerFactory(data) {
  // Récupération des données du fichier JSON dans des variables
  const { city, country, id, name, portrait, price, tagline } = data;
  const picture = `assets/photographers/${portrait}`;

  function getUserCardDOM() {
    // Création des éléments pour l'affichage des photographes
    const div = document.createElement("div");
    const link = document.createElement("a");
    const article = document.createElement("article");
    const imgElement = document.createElement("img");
    const h2 = document.createElement("h2");
    const locationElement = document.createElement("p");
    const priceElement = document.createElement("p");
    const taglineElement = document.createElement("p");
    // Injection des éléments dans le DOM
    imgElement.setAttribute("src", picture);
    imgElement.alt = `Photo du photographe ${name}`;
    link.href = `./photographer.html?id=${id}`;
    link.ariaLabel = name;
    h2.textContent = name;
    div.appendChild(locationElement);
    div.appendChild(taglineElement);
    div.appendChild(priceElement);
    article.appendChild(div);
    article.appendChild(link);
    link.appendChild(imgElement);
    link.appendChild(h2);
    locationElement.textContent = `${city}, ${country}`;
    taglineElement.textContent = tagline;
    priceElement.textContent = `${price} €/jour`;
    return article;
  }
  return { city, country, id, name, portrait, price, tagline, getUserCardDOM };
}
export default photographerFactory;
