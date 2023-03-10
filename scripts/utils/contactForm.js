async function formDisplay(e) {
  const imagesContainer = document.querySelector(".images-container");
  const template2 = `
       <div id="contact_modal">
         <div class="modal">
           <header id="contact_modal_header">
             <div>
               <h2>Contactez-moi ${e.name}</h2>
               <img src="assets/icons/close.svg" id="closeModalCross" alt="Close Contact form"/>
             </div>
           </header>
           <form method="get">
             <div>
               <label>Prénom</label>
               <input id="firstname" alt="First name" />
               <label>Nom</label>
               <input id="lastname" alt="Last name"/>
               <label>Email</label>
               <input id="email" alt="Email"/>
               <label>Votre message</label>
               <input id="message" alt="Your Message"/>
             </div>
             <button class="contact_button" id="btn_envoyer" alt="Send">Envoyer</button>
           </form>
         </div>
       </div>
  `;
  const div2 = document.createElement("div");
  div2.setAttribute("id", "modal_container");
  imagesContainer.insertAdjacentElement("afterend", div2);
  div2.innerHTML = template2;

  const contact_me_button = document.querySelector(".contact_me_button");
  contact_me_button.addEventListener("click", function () {
    contact_modal.style.display = "block";
  });
  const closeModalCross = document.querySelector("#closeModalCross");
  closeModalCross.addEventListener("click", function () {
    contact_modal.style.display = "none";
  });
  const contact_button = document.querySelector(".contact_button");
  const contact_modal = document.querySelector("#contact_modal");

  contact_button.addEventListener("click", function (e) {
    const firstname = document.getElementById("firstname");
    const lastname = document.getElementById("lastname");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
    e.preventDefault();
    console.log(`
   Voici les valeurs du formulaire :
   ${firstname.value}
   ${lastname.value}
   ${email.value}
   ${message.value}
   `);
  });
}

export default formDisplay;
