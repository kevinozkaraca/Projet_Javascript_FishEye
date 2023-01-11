function mediaFactory(data) {
  // Récupération des données du fichiers JSON dans des variable
  const { id, photographerId, title, likes, date, price } = data;
  const imageUrl = `assets/${data.image}`;
  const videoUrl = `assets/${data.video}`;
  function getMediaCardDOM() {
    // Création des éléments pour l'affichage des médias
    const article = document.createElement("article");
    const link = document.createElement("a");
    const div1 = document.createElement("div");
    const div2 = document.createElement("div");
    const h2 = document.createElement("h2");
    const p = document.createElement("p");
    // Injection des éléments dans le DOM
    article.appendChild(link);
    article.appendChild(div1);
    div1.appendChild(div2);
    div1.appendChild(h2);
    div2.appendChild(p);
    div1.className = "text_photo";
    div2.className = "likes_photo";
    h2.textContent = title;
    p.textContent = likes;
    return article;
  }
  return { image: imageUrl, video: videoUrl, id, photographerId, title, likes, date, price, getMediaCardDOM };
}
export default mediaFactory;
