function mediaFactory(data) {
  // Récupération des données du fichiers JSON dans des variable
  const { id, photographerId, title, likes, date, price } = data;
  const imageUrl = `./assets/${data.image}`;
  const videoUrl = `./assets/${data.video}`;
  function getMediaCardDOM() {
    // Création des éléments pour l'affichage des médias
    const article = document.createElement("article");
    const div1 = document.createElement("div");
    let imageOrVideoLink;
    let imageOrVideoBalise = "";
    if (imageUrl == `./assets/${undefined}`) {
      imageOrVideoBalise = "video controls=true";
      imageOrVideoLink = data.video;
    } else {
      imageOrVideoBalise = "img";
      imageOrVideoLink = data.image;
    }
    // Injection des éléments dans le DOM
    const gabarit = `
    <div class="all_container">
      <div class="text_container">
        <h3>${title}</h3>
        <p alt="likes" class="likes">${likes} ❤</p>
      </div>
      <a href="#">
        <${imageOrVideoBalise} src="./assets/${imageOrVideoLink}" alt="${title}, closeup view">
      </a>
    </div>
    `;
    article.appendChild(div1);
    div1.innerHTML = gabarit;
    // affichage du carrouselle image
    div1.addEventListener("click", (e) => {
      console.log(e.target.src);
    });

    return article;
  }
  return { image: imageUrl, video: videoUrl, id, photographerId, title, likes, date, price, getMediaCardDOM };
}
export default mediaFactory;
