const listado = document.querySelector(".nieve");
const resultado = document.querySelector(".resultado");

listado.addEventListener("change", function () {
  if (listado.value === "") {
    resultado.textContent = "";
    return;
  }
  const sabor = listado.options[listado.selectedIndex].text;
  resultado.textContent = "Te gusta el sabor " + sabor.toLowerCase();
});
