
// fonction pour parcourir les éléments du site
function lighBoxNavigation() {
  console.log("oui")
  window.scrollTo(0, 0);
  let lightBox = document.querySelector("#lightBox");
  // Si la lighBox est présente
  if (lightBoxBool = 1) {
    console.log("oui --")
    document.addEventListener("keydown", (e) => {
      e.preventDefault()
      const arrowLeft = document.getElementById("arrowLeft");
      const arrowRight = document.getElementById("arrowRight");
      if (e.code == "ArrowLeft" || e.code == "Tab") {
        window.scrollTo(0, 0);
        e.preventDefault();
        arrowLeft.click();
        console.log("aie")
      }
      if (e.code == "ArrowRight") {
        arrowRight.click();
      }
      if (e.code == "Escape") {
        lightBox.remove()

      }
      if (e.code == "Enter") {
        console.log("ok");
        // PLay en cas de vidéo
      }
    });
  }
}
export default lighBoxNavigation;