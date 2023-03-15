function tabindexPhotographer() {
  const tabindexLogo = document.querySelector(".logo");
  const contactMe = document.querySelector(".contact_me_button");
  const filter = document.querySelector("#filter");
  const tabindexPhotographerIMG = document.querySelectorAll("#imageAndVideoOnpage");
  const tabindexLikes = document.querySelectorAll(".likeButton");
  let tabindexArray = [];
  tabindexArray.push(tabindexLogo);
  tabindexArray.push(contactMe);
  tabindexArray.push(filter);
  tabindexArray[0].setAttribute("tabindex", 0);
  tabindexArray[0].setAttribute("tabindex", 1);
  tabindexArray[0].setAttribute("tabindex", 2);
  for (let i = 0; i <= tabindexPhotographerIMG.length - 1; i++) {
    tabindexArray.push(tabindexPhotographerIMG[i].setAttribute("tabindex", 3));
    tabindexArray.push(tabindexLikes[i].setAttribute("tabindex", 3));
  }
}
export default tabindexPhotographer;
