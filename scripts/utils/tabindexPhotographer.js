function tabindexPhotographer() {
  const tabindexLogo = document.querySelector(".logoLink");
  const contactMe = document.querySelector(".contact_me_button");
  const filter = document.querySelector("#filter");
  const tabindexPhotographerIMG = document.querySelectorAll("#imageAndVideoContainer");
  const tabindexLikes = document.querySelectorAll(".likeButton");
  let tabindexArray = [];
  tabindexLogo.setAttribute("tabindex", "1");
  contactMe.setAttribute("tabindex", "2");
  filter.setAttribute("tabindex", "3");
  tabindexArray.push(tabindexLogo);
  tabindexArray.push(contactMe);
  tabindexArray.push(filter);

  for (let i = 0; i <= tabindexPhotographerIMG.length - 1; i++) {
    tabindexArray.push(tabindexPhotographerIMG[i].setAttribute("tabindex", `4`));
    tabindexArray.push(tabindexLikes[i].setAttribute("tabindex", `4`));
  }
  return tabindexArray;
}
export default tabindexPhotographer;
