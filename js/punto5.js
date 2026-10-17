const checkbox = document.getElementById("myCheck");
const texto = document.getElementById("text");

checkbox.addEventListener("change", function () {
  if (checkbox.checked) {
    texto.style.display = "block";
  } else {
    texto.style.display = "none";
  }
});
