

function tabindexPhotographer() {
  const tabindexLogo = document.querySelector(".logoLink");
  const contactMe = document.querySelector(".contact_me_button");
  const filter = document.querySelector("#filter");
  const tabindexPhotographerIMG = document.querySelectorAll("#imageAndVideoContainer");
  const tabindexLikes = document.querySelectorAll(".likeButton");
  const imageAndVideoOnpage = document.querySelectorAll("#imageAndVideoOnpage");
  const optionsFilter = document.querySelectorAll("option");
  const likeButton = document.querySelectorAll(".likeButton");
  let tabindexArray = [];
  tabindexLogo.setAttribute("tabindex", "1");
  contactMe.setAttribute("tabindex", "2");
  filter.setAttribute("tabindex", "3");
  filter.setAttribute("aria-label", "filter");
  optionsFilter[0].setAttribute("aria-label", "filter by popularity");
  optionsFilter[1].setAttribute("aria-label", "filter by title");
  optionsFilter[2].setAttribute("aria-label", "filter by date");
  tabindexArray.push(tabindexLogo);
  tabindexArray.push(contactMe);
  tabindexArray.push(filter);
  for (let i = 0; i <= tabindexPhotographerIMG.length - 1; i++) {
    tabindexArray.push(tabindexPhotographerIMG[i].setAttribute("tabindex", `4`));
    tabindexArray.push(tabindexLikes[i].setAttribute("tabindex", `4`));
    tabindexLikes[i].addEventListener("focus", () => {
      document.addEventListener("keydown", (element2) => {
        if (element2.code == "Space") {
          element2.preventDefault();
          tabindexLikes[i].click();

        }
      })
    })
    tabindexPhotographerIMG[i].addEventListener("focus", (e) => {
      document.addEventListener("keydown", (element1) => {
        if (element1.code == "Enter") {
          const imageAndVideoOnpage = document.querySelectorAll("#imageAndVideoOnpage");
          imageAndVideoOnpage[i].click();
          window.scrollTo(0, 0);
          // Fonctionnalité en cas de lightbox
          if (lightBoxContainer != null) {
            let lightBoxContainer = document.querySelector("#lightBoxContainer")
            const arrowLeft = document.getElementById("arrowLeft");
            const arrowRight = document.getElementById("arrowRight");
            if (e.code == "ArrowLeft" || e.code == "Tab") {
              e.preventDefault()
              window.scrollTo(0, 0);
              arrowLeft.click();
            }
            if (e.code == "ArrowRight") {
              arrowRight.click();
            }
            if (e.code == "Escape") {
              lightBoxContainer.remove()

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
        }
      })

    })
  }
  return tabindexArray;
}
export default tabindexPhotographer;
