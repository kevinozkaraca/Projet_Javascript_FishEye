// fonction pour parcourir les éléments du site
function browsItems() {
  const adressWeb = window.location.href;
  // Fonctionnalités pour la page photographer :
  if (adressWeb.includes("photographer")) {
    let lightBox = document.querySelector("#lightBox");
    // Si la lighBox est présente
    if (lightBox != null) {
      document.addEventListener("keydown", (e) => {
        e.preventDefault()
        const arrowLeft = document.getElementById("arrowLeft");
        const arrowRight = document.getElementById("arrowRight");
        if (e.code == "ArrowLeft" || e.code == "Tab") {
          window.scrollTo(0, 0);
          arrowLeft.click();
        }
        if (e.code == "ArrowRight") {
          arrowRight.click();
        }
        if (e.code == "Escape") {
          lightBox.remove()

        }
        if (e.code == "Enter") {
          console.log("ok")
        }
      });
    } else {
      const imageAndVideoContainer = document.querySelectorAll("#imageAndVideoContainer");
      imageAndVideoContainer.forEach((element) => {
        element.setAttribute("tabindex", "4");
      })

    }
  }
}
export default browsItems;


/*
 const imageAndVideoContainer = document.querySelectorAll("#imageAndVideoContainer");
          imageAndVideoContainer.setAttribute("tabindex", "4");

*/