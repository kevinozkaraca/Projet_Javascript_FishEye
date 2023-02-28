// fonction pour parcourir les éléments du site
function browsItems() {
  const adressWeb = window.location.href;

  // Fonctionnalités pour la page index :
  if (adressWeb.includes("index")) {
    let elementCounter = 0;
    let allImagesOnPage = [...document.getElementsByClassName("imageContainer")];
    let allLinkOnPage = document.getElementsByClassName("allIMGLink");
    let selectedLink;
    document.addEventListener("keydown", (e) => {
      // fonctions de la fleche gauche
      if (e.code == "ArrowLeft") {
        allImagesOnPage.forEach((element) => {
          element.classList.remove("imageContainerSelected");
          element.classList.add("imageContainer");
        });

        allImagesOnPage.forEach((element) => {
          element.classList.remove("imageContainerSelected");
          element.classList.add("imageContainer");
        });

        elementCounter--;
        if (elementCounter == 6) {
          elementCounter = 0;
        }
        if (elementCounter == -1) {
          elementCounter = 5;
        }
        allImagesOnPage[elementCounter].classList.add("imageContainerSelected");
        selectedLink = allLinkOnPage[elementCounter];

        return selectedLink;
      }

      // fonctions de la fleche droite
      if (e.code == "ArrowRight") {
        allImagesOnPage.forEach((element) => {
          element.classList.remove("imageContainerSelected");
          element.classList.add("imageContainer");
        });

        allImagesOnPage.forEach((element) => {
          element.classList.remove("imageContainerSelected");
          element.classList.add("imageContainer");
        });
        elementCounter++;
        if (elementCounter == 6) {
          elementCounter = 0;
        }
        if (elementCounter == -1) {
          elementCounter = 5;
        }
        allImagesOnPage[elementCounter].classList.add("imageContainerSelected");
        selectedLink = allLinkOnPage[elementCounter];

        return selectedLink;
      }
      // fonctions de la touche entrer
      if (e.code == "Enter") {
        selectedLink.click();
      }
    });
  }

  // Fonctionnalités pour la page photographer :
  if (adressWeb.includes("photographer")) {
    document.addEventListener("keydown", (e) => {
      let elementCounter = undefined;

      if (e.code == "ArrowLeft") {
        console.log("Oh yeah !!!");
      }
      if (e.code == "ArrowRight") {
        console.log("Oh yeah !!!");
      }
      if (e.code == "Escape") {
        console.log("Oh yeah !!!");
      }
    });
  }
}
export default browsItems;
