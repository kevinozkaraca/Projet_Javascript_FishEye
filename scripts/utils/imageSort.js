const filter = document.getElementById("filter");
const allImages = document.getElementsByClassName("all_container");
let imagelikes = allImages;
console.log(allImages);
filter.addEventListener("change", function () {
  if (filter.value == "Popularity") {
    console.log(filter.value);
  }
  if (filter.value == "Title") {
    console.log(filter.value);
  }
  if (filter.value == "Date") {
    console.log(filter.value);
  }
});
