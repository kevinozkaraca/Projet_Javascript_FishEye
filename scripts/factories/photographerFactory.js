function photographerFactory(data) {
  // Récupération des données du fichier JSON dans des variables
  const { city, country, id, name, portrait, price, tagline } = data;
  const picture = `assets/photographers/${portrait}`;

  function getUserCardDOM() {
    // Création des éléments pour l'affichage des photographes
    const article = document.createElement("article");
    const div1 = document.createElement("div");
    const gabarit = `
    <article>
    <div class="imageAndName">
      <a href="./photographer.html?id=${id}">
        <div class="imageContainer">
          <img src="${picture}" alt="Photo du photographe ${name}" />
        </div>
        <h2>${name}</h2>
      </a>
    </div>
    <div class="cityAndOther">
      <p>${city}, ${country}</p>
      <p>${tagline}</p>
      <p>${price} €/jour</p>
    </div>
  </article>`;
    article.appendChild(div1);
    div1.innerHTML = gabarit;
    return article;
  }
  return { city, country, id, name, portrait, price, tagline, getUserCardDOM };
}
export default photographerFactory;
