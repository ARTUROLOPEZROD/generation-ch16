/* Crea un programa llamado Número mágico, donde generas un número aleatorio y el usuario tendrá que adivinarlo.

Considera lo siguiente:

Si el numero ingresado es mayor, mostrar “El número que ingresaste es mayor al número mágico”
Si el numero ingresado es menor, mostrar “El número que ingresaste es menor al número mágico”
Si el número ingresado es igual al número mágico, mostrar “Felicidades, adivinaste el número mágico”
Agregar una opción para finalizar el programa */


let numeroMagico = parseInt(prompt('¡Adivina el numero magico! \n ingrese el numero'));
let numero = 7;

    if(numeroMagico === numero){

        console.log+alert('Felicidades, adivinaste el número mágico');
    
    }else if(numeroMagico > numero){

        console.log+alert('El número que ingresaste es mayor al número mágico');

    }else if(numeroMagico < numero){

        console.log+alert('El número que ingresaste es menor al número mágico');
    } else {

        console.log+alert('No es un numero');
    }


    



