let counter = 0;
// Fonctionnalité en cas de la modal
function maFonctionModal(e) {
    e.preventDefault();
    let modal_container = document.querySelector("#modal_container");
    const allInputModal = document.querySelectorAll("input");
    const btn_envoyer = document.querySelector("#btn_envoyer");
    const closeModalCross = document.querySelector("#closeModalCross");
    if (e.code == "ArrowDown" || e.code == "Tab") {
        allInputModal[counter].focus();
        counter++;
    }
    if (e.code == "Enter") {
        // Envoie du formulaire
        btn_envoyer.click();
    }
    if (e.code == "Escape") {
        // Envoie du formulaire
        closeModalCross.click();
    }
}
// fonction pour parcourir les éléments du site
function modalNavigation() {
    window.scrollTo(0, 0);
    const contact_modal = document.querySelector("#contact_modal");
    // Si la modal est présente
    if (contact_modal.style.display != "block") {
        document.removeEventListener("keydown", maFonctionModal);
    } else {
        document.addEventListener("keydown", maFonctionModal);
    }
}

export default modalNavigation;
