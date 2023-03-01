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
    const lightBox = document.querySelector("#lightBox");
    // Si la lighBox est absente
    if (lightBox == null) {
      const logo = document.querySelector(".logo");
      const contactMeButton = document.querySelector("#contact_me_button");
      const filterPopularity = document.querySelector("#filter").value;
      console.log(filterPopularity);
    }
    // Si la lighBox est présente
    if (lightBox) {
      document.addEventListener("keydown", (e) => {
        const arrowLeft = document.getElementById("arrowLeft");
        const arrowRight = document.getElementById("arrowRight");
        if (e.code == "ArrowLeft") {
          arrowLeft.click();
        }
        if (e.code == "ArrowRight") {
          arrowRight.click();
        }
        if (e.code == "Escape") {
          lightBox.remove();
        }
      });
    }
  }
}
export default browsItems;
