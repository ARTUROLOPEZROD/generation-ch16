
// for ( control; condicíon, modificador )
  // de 0 - 4 => 5 -- ya no se cuenta

for( let i = 0; i < 5; i++) {  // i++ es igual i = i + 1
    console.log(i);             // sin i++ ciclo sin fin
}

//console.log('el valor de i es: ' + i);



//while
// no controlado
// si lo que hay dentro de while es falso no se ejecutara 

let control = 0;   //control

while(control < 5){   //condicion
    console.log('while: ' + control);

    control++;  // modificador
}


let control2 = true;

while(control2 === false){
    alert('estoy trabajando');
}



// Do while
// hacer hasta / mientras
// no contralo
// cada que se ejecuta es iterar   iterar = ejecutar
let numero = 0;    ///control
do{
    console.log('do while ' + numero);
    numero++;          /// modificador   
}while(numero < 5);   /// condicion   si lo que hay en while es falso solo se ejcutara una vez y de detendra




// operadores aridmeticos
// i++  suma 1
// i--  resta 1









