
/* Control de flujo */
/* Condicionales */
/* If */

//if (){ //  SI
    /* 
    Codigo que se hace si se cumple la 
    condicon A
    */
//} else if (){
    /* 
    codigo que se hace si se cumple 
    la condicion B 
    */
//} else if (){
    /* 
    codigo que se hace si se cumple 
    la condicion C
    */
//} else {
    /* 
    codigo que se hace si no se esta cumoplinedo
    ningina de las condiciones anterioees
     */



let condicion = false; // asignacion

// == igual que, devuelve un verddero cuando se cumple la condicon
console.log('5' == 5);
console.log('5' === 5);
console.log('0' == false);
console.log('0' === false);

if (condicion === 10){
    /* 
    Codigo que se hace si se cumple la 
    condicon A
    */
   console.log('Entro en la condicion A');

} else if (condicion ==='Hola'){
    /* 
    codigo que se hace si se cumple 
    la condicion B 
    */
    console.log('Entro en la condicion B');

} else if (condicion === false){
    /* 
    codigo que se hace si se cumple 
    la condicion C
    */
    console.log('Entro en la condicion C');

} else {
    /* 
    codigo que se hace si no se esta cumpliendo
    ningina de las condiciones anteriores
     */
    //condicion por defecto
    console.log('No cumple ninguna');
}


function dividir (a, b) {
    if (b === 0){
        console.log('No se puede realizar la operacion');
    }
    else {
    console.log(a/b);
    }
}

//dividir(10,2)

/* Switch */
/* let nuevaCondicion = 'No sé';

switch(nuevaCondicion) {
    case 'Hola' :
        console.log('Buenos dias');   // break; es para delimitar la sentencia
        console.log('espero te ecuentres bien');
       break;
    case 'adios' :
        console.log('Nos vemos');   // case no enteinde que es una llave, en vez de las llaves se usa : y break
       break

    case 'Saludo' :
        console.log('Te mando un saludo');  // default es como  -else-  :por defecto
        break
    default:
        console.log('No entendi tu mensaje');  // no es necesario terminar con break el dafault
        break
}
         */


let nuevaCondicion = 156;

/*  == o === regresa un true si la condicioon se cumple */
// Se utiliza para evaluar expresiones

switch(false) {
    case 156 :
        console.log('Buenos dias');   // break; es para delimitar la sentencia
        console.log('espero te ecuentres bien');
        break

    case 'Restar' :
        console.log('Nos vemos');   // case no enteinde que es una llave, en vez de las llaves se usa : y break
        break

    case true :
        console.log('Te mando un saludo');  // default es como  -else-   :por defecto
        break

    case false :
        console.log('caso falso');
        break

    default:
        console.log('No entendi tu mensaje');  // no es necesario terminar con break el dafault
        break
}
        

let edad = 30

    switch(edad >= 18){
        case true:
            console.log("mayor");
            break
        case false:
            console.log("menor");
    }
let elegir = '1'
    switch(elegir){
        case 'suma':
            console.log("Vamos a sumar");
            break
        case 'resta':
            console.log("Vamos a resta");
            break
        case 'dividir':
            console.log("Vamos a dividir");
            break
        case 'multiplicar':
            console.log("Vamos a multiplicar");
            break
        default:
            console.log("No entendi");
    }

    if(elegir === "sumar"){

        console.log("Vamos a sumar");
    
    }else if(elegir == "restar"){
    
        console.log("Vamos a restar");
    
    }else if(elegir == "dividir"){
    
        console.log("Vamos a dividir");
    
    }else if(elegir == "multiplicar"){
    
        console.log("Vamos a multiplicar");
    
    } else {
    
        console.log("No entiendo");
    
    }
   