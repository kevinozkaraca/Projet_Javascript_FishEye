let counter = 0;

function mediaFactory(data) {
  // Récupération des données du fichiers JSON dans des variable
  let { id, photographerId, title, likes, date, price } = data;
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
        <p alt="likes" id="likes${counter}" class="likes">${likes} </p><p class="likeButton" id="likeButton${counter}">❤</p>
      </div>
      <a id="imageAndVideoContainer">
        <${imageOrVideoBalise} src="./assets/${imageOrVideoLink}" alt="${title}, closeup view">
      </a>
    </div>
    `;
    article.appendChild(div1);
    div1.innerHTML = gabarit;
    // affichage du carrouselle image et gerer les likes
    let likeCounter = 1;

    div1.addEventListener("click", (e) => {
      // Ajout d'un like
      if (e.target.innerHTML == "❤") {
        let likePlus = document.getElementById(`likes${e.target.id.slice(10, 13)}`);
        let alllikePlus = document.getElementById("allLikesCounter");
        likePlus.innerText = +likePlus.innerText + likeCounter;
        alllikePlus.innerText = +alllikePlus.innerText + likeCounter;
        likeCounter = 0;
      }
      // Affichage de la lightbox
      if (e.target.src) {
        if (e.target.src.includes("jpg") || e.target.src.includes("mp4")) {
          let imageAndVideoContainer = document.querySelectorAll("#imageAndVideoContainer");
          const imagesContainer = document.querySelector(".images-container");
          const div1 = document.createElement("div");
          if (e.target.src.includes("mp4")) {
            imageOrVideoBalise = "video controls=true";
            imageOrVideoLink = data.video;
          } else {
            imageOrVideoBalise = "img";
            imageOrVideoLink = data.image;
          }
          let gabarit = `
          <div id="lightBox">
            <img src="assets/icons/close.svg" />
            <div id="arrowsAndImages">
              <div id="arrowLeft">&lt</div>
              <${imageOrVideoBalise} src ="${e.target.src}">
              <div id="arrowRight">&gt </div>
            </div>
          </div>         
            `;
          imagesContainer.appendChild(div1);
          div1.innerHTML = gabarit;
        }
      }
    });

    return article;
  }
  counter++;
  return { image: imageUrl, video: videoUrl, id, photographerId, title, likes, date, price, getMediaCardDOM };
}
export default mediaFactory;
