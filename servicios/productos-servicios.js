// GET

const listaProductos = () => {
    return fetch("http://localhost:3000/producto")
        .then(respuesta => respuesta.json())
        .catch(error => console.log(error))
    
}
const listarUnProducto = (id) => {
  return fetch(`http://localhost:3000/producto/${id}`)
      .then((respuesta) => respuesta.json())
      .catch(error => console.log(error))
}



//POST
const crearProductos = (imageUrl, name,  price) => {
    return fetch("http://localhost:3000/producto", {
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
  return fetch(`http://localhost:3000/producto/${id}`, {
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
  return await fetch(`http://localhost:3000/producto/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
};


export const productoServicio = {
  listaProductos,
  crearProductos,
  listarUnProducto,
  alteraProducto,
  deleteProducto,
};

