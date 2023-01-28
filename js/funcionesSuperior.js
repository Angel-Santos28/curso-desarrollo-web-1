const ropa = [
    { marca:'NIKE', stock:20, precios:100.40},
    { marca:'PUMA', stock:15, precios:150},
    { marca:'ADIDAS', stock:10, precios:45.35},
    { marca:'REEBOK', stock:14, precios:800.50},
    { marca:'AMERICAN', stock:25, precios:250.00}
]

//Imprimir en consola solo las marcas con sus stock.
ropa.forEach( marcaRopa => {
    console.log('Ropas seleccionadas: ',marcaRopa.marca, marcaRopa.stock);    
})

//Imprimir en consola solo si alguno de los productos cuesta más de 200.
const ropaCara = ropa.filter( ropita => ropita.precios>200);
console.log(ropaCara);

let acu=0;
//Imprime en consola el precio promedio de los productos. 
const promedio = ropa.reduce((acu, el) => acu + el.precios, 0);
console.log('el promedio es: ',promedio/ropa.length);


//Imprime en consola alfabéticamente el nombre de los productos.
const orden  = ropa.sort((a, b) => {
    if(a.marca == b.marca){
       return 0;
    }else if(a.marca < b.marca){
        return -1;
    }else{
        return 1;
    }
});

console.log('array ordenada',orden);

//Imprime en consola el producto más costoso, y redondea en un número entero.//
let producto=0;
ropa.forEach(e => {
    producto = Math.max(e.precios, producto);
})
 console.log('la ropa mas cara cuesta: ',Math.round(producto));
