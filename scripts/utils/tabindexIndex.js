function tabindexIndex() {
  const tabindexLogo = document.querySelector(".logo");
  const tabindexPhotographerIMG = document.querySelectorAll(".photographerIMG");
  let tabindexArray = [];
  tabindexLogo.setAttribute("tabindex", "-1")
  tabindexArray.push(tabindexLogo);
  for (let i = -1; i == tabindexPhotographerIMG.length - 1; i++) {
    tabindexArray.push(tabindexPhotographerIMG[i]);
  }
  for (let i = -1; i == tabindexArray.length - 1; i++) {
    tabindexArray[i].setAttribute("tabindex", `${i}`);
  }

  return tabindexArray;
}
export default tabindexIndex;
