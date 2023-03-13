import browsItems from "../utils/browseItems.js";

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
    const template = `
    <div class="all_container">
      <div class="text_container">
        <h3>${title}</h3>
        <p alt="likes" id="likes${counter}" class="likes">${likes} </p><p class="likeButton" id="likeButton${counter}">❤</p>
      </div>
      <a id="imageAndVideoContainer">
        <${imageOrVideoBalise} src="./assets/${imageOrVideoLink}" alt="${title}, closeup view" id="imageAndVideoOnpage">
      </a>
    </div>
    `;
    article.appendChild(div1);
    div1.innerHTML = template;
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
          let template = `
          <div id="lightBox" arial-label="image closeup view">
            <img src="assets/icons/close.svg" id="closeLightBox" alt="Close dialog">
            <div id="arrowsAndImages">
              <div id="arrowLeft" alt="Previous image">&lt</div>
              <${imageOrVideoBalise} src ="${e.target.src}" id="imageOnLightBox" alt="${e.target.alt}">
              <div id="arrowRight" alt="Next image">&gt </div>
            </div>
            <h3 id="lighBoxH3">${title}</h3>
          </div>         
            `;
          imagesContainer.appendChild(div1);
          div1.setAttribute("id", "lightBoxContainer");
          div1.innerHTML = template;
          const lightBox = document.querySelector("#lightBox");
          const arrowLeft = document.querySelector("#arrowLeft");
          const arrowRight = document.querySelector("#arrowRight");
          const closeLightBox = document.querySelector("#closeLightBox");
          const imageAndVideoOnpage = document.querySelectorAll("#imageAndVideoOnpage");
          const imageOnLightBox = document.querySelector("#imageOnLightBox");
          const lighBoxH3 = document.querySelector("#lighBoxH3");
          const arrowsAndImages = document.querySelector("#arrowsAndImages");
          let createImgElement = document.createElement("img");
          let createVideoElement = document.createElement("video");
          let createH3Element = document.createElement("h3");
          const lengthOfimageAndVideoOnpage = imageAndVideoOnpage.length - 1;
          let counterOfimageAndVideoOnpage = 0;

          lightBox.addEventListener("click", (e) => {
            e.preventDefault();

            // gestion de l'erreur en cas de video ou image

            if (e.target == arrowLeft) {
              if (counterOfimageAndVideoOnpage >= lengthOfimageAndVideoOnpage) {
                counterOfimageAndVideoOnpage = 0;
              }
              counterOfimageAndVideoOnpage++;

              imageOnLightBox.src = imageAndVideoOnpage[counterOfimageAndVideoOnpage].src;
            }
            if (e.target == arrowRight) {
              if (counterOfimageAndVideoOnpage <= 0) {
                counterOfimageAndVideoOnpage = lengthOfimageAndVideoOnpage;
              }
              counterOfimageAndVideoOnpage--;
              imageOnLightBox.src = imageAndVideoOnpage[counterOfimageAndVideoOnpage].src;
            }

            if (imageOnLightBox.src.includes("mp4")) {
              const imageOnLightBox = document.querySelector("#imageOnLightBox");
              imageOnLightBox.remove();
              arrowLeft.insertAdjacentElement("afterend", createVideoElement);
              createVideoElement.setAttribute("src", imageAndVideoOnpage[counterOfimageAndVideoOnpage].src);
              createVideoElement.setAttribute("controls", true);
              createVideoElement.setAttribute("id", "imageOnLightBox");
              createVideoElement.setAttribute("alt", imageAndVideoOnpage[counterOfimageAndVideoOnpage].alt);
              lighBoxH3.innerHTML = imageAndVideoOnpage[counterOfimageAndVideoOnpage];
              /* 

                ------------- CORRIGER BUG ICI ! !!!

              */
              console.log(imageAndVideoOnpage[counterOfimageAndVideoOnpage]);
            }
            if (imageOnLightBox.src.includes("jpg")) {
              const imageOnLightBox = document.querySelector("#imageOnLightBox");
              imageOnLightBox.remove();
              arrowLeft.insertAdjacentElement("afterend", createImgElement);
              createImgElement.setAttribute("src", imageAndVideoOnpage[counterOfimageAndVideoOnpage].src);
              createImgElement.setAttribute("controls", true);
              createImgElement.setAttribute("id", "imageOnLightBox");
              createImgElement.setAttribute("alt", imageAndVideoOnpage[counterOfimageAndVideoOnpage].alt);
              lighBoxH3.innerHTML = imageAndVideoOnpage[counterOfimageAndVideoOnpage].alt;
            }
            if (e.target == closeLightBox) {
              lightBox.remove();
            }
          });
          browsItems();
        }
      }
    });

    return article;
  }
  counter++;

  return { image: imageUrl, video: videoUrl, id, photographerId, title, likes, date, price, getMediaCardDOM };
}

export default mediaFactory;
