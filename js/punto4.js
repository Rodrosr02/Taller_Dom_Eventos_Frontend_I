const botones = document.querySelectorAll(".accordion");

botones.forEach(function (boton) {
  boton.addEventListener("click", function () {
    boton.classList.toggle("active");  
    const panel = boton.nextElementSibling;

    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
});
