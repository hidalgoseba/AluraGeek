// GET

const listaProductos = () => {
    return fetch("https://apitestalura.onrender.com/producto")
      .then((respuesta) => respuesta.json())
      .catch((error) => console.log(error));
}
const listarUnProducto = (id) => {
  return fetch(`https://apitestalura.onrender.com/producto/${id}`)
    .then((respuesta) => respuesta.json())
    .catch((error) => console.log(error));
}
//POST
const crearProductos = (imageUrl, name,  price) => {
    return fetch("https://apitestalura.onrender.com/producto", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        imageUrl,
        name,
        price,
      }),
    }).then((respuesta) => {
      if (respuesta.ok) {
        return respuesta.body;
      }
      throw new Error("No se pudo crear el producto");
    });
}
// PUT/PATCH
const alteraProducto = async (id, name, price, description) => {
  return fetch(`https://apitestalura.onrender.com/producto/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      price,
      description,
    }),
  })
    .then((respuesta) => {
      return respuesta.json();
    })
    .catch((error) => console.log(error));
};
// DELETE
const deleteProducto = async (id) => {
  return await fetch(`https://apitestalura.onrender.com/producto/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
};


export const productoServicio = {
  listaProductos,
  listarUnProducto,
  crearProductos,
  alteraProducto,
  deleteProducto,
};

