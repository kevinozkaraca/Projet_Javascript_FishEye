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
    tabindexLikes[i].addEventListener("focus", (e) => {
      document.addEventListener("keydown", (element2) => {
        if (element2.code == "Enter") {
          e.preventDefault();
          tabindexLikes[i].click();
        }
      })
    })
    tabindexPhotographerIMG[i].addEventListener("focus", (e) => {
      document.addEventListener("keydown", (element1) => {
        if (element1.code == "Enter") {
          e.preventDefault();
          const imageAndVideoOnpage = document.querySelectorAll("#imageAndVideoOnpage");
          imageAndVideoOnpage[i].click();
        }
      })

    })
  }





  return tabindexArray;
}
export default tabindexPhotographer;
