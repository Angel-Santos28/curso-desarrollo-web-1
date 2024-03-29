const contadorCarrito = document.getElementById("contadorCarrito"); 
const contenidoCarrito = document.getElementById("contenidoCarrito");
const vaciarCarrito = document.getElementById("vaciarCarrito");
const  precioTotal = document.getElementById("precioTotal");
const  menorProductos = document.getElementById('menorProductos');
const  mayorProductos = document.getElementById('mayorProductos');
const comprarCarrito = document.getElementById('comprarCarrito');

const productos = [
   {id:1, nombre:"manos libres", marca:"Samsung", precio:300, img:"./imagenes/galeria-6.jpg", cantidad:1},
   {id:2, nombre:"AirPods", marca:"Iphone", precio:2000, img:"./imagenes/galeria-5.jpg", cantidad:1},
   {id:3, nombre:"Bocina bluetooth", marca:"LG", precio:3000, img:"./imagenes/galeria-2.jpg", cantidad:1},
   {id:4, nombre:"Altavoz Alexa", marca:"Amazon", precio:4000, img:"./imagenes/galeria-3.jpg", cantidad:1},
   {id:5, nombre:"Audifono bluetooth", marca:"Steren", precio:600, img:"./imagenes/galeria-4.jpg", cantidad:1},
   {id:6, nombre:"Bocinas teatro en casa" , marca:"LG", precio:4000, img:"./imagenes/galeria-8.jpg", cantidad:1}
];
//comprar
comprarCarrito.addEventListener ("click", ()=> {
  Swal.fire(
    'Gracias por su compra!!'
  )
  actualizarCarrito();
  vaciarCarrito();
});
//ordenar productos
menorProductos.addEventListener ("click", ()=> {
  const ordenado = productos.sort(function(a, b){return a.precio - b.precio})
  contenedorProductos.innerHTML="";
  prod(ordenado);
});

mayorProductos.addEventListener ("click", ()=> {
  const ordenado =  productos.sort(function(a, b){return  b.precio - a.precio})
  contenedorProductos.innerHTML="";
  prod(ordenado);
});

//ARRAY DE CARRITO DE COMPRAS
const carrito = [];


//FUNCIÓN AGREGAR AL CARRITO
const agregarAlCarrito = (id, carrito) => {
    const existeProducto = carrito.some (prod => prod.id ===id)
    //sumando producto repetido
    if(existeProducto){
      const prod = carrito.map(prod => {
        if(prod.id === id){
          prod.cantidad++;
        }
      })
    }else{
      const productoElegido = productos.find(item => item.id === id);
      carrito.push(productoElegido);
      console.log("Se agrego con exito el producto!", carrito);
  
    }
}

//CONTADOR CARRITO
const agregarContadorCarrito = () => {
  if(carrito.length > 0){
    contadorCarrito.classList.add("contadorCarrito");
    contadorCarrito.textContent = carrito.length;
  }
}
 //muestra productos en el DOM

 const prod =(productos)=>{
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
}
 //actualiza y muestra contenido del carrito
 function actualizarCarrito() {
  contenidoCarrito.innerHTML = "";
  carrito.forEach(producto => {
    const div = document.createElement("div");
    div.classList.add("contenidoCarrito");
    div.innerHTML =
      `
         <p>Cant: ${producto.cantidad}</p>
         <p>${producto.nombre}</p>
         <p>PRECIO: $${producto.precio}</p>
         <button class="btn btn-primary" id="eliminarProducto${producto.id}">Eliminar</button>
       `;
    contenidoCarrito.appendChild(div);
    const eliminarProducto = document.getElementById(`eliminarProducto${producto.id}`);
    eliminarProducto.addEventListener("click", () => {
      eliminaProductoDeCarrito(producto.id, carrito);
      agregarContadorCarrito();
      actualizarCarrito();
    });
  });
  precioTotal.innerText = carrito.reduce((acu, producto) => acu + producto.precio, 0);
}

 //MOSTRAR PRODUCTOS

  const mostrarProductos = document.getElementById("mostrarProductos");
  mostrarProductos.addEventListener ("click", ()=> {
    
    contenedorProductos.innerHTML="";
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
  });

  //OCULTAR PRODUCTOS
  const ocultarProductos = document.getElementById("ocultarProductos");
  ocultarProductos.addEventListener ("click", ()=> {
    const contenedorProductos = document.getElementById("contenedorProductos");
    contenedorProductos.innerHTML='';
  });

//eliminando producto de carrito
const eliminaProductoDeCarrito = (id, carrito) => {
  const productoEliminado = carrito.findIndex(item => item.id === id);
  carrito.splice(productoEliminado, 1);
  contadorCarrito.textContent='';
 }

 //vaciar carrito
 vaciarCarrito.addEventListener('click', () => {
   carrito.length = 0;
   contadorCarrito.textContent = "";
   actualizarCarrito();
 })
 /*carrito.findIndex(item => item.id === id);*/



 



