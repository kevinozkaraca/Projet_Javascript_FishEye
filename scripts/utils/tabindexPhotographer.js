function tabindexPhotographer() {
  const tabindexLogo = document.querySelector(".logoLink");
  const contactMe = document.querySelector(".contact_me_button");
  const filter = document.querySelector("#filter");
  const tabindexPhotographerIMG = document.querySelectorAll("#imageAndVideoContainer");
  const tabindexLikes = document.querySelectorAll(".likeButton");
  const imageAndVideoOnpage = document.querySelectorAll("#imageAndVideoOnpage");
  const optionsFilter = document.querySelectorAll("option");
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
        if (element2.code == "Enter") {
          tabindexLikes[i].click();
        }
      })
    })
    tabindexPhotographerIMG[i].addEventListener("focus", () => {
      let lightBoxContainer = document.querySelector("#lightBoxContainer")
      if (lightBoxContainer != null) {
        document.addEventListener("keydown", (element1) => {
          if (element1.code == "Enter") {
            imageAndVideoOnpage[i].click();
            console.log(tabindexPhotographerIMG[i]);
          }
        })
      }
    })
  }





  return tabindexArray;
}
export default tabindexPhotographer;
