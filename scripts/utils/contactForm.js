setTimeout(function () {
  const contact_button = document.querySelector(".contact_button");
  const contact_modal = document.querySelector("#contact_modal");
  const contact_me_button = document.querySelector(".contact_me_button");
  const firstname = document.getElementById("firstname");
  const lastname = document.getElementById("lastname");
  const email = document.getElementById("email");
  const message = document.getElementById("message");
  const closeModalCross = document.querySelector("#closeModalCross");

  console.log(contact_modal);

  contact_me_button.addEventListener("click", function () {
    contact_modal.style.display = "block";
  });

  closeModalCross.addEventListener("click", function () {
    contact_modal.style.display = "none";
  });

  let regexFirstName =
    /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
  let regexLastName =
    /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  contact_button.addEventListener("click", function (e) {
    e.preventDefault();
    console.log(`
    Voici les valeurs :
      ${firstname.value}
      ${lastname.value}
      ${email.value}
      ${message.value}
    `);
  });
}, 2000);
