const btnComprar = document.getElementById("boton-comprar");
const containerProductos = document.getElementById("contProductos");

let valorTotal: number = 0;
let stock: number[] = [15, 10, 8, 20, 5];
let productos: string[] = [
  "Fideos",
  "Pate",
  "Shampoo",
  "Desodorante",
  "Afeitadora"
];
let precioUnitario: number[] = [100, 75, 125, 90, 50];
let add: string[] = ["agregar"];
let imagenes: string[] = [
  "./images/fideos.jpg",
  "./images/pate.jpg",
  "./images/shampoo.jpg",
  "./images/desodorante.jpg",
  "./images/afeitadora.jpg"
];

let cargarProductos = () => {
  for (let i = 0; i < stock.length; i++) {
    let divProducto = document.createElement("div");
    divProducto.classList.add("item-producto");
    divProducto.id = `producto-${i}`;
    let nombreProducto = document.createElement("p");
    nombreProducto.classList.add("color-producto");
    nombreProducto.innerHTML = productos[i];
    let precioProducto = document.createElement("p");
    precioProducto.classList.add("color-precio");
    precioProducto.innerHTML = `$${precioUnitario[i]}`;
    let selectorCantidad = document.createElement("input");
    let agregarProducto = document.createElement("button");
    agregarProducto.innerHTML = add[i];
    let imgProducto = document.createElement("img");
    imgProducto.classList.add("imagen-producto;");
    imgProducto.setAttribute("src", imagenes[i]);
    selectorCantidad.id = `selector-cantidad-${i}`;
    selectorCantidad.type = "number";
    selectorCantidad.max = String(stock[i]);
    selectorCantidad.min = 0;
    divProducto.appendChild(nombreProducto);
    divProducto.appendChild(precioProducto);
    divProducto.appendChild(selectorCantidad);
    divProducto.appendChild(imgProducto);
    containerProductos.appendChild(divProducto);
  }
};
//``
let comprar = () => {
  for (let i = 0; i < stock.length; i++) {
    let selectorCantidad = document.getElementById(`selector-cantidad-${i}`);
    let cantidadSeleccionada = Number(selectorCantidad.value);

    if (cantidadSeleccionada > 0) {
      console.log(
        `Compraste ${cantidadSeleccionada} unidades de ${productos[i]}`
      );
      valorTotal += precioUnitario[i] * cantidadSeleccionada;
    }
  }
  if (valorTotal > 0) {
    console.log(`el costo total de su compra es $${valorTotal}`);
  } else {
    console.log(`Tiene que elegir almenos un producto`);
  }
};

cargarProductos();
btnComprar?.addEventListener("click", comprar);
