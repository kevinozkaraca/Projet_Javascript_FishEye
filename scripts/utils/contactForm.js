const modal_button = document.querySelector(".contact_button");
const contact_modal = document.getElementById("contact_modal");
const contact_button = document.querySelector(".contact_button");
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const message = document.getElementById("message");
const closeModalCross = document.querySelector("#closeModalCross");

contact_button.addEventListener("click", function (e) {
  e.preventDefault();
  contact_modal.style.display = "block";
  console.log("objesfdsfsdfct");
});

closeModalCross.addEventListener("click", function (e) {
  e.preventDefault();
  contact_modal.style.display = "none";
  console.log("bug");
});

let regexFirstName =
  /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
let regexLastName =
  /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

// METRE EN PLACE LES REJEX
