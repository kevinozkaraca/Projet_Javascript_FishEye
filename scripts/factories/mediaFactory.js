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
        <p alt="likes" class="likes">${likes} <button id="likeButton">❤</button></p>
      </div>
      <a href="#">
        <${imageOrVideoBalise} src="./assets/${imageOrVideoLink}" alt="${title}, closeup view">
      </a>
    </div>
    `;
    article.appendChild(div1);
    div1.innerHTML = gabarit;
    // affichage du carrouselle image et gerer les likes
    const likeButton = document.getElementsByClassName("likeButton");
    const likesNumber = document.getElementsByClassName("likes");
    div1.addEventListener("click", (e) => {
      console.log(e.target);
      /*
      
      IF BUTTON : likes ---> IF IMAGE : lightbox
      
      */
      if (e.target.innerHTML == "❤") {
        console.log("likes ++");
      }
      if (e.target.src) {
        if (e.target.src.includes("jpg") || e.target.src.includes("mp4")) {
          console.log("image or video");
        }
      }
    });

    return article;
  }
  return { image: imageUrl, video: videoUrl, id, photographerId, title, likes, date, price, getMediaCardDOM };
}
export default mediaFactory;
