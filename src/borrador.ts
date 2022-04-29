let agregar = () => {
  let newProduct = document.getElementById("newProduct");
  let newPrecio = document.getElementById("newPrecio");
  let newCantidad = document.getElementById("newCantidad");

  let nombreNewProduct = document.createElement("prod");
  nombreNewProduct.innerHTML = newProduct.value;
};
