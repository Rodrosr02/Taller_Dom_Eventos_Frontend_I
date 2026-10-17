const navbar = document.getElementById("myNavbar");
const iconoMenu = navbar.querySelector(".icon");

iconoMenu.addEventListener("click", function () {
  navbar.classList.toggle("responsive");
});
