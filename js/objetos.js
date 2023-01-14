//Crear un objeto con mínimo 5 key(clave) y realizar la desestructuración de 3 de ellas. 

const usuario = {
    nombre: 'Angel',
    email: 'angel@gmail.com',
    pais: 'Mexico',
    acceso: true,
    deporte: 'futbol'
}

//desestructuración
const {email, pais, acceso} = usuario;
console.log(email, pais, acceso);

//Crear un arreglo que contenga: 1-string, 2-números, 1-array con 2 valores y realizar la desestructuración de 3 de ellas. Imprimir su resultado en la terminal con console.log().
let password = true;
const arreglo = ["Angel", 35, 2000,["angel@gmail.com", password]];
//desestruracion de un array
const [nombre, edad, fecha] = arreglo;
console.log(nombre, edad, fecha);