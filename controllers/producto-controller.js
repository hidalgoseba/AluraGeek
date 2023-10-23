 import { productoServicio } from "../servicios/productos-servicios.js";
 import { formatPrice } from "../formatterPrices.js";

 const listaUnProducto = (imageUrl, name, description, price, id) => {
   const card = document.createElement("div");

   const contenido = `
     <div class="producto">
       
         <img src="${imageUrl}" alt="img">
         <h1 class="product-name"> ${name} </h1>
         <p class="descripcion">${description}</p>
         <p class="precio">${formatPrice(price)}</p>
     </div>
     `;
   card.innerHTML = contenido;
   card.dataset.id = id;
   return card;
 };
 const productos = document.querySelector("[data-product]");

 const urlParams = new URLSearchParams(window.location.search);
 console.log(urlParams);
 const id = urlParams.get("id");
 console.log(id);
 const render = async () => {

   try {
     const listaProducto = await productoServicio.listaProductos();
     console.log(listaProducto);
     listaProducto.forEach((element) => {
       if(element.id == id){productos.appendChild(
         listaUnProducto(
           element.imageUrl,
           element.name,
           element.description,
           element.price,
           element.id,
           
         )
       );};
     });
   } catch (err) {
     console.log(err);
   }
 };

 render();

  //  const url = new URL("https://apitestalura.onrender.com/producto/${id}"); // se crea el objeto URL, el cual almacena toda la URL
  //  const params = url.searchParams; //se almacenan todos los parámetros en una variable
  //  const nombre = params.get("nombre"); // se utiliza el método GET para captar el valor del parámetro nombre
