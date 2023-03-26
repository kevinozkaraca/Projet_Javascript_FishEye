
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
    lighBoxNavigation()
  }
  if (e.code == "Enter") {
    const imageOnLightBox = document.querySelector("#imageOnLightBox")
    const arrowsAndImages = document.querySelector("#arrowsAndImages")
    // PLay en cas de vidéo
    if (arrowsAndImages.innerHTML.includes("video")) {
      imageOnLightBox.play()
    }
  }
}
// fonction pour parcourir les éléments du site
function lighBoxNavigation() {
  window.scrollTo(0, 0);
  let lightBoxContainer = document.querySelector("#lightBoxContainer")
  // Si la lighBox est présente
  if (lightBoxContainer != null) {
    document.addEventListener("keydown", maFonction);
  } else {
    document.removeEventListener("keydown", maFonction)
  }
}

export default lighBoxNavigation;