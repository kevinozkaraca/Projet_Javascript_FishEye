let counter = 0;
// Fonctionnalité en cas de la modal
function maFonctionModal(e) {
    const allInputModal = document.querySelectorAll("input");
    const btn_envoyer = document.querySelector("#btn_envoyer");
    const closeModalCross = document.querySelector("#closeModalCross");
    if (e.code == "ArrowDown" || e.code == "Tab") {
        e.preventDefault();
        if (counter == allInputModal.length) {
            counter = 0;
        }
        allInputModal[counter].focus();
        counter++;
    }
    if (e.code == "Enter") {
        // Envoie du formulaire
        e.preventDefault();
        btn_envoyer.click();
    }
    if (e.code == "Escape") {
        e.preventDefault();
        // Envoie du formulaire
        window.location.reload()

    }
}
// fonction pour parcourir les éléments du site
function modalNavigation() {
    window.scrollTo(0, 0);
    const contact_modal = document.querySelector("#contact_modal");
    let lightBoxContainer = document.querySelector("#lightBoxContainer")
    // Si la modal est présente
    if (contact_modal.style.display != "block" || lightBoxContainer != null) {

        document.removeEventListener("keydown", maFonctionModal);
    } else {
        document.addEventListener("keydown", maFonctionModal);
    }
}

export default modalNavigation;
