

/* Escriba un programa de JavaScript para construir el siguiente patrón, usando un bucle for anidado.

*  
* *  
* * *  
* * * *  
* * * * * */

/* 
for( let i = 0; i < 1; i++) {
    console.log();

    for( let i = 0; i < 2; i++)
        console.log();
    
    for( let i = 0; i < 3; i++)
        console.log();

    for( let i = 0; i < 4; i++)
        console.log();
    
    for( let i = 0; i < 5; i++)
    console.log();
    console.log(i);
    console.log(i,i);
    console.log(i,i,i);
    console.log(i,i,i,i);
    console.log(i,i,i,i,i);
    console.log(i,i,i,i,i,i);
}  */




/* 
let numP=7;
let caracter='*'
console.log(caracter);
for (i=2;i<numP;i++){
    caracter=caracter+'*';
    console.log(caracter);
}
 */



/// el += es un atajo de suma


for (let i = 0; i < 3; i++){
    console.log('principal' + i);
    for(let j = 0; j < 3; j++){
        console.log('interno' + j);
    }
}

