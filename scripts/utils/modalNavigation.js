
// Fonctionnalité en cas de la modal
function maFonctionModal(e) {
    let modal_container = document.querySelector("#modal_container")
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
        modalNavigation()
    }
    if (e.code == "Enter") {
        console.log(lighBoxH3);
        // Envoie du formulaire

    }
}
// fonction pour parcourir les éléments du site
function modalNavigation() {
    window.scrollTo(0, 0);
    let modal_container = document.querySelector("#modal_container")
    // Si la modal est présente
    if (modal_container != null) {
        document.addEventListener("keydown", maFonctionModal);
    } else {
        document.removeEventListener("keydown", maFonctionModal)

    }

}

export default modalNavigation;