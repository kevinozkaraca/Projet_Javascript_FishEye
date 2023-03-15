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
      if (e.code == "ArrowRight" || e.code == "Tab") {
        e.preventDefault();
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
    const logo = document.querySelector(".logo");
    const contactMe = document.querySelector(".contact_me_button");
    const filter = document.querySelector("#filter");
    const imageAndVideoContainerLink = document.querySelectorAll("#imageAndVideoContainer");
    const AllLikeButton = document.querySelectorAll(".likeButton");
    let elementCounter = 0;
    let selectedLink;

    // Si la lighBox est absente
    if (lightBox == null) {
      // Rassemblement des éléments
      let allElements = [];
      allElements.push(logo);
      allElements.push(contactMe);
      allElements.push(filter);
      for (let i = 0; i < imageAndVideoContainerLink.length; i++) {
        allElements.push(imageAndVideoContainerLink[i]);
        allElements.push(AllLikeButton[i]);
      }

      let counterSelect = 0;
      document.addEventListener("keydown", (e) => {
        if (elementCounter == allElements.length - 1) {
          elementCounter = 0;
        }
        if (elementCounter == -1) {
          elementCounter = allElements.length - 2;
        }
        if (e.code == "ArrowRight" || e.code == "Tab") {
          e.preventDefault();
          allElements.forEach((element) => {
            element.classList.remove("selected");
          });
          elementCounter++;
        }
        if (e.code == "ArrowLeft") {
          allElements.forEach((element) => {
            element.classList.remove("selected");
          });
          elementCounter--;
        }
        allElements[elementCounter].classList.add("selected");
        selectedLink = allElements[elementCounter];

        if (selectedLink.innerText == "❤") {
          if (e.code == "Enter") {
            selectedLink.click();
          }
        }

        if (selectedLink == filter) {
          if (e.code == "ArrowDown") {
            e.preventDefault();
            counterSelect += 1;
            if (counterSelect == 3) {
              counterSelect = 0;
            }
            filter.selectedIndex = counterSelect;
            filter.dispatchEvent(new Event("change"));
            const imageAndVideoContainerLink = document.querySelectorAll("#imageAndVideoContainer");
            const AllLikeButton = document.querySelectorAll(".likeButton");
            allElements.length = 0;
            allElements.push(logo);
            allElements.push(contactMe);
            allElements.push(filter);
            for (let i = 0; i < imageAndVideoContainerLink.length; i++) {
              allElements.push(imageAndVideoContainerLink[i]);
              allElements.push(AllLikeButton[i]);
            }
          }
        }
        return selectedLink;
      });
    }
    // Si la lighBox est présente
    if (lightBox) {
      window.scrollTo(0, 0);
      document.addEventListener("keydown", (e) => {
        const arrowLeft = document.getElementById("arrowLeft");
        const arrowRight = document.getElementById("arrowRight");
        if (e.code == "ArrowLeft") {
          arrowLeft.click();
        }
        if (e.code == "ArrowRight" || e.code == "Tab") {
          e.preventDefault();
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
