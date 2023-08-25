import { productoServicio } from '../servicios/productos-servicios.js';
import { formatPrice } from "../formatterPrices.js";

const listaProductos = (name, imageUrl, price, id) => {
  const card = document.createElement("div");

  const contenido = `
    <div class="producto">
        <div class="container">
            <button class="buttonDelete" type="button">
              <img class="deleteImage" src="../assets/delete.png" alt="Delete" />
            </button>
            
            <a href="../screens/editar-producto.html?id=${id}">
            
              <button class="buttonEdit" type="button">
                <img class="editImage" src="../assets/edit.png" alt="Editar" />
              </button>
            
            </a>
        </div>
        
        <img src="${imageUrl}" alt="img">
        <h1 class="product-name"> ${name} </h1>
        <p class="precio">${formatPrice(price)}</p>
    </div>
    `;
  card.innerHTML = contenido;
  console.log(card)
  card.dataset.id = id;
  return card;
};

const productos = document.querySelector("[data-allProducts]");

productos.addEventListener("click", async (evento) => {
  let deleteButton = evento.target.className === "deleteImage";
  if (deleteButton) {
    const producto = evento.target.closest("[data-id]");
    let id = producto.dataset.id;
    productoServicio
      .deleteProducto(id)
      .then((res) => {
        producto.remove();
        console.log(res);
      })
      .catch((err) => console.log(err));
  }
});

const render = async () => {
  try {
    const listaProducto = await productoServicio.listaProductos();
    listaProducto.forEach((producto) => {
      productos.appendChild(
        listaProductos(
          producto.name,
          producto.imageUrl,
          producto.price,
          producto.id
        )
      );
    })
  } catch (err) {
    console.log(err);
  }
};

render();
