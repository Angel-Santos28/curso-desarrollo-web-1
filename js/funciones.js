//Una función que ejecute una suma de 3 números, imprimir su resultado en la terminal con console.log().

function sumaNumeros(a, b, c){
  let resultado= a+b+c;
  console.log(resultado);
}

sumaNumeros(2,10,4);


//Una función que ejecute una comparación de 2 números (mayor, menor, igual o diferentes), imprimir su resultado en la terminal con console.log().
function compara(x, y){
    let resultado= x >= y;
    console.log(resultado);
}
compara(8, 7);

/*FUNCION FLECHA
ejercicio 1 y 2 con funcion flecha*/

const sumaNum = (a, b, c) => {
     let resultado = a+b+c;
     console.log(resultado);
}
sumaNum(2,2,1);

const comparaNum = (x, y) => {
    let resultado = x <= y;
    console.log(resultado);
}
comparaNum(5, 6);