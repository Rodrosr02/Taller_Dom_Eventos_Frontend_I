const botonTop = document.getElementById("myBtn");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    botonTop.style.display = "block";
  } else {
    botonTop.style.display = "none";
  }
});

botonTop.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
