const botonSubmenu = document.querySelector(".dropbtn");
const submenu = document.getElementById("myDropdown");

botonSubmenu.addEventListener("click", function (evento) {
  evento.stopPropagation(); 
  submenu.classList.toggle("show");
});

document.addEventListener("click", function () {
  submenu.classList.remove("show");
});
