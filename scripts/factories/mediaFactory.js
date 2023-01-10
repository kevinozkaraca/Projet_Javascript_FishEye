function mediaFactory(data) {
  // Récupération des données du fichiers JSON dans des variable
  const { price, date, likes, title, photographerId, id } = data;
  const imageUrl = `assets/media/${data.image}`;
  const videoUrl = `assets/media/${data.video}`;
  console.log(data);
  function getMediaCardDOM() {
    // Création des éléments pour l'affichage des médias
    const article = document.createElement("article");
    const link = document.createElement("a");
    const imgElement = document.createElement("img");
    const div1 = document.createElement("div");
    const div2 = document.createElement("div");
    const h2 = document.createElement("h2");
    const p = document.createElement("p");
    // Injection des éléments dans le DOM
    imgElement.setAttribute("src", imageUrl);
    div.className = "text_photo";
    div2.className = "likes_photo";
    h2.textContent = title;
    p.textContent = likes;
    article.appendChild(link);
    link.appendChild(img);
    article.appendChild(div);
    div1.appendChild(div2);
    div1.appendChild(h2);
    div2.appendChild(p);
    return article;
  }
  return { image: imageUrl, video: videoUrl, id, photographerId, price, date, getMediaCardDOM };
}
export default mediaFactory;
