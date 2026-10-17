const loader = document.getElementById("loader");

window.addEventListener("load", function () {
  setTimeout(function () {
    loader.classList.add("oculto");
  }, 3000);
});
