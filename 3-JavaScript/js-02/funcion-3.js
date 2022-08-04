//   --- Funsiones como objetos  ----

// esta es la declaracion de una funcion

function miFuncion(a, b){  // a y b son propiedades --variables-- tambien son atributos de la funcion
    let res =0;   // propiedad
    res =(a * b);  // accion o proceso
return res;
}

console.log(typeof miFuncion);
let miFuncionTexto = miFuncion.toString();  //  "miFuncion.toString" ---  aqui estoy pidiendo la implementacion de tipo texto al imprimirlo an la consola
console.log(miFuncionTexto);