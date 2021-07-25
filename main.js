let images = document.getElementsByClassName("popImg");
for (let i = 0; i < images.length; i++) {
  let img = images[i];
  img.addEventListener("mouseover", function () {
    img.style.transform = "scale(1.11)";
  });
  img.addEventListener("mouseout", function () {
    img.style.transform = "scale(1)";
  });
}
let aLink = document.getElementsByClassName("aLink");
for (let i = 0; i < images.length; i++) {
  let link = aLink[i];
  link.addEventListener("mouseover", function () {
    link.style.color = "#3f1b9b";
  });
  link.addEventListener("mouseout", function () {
    link.style.color = "#5624d0";
  });
}
//home button ->go to main page
const btnH = document.getElementsByClassName("btnH");
for (let i = 0; i < btnH.length; i++) {
  btnH[i].addEventListener("click", function () {
    window.location.href = "main.html";
  });
}

function myDarkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}
