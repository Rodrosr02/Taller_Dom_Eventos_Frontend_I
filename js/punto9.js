const menu = document.getElementById("menu");

window.addEventListener("scroll", function () {
  if (window.scrollY > 50) {
    menu.style.backgroundColor = "#e63946";
  } else {
    menu.style.backgroundColor = "black";
  }
});
