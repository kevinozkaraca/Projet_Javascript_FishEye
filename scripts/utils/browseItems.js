// fonction pour parcourir les éléments du site

function browsItems() {
  let elementCounter = 0;
  let allImagesOnPage = document.getElementsByClassName("photographerIMG");
  let allLinkOnpage = document.getElementsByClassName("allIMGLink");
  console.log(allImagesOnPage);
  console.log(allLinkOnpage);
  const adressWeb = window.location.href;

  if (adressWeb.includes("index")) {
    document.addEventListener("keydown", (e) => {
      if (e.code == "ArrowLeft") {
        if (elementCounter == 6) {
          elementCounter = 0;
        }
        if (elementCounter == -1) {
          elementCounter = 5;
        }

        allImagesOnPage[elementCounter].style.transform = "scale(1.5)";
        elementCounter--;
      }
      if (e.code == "ArrowRight") {
        if (elementCounter == 6) {
          elementCounter = 0;
        }
        if (elementCounter == -1) {
          elementCounter = 5;
        }
        console.log(allImagesOnPage[elementCounter]);
        elementCounter++;
      }
      if (e.code == "Escape") {
        console.log("Oh yeah !!!");
      }
    });
  }

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
