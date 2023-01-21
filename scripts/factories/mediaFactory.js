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
    const h3 = document.createElement("h3");
    const p = document.createElement("p");
    const imgElement = document.createElement("img");
    const videoElement = document.createElement("video");
    // Injection des éléments dans le DOM
    article.appendChild(link);
    article.appendChild(div2);
    div2.appendChild(div1);
    div1.appendChild(h3);
    div1.appendChild(p);
    if (imageUrl == `assets/${undefined}`) {
      div2.appendChild(videoElement);
      videoElement.setAttribute("controls", "true");
      videoElement.src = videoUrl;
    } else {
      div2.appendChild(imgElement);
      imgElement.src = imageUrl;
    }
    div2.className = "all_container";
    div1.className = "text_container";
    h3.textContent = title;
    p.textContent = `${likes} ❤`;
    return article;
  }
  return { image: imageUrl, video: videoUrl, id, photographerId, title, likes, date, price, getMediaCardDOM };
}
export default mediaFactory;
