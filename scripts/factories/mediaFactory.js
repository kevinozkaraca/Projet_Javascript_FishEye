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
        <${imageOrVideoBalise} src="./assets/${imageOrVideoLink}" alt="${title}, closeup view" id="imageOnpage">
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
            <img src="assets/icons/close.svg" id="closeLightBox"/>
            <div id="arrowsAndImages">
              <div id="arrowLeft">&lt</div>
              <${imageOrVideoBalise} src ="${e.target.src}" id="imageOnLightBox">
              <div id="arrowRight">&gt </div>
            </div>
          </div>         
            `;
          imagesContainer.appendChild(div1);
          div1.innerHTML = gabarit;
          const lightBox = document.querySelector("#lightBox");
          const arrowLeft = document.querySelector("#arrowLeft");
          const arrowRight = document.querySelector("#arrowRight");
          const closeLightBox = document.querySelector("#closeLightBox");
          const imageOnpage = document.querySelectorAll("#imageOnpage");
          const imageOnLightBox = document.querySelector("#imageOnLightBox");
          let createImgElement = document.createElement("img");
          let createVideoElement = document.createElement("video");
          const lengthOfImageOnPage = imageOnpage.length - 1;
          let counterOfImageOnPage = 0;

          lightBox.addEventListener("click", (e) => {
            e.preventDefault();
            imageOnLightBox.remove();
            // gestion de l'erreur en cas de video ou image
            if (imageOnLightBox.src.includes("mp4")) {
              const imageOnLightBox = document.querySelector("#imageOnLightBox");
              imageOnLightBox.remove();
              arrowLeft.insertAdjacentElement("afterend", createVideoElement);
              createVideoElement.setAttribute("src", imageOnpage[counterOfImageOnPage].src);
              createVideoElement.setAttribute("controls", true);
              createVideoElement.setAttribute("id", "imageOnLightBox");
            }
            if (imageOnLightBox.src.includes("jpg")) {
              const imageOnLightBox = document.querySelector("#imageOnLightBox");
              imageOnLightBox.remove();
              arrowLeft.insertAdjacentElement("afterend", createImgElement);
              createImgElement.setAttribute("src", imageOnpage[counterOfImageOnPage].src);
              createImgElement.setAttribute("controls", true);
              createImgElement.setAttribute("id", "imageOnLightBox");
            }
            if (e.target == arrowLeft) {
              if (counterOfImageOnPage >= lengthOfImageOnPage) {
                counterOfImageOnPage = 0;
              }
              counterOfImageOnPage++;
              imageOnLightBox.src = imageOnpage[counterOfImageOnPage].src;
            }
            if (e.target == arrowRight) {
              if (counterOfImageOnPage <= 0) {
                counterOfImageOnPage = lengthOfImageOnPage;
              }
              counterOfImageOnPage--;
              imageOnLightBox.src = imageOnpage[counterOfImageOnPage].src;
            }
            if (e.target == closeLightBox) {
              lightBox.remove();
            }
          });
        }
      }
    });

    return article;
  }
  counter++;
  return { image: imageUrl, video: videoUrl, id, photographerId, title, likes, date, price, getMediaCardDOM };
}

export default mediaFactory;
