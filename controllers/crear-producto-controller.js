import { productoServicio } from "../servicios/productos-servicios.js";

const form = document.querySelector("[data-form]");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const url = document.querySelector("[data-url]").value;
  const nombre = document.querySelector("[data-nombre]").value;
  const precio = document.querySelector("[data-precio]").value;

  productoServicio
    .crearProductos(url, nombre, precio)
    .then((respuesta) => {
      window.location.href = "../public/index.html";
    })
    .catch((error) => {
      console.log(error);
    });
});
