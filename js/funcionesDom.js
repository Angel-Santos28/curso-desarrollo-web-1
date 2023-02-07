const contadorCarrito = document.getElementById("contadorCarrito"); 
const contenidoCarrito = document.getElementById("contenidoCarrito");
 
const productos = [
   {id:1, nombre:"manos libres", marca:"Samsung", precio:300, img:"../imagenes/galeria-6.jpg", cantidad:1},
   {id:2, nombre:"AirPods", marca:"Iphone", precio:2000, img:"../imagenes/galeria-5.jpg", cantidad:1},
   {id:3, nombre:"Bocina bluetooth", marca:"LG", precio:3000, img:"../imagenes/galeria-2.jpg", cantidad:1},
   {id:4, nombre:"Altavoz Alexa", marca:"Amazon", precio:4000, img:"../imagenes/galeria-3.jpg", cantidad:1},
   {id:5, nombre:"Bocina bluetooth", marca:"LG", precio:3000, img:"../imagenes/galeria-2.jpg", cantidad:1},
   {id:6, nombre:"Altavoz Alexa", marca:"Amazon", precio:4000, img:"../imagenes/galeria-3.jpg", cantidad:1}
];

//ARRAY DE CARRITO DE COMPRAS
const carrito = [];


//FUNCIÓN AGREGAR AL CARRITO
const agregarAlCarrito = (id, carrito) => {
    const productoElegido = productos.find(item => item.id === id);
    carrito.push(productoElegido);
    console.log("Se agrego con exito el producto!", carrito);
}

//CONTADOR CARRITO
const agregarContadorCarrito = () => {
  if(carrito.length > 0){
    contadorCarrito.classList.add("contadorCarrito");
    contadorCarrito.textContent = carrito.length;
  }
}
 //muestra productos en el DOM
 productos.forEach(producto => {
   const div = document.createElement("div");
   div.innerHTML = 
    `  
    <div class="card cardProductos">
        <img src="${producto.img}" class="card-img-top imgProductos" alt="imagen de ${producto.nombre}"/>
        <div class="card-body cuerpoCard">
            <h3 class="card-title tituloProducto">${producto.nombre}</h3>
            <p class="card-text precioProducto">Marca: ${producto.marca}</p>
            <p class="card-text precioProducto">Precio: $${producto.precio}</p>
            <button class="btn btnAgregarCarrito" id="agregarCarrito${producto.id}">AGREGAR AL CARRITO</button>
        </div>
    </div>
    `
    contenedorProductos.appendChild(div);

    const botonAgregarCarrito = document.getElementById(`agregarCarrito${producto.id}`);
    botonAgregarCarrito.addEventListener ("click", ()=> {
      agregarAlCarrito(producto.id, carrito);
      agregarContadorCarrito();
      actualizarCarrito();
    });
 })

 const actualizarCarrito = () => {
   contenidoCarrito.innerHTML = "";
   carrito.forEach(producto => {
       const div = document.createElement("div");
       div.classList.add("contenidoCarrito");
       div.innerHTML = 
       `
         <p>${producto.cantidad}</p>
         <p>${producto.nombre}</p>
         <p>PRECIO: $${producto.precio}</p>
       `

       contenidoCarrito.appendChild(div);
   })
 }