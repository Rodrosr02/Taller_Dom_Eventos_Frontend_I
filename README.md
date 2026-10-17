# Taller 2 - DOM y Eventos en JavaScript

Proyecto del curso **Programación Web 1** (Profe. Jossy Tello). Cada punto usa el código anexo (HTML y CSS) que pide el taller y le agrega el JavaScript con los eventos `click`, `change`, `scroll` y `load`.

## Cómo usarlo

1. Descarga o clona el repositorio.
2. Abre `index.html` en el navegador y entra a cada ejercicio desde su tarjeta.
3. Punto 1: activa la vista de celular (F12 → Ctrl+Shift+M).
4. Punto 11: necesita internet (usa w3.css e imágenes de w3schools, como el código anexo).

## Estructura

```
Taller_DOM_Eventos/
├── index.html              # Índice con los ejercicios
├── css/
│   ├── index.css           # Estilo del índice (synthwave)
│   ├── volver.css          # Botón "← Índice" de cada ejercicio
│   ├── punto1.css ... punto4.css, punto9y10.css, punto11.css   # CSS del código anexo
├── js/
│   └── punto1.js ... punto6.js, punto9.js, punto10.js, punto11.js
└── puntos/
    └── punto1.html ... punto6.html, punto9.html, punto10.html, punto11.html
```

## Ajustes sobre el código anexo

- Se movió el `<style>` de cada punto a su archivo en `css/` y se agregó `<meta charset="UTF-8">`.
- Punto 1: se agregó un `padding-top` al contenido para que el menú fijo no lo tape.
- Punto 5: se quitó el `onclick="myFunction()"` porque el ejercicio pide usar el evento `change` desde JavaScript.
- Puntos 9 y 10: se agregó `id="menu"` al div del menú. El punto 10 carga también `punto9.js`.
- Punto 11: se agregó el icono de carga (HTML, CSS y JS).

## Tecnologías

HTML5 · CSS3 · JavaScript vanilla (eventos del DOM)
