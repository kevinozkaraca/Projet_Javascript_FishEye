
// Fonctionnalité en cas de lightbox
function maFonction(e) {
  let lightBoxContainer = document.querySelector("#lightBoxContainer")
  const arrowLeft = document.getElementById("arrowLeft");
  const arrowRight = document.getElementById("arrowRight");
  if (e.code == "ArrowLeft" || e.code == "Tab") {
    window.scrollTo(0, 0);
    e.preventDefault();
    arrowLeft.click();

  }
  if (e.code == "ArrowRight") {
    arrowRight.click();
  }
  if (e.code == "Escape") {
    lightBoxContainer.remove()
    console.log(lightBoxContainer)
    lighBoxNavigation()
  }
  if (e.code == "Enter") {
    console.log(lighBoxH3);
    // PLay en cas de vidéo

  }
}
// fonction pour parcourir les éléments du site
function lighBoxNavigation() {
  window.scrollTo(0, 0);
  let lightBoxContainer = document.querySelector("#lightBoxContainer")
  // Si la lighBox est présente
  console.log('La fonction est lancée')
  console.log(lightBoxContainer)
  if (lightBoxContainer != null) {

    document.addEventListener("keydown", maFonction);
  } else {
    document.removeEventListener("keydown", maFonction)

  }

}

export default lighBoxNavigation;