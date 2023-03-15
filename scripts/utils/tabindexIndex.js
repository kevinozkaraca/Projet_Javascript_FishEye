function tabindexIndex() {
  const tabindexLogo = document.querySelector(".logo");
  const tabindexPhotographerIMG = document.querySelectorAll(".photographerIMG");
  let tabindexArray = [];
  tabindexArray.push(tabindexLogo);
  for (let i = 0; i <= tabindexPhotographerIMG.length - 1; i++) {
    tabindexArray.push(tabindexPhotographerIMG[i]);
  }
  for (let i = 0; i <= tabindexArray.length - 1; i++) {
    tabindexArray[i].setAttribute("tabindex", i);
  }
}
export default tabindexIndex;
