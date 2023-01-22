//Declara una variable “let edad = Number”, luego crea un condicional “if” donde hagas una comparación, si la edad es mayor o igual a 18, imprime en consola “VÁLIDO”. De lo contrario “NO VÁLIDO”.
let edad= 18;
if(edad>=18){
 console.log("VÁLIDO");
}else{
 console.log("NO VÁLIDO");
}

//Crea un array que contenga mínimo 4 objetos, que a su vez contengan como mínimo 3 claves e imprime todo el array en consola con un bucle “for”.
const docentes = [
    {nombre:'Angel', edad:'23', carrera:'Ingeniería en Informática'},
    {nombre:'Luis', edad:'21', carrera:'Ingeniería Industrial'},
    {nombre:'María', edad:'21', carrera:'Licenciatura en Pedagogia'},
    {nombre:'Efrain', edad:'25', carrera:'Licenciatura en derecho'}
];

for(i=0; i<docentes.length; i++){
   console.log(docentes[i]);
}

//ejercicio 3 bucle switch

let edadCliente=18;

switch(edadCliente){
    case 18:
        console.log("Usted es mayor de edad y el descuento en su boleto será de un 10%");
        break;
    case 10:
        console.log("Usted es menor de edad por lo tanto aplica el 30% de descuento");
        break;
    case 65:
        console.log("Usted es de la tercera edad por lo tanto tiene el 50% de descuento");
        break;
}