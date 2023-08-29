import { productoServicio } from "../servicios/productos-servicios.js";
import { formatPrice } from "../formatterPrices.js";

const nuevoProducto = (imageUrl, name, price, id) => {
  const card = document.createElement("div");
  const contenido = `
        <div class="producto">
            <img src="${imageUrl}" alt="img">
            <h1 class="product-name"> ${name} </h1>
            <p class="precio">${formatPrice(price)}</p>
            <a class="ver-producto" href="../screens/producto.html?id=${id}">Ver Producto</a>
        </div>   
    `;
  card.innerHTML = contenido;
  card.dataset.id = id;

  return card;
};

const productos = document.querySelector("[data-product]");

const render = async() => {
    try {
        const listaProducto = await productoServicio.listaProductos();
        listaProducto.forEach( elemento => {
            productos.appendChild(
              nuevoProducto(
                elemento.imageUrl,
                elemento.name,
                elemento.price,
                elemento.id
              )
            )
        });

    } catch (error) {
        console.log(error)
    }
}
render();