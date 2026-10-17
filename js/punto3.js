const menuLateral = document.getElementById("mySidebar");
const contenidoPrincipal = document.getElementById("main");
const botonAbrir = document.querySelector(".openbtn");
const botonCerrar = document.querySelector(".closebtn");

botonAbrir.addEventListener("click", function () {
  menuLateral.style.left = "0";
  contenidoPrincipal.style.marginLeft = "200px"; 
});

botonCerrar.addEventListener("click", function () {
  menuLateral.style.left = "-200px";
  contenidoPrincipal.style.marginLeft = "0";
});
