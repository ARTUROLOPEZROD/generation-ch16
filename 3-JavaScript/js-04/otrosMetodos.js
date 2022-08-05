

    //sort()
    //ordenar los elementos de un arreglo

    const arr = ['X', 'A', 'H', 'a', 'W', 'b'];

    arr.sort();   // dentro del standar ordena primero las mayusculas y despues las minusculas de forma alabetica

    console.log(arr);

    const arr2 = ["Hola", "adiós", "bienvenido", "Calle"];

    arr2.sort();

    console.log(arr2);

    // en los numeros no toma un orde solo toma en primer numero
    // unicode 

    const arr3 = [123, 1, 23, 5, 234];

    arr3.sort();

    console.log(arr3);

        /*  // ordena de forma acendente

            const arr3 = [5, 1231, 567, 1, 80];

            arr3.sort((a, b ) => a - b);  /// ordenamiento de burbuja

            console.log(arr3);

            // ordena de forma decendente

            const arr3 = [5, 1231, 567, 1, 80];

            arr3.sort((a, b ) => b - a);  /// ordenamiento de burbuja

            console.log(arr3);
         */

    //funcion declarada
    //hoisting
    //un proceso de reacomodo automatico del codigo

    function sumar(a, b){
        return a + b;
    }
    console.log(sumar(5, 7));

     let a = 2;
     console.log(a);


     //funcion expresada
     //hoisting no funciona
     const multiplicar = function(a ,b){
         return a * b;
     }
    console.log(multiplicar(3,5));
     
    // funciones flecha
            /* 
            const dividir = (a, b) => {
                return a / b
            }
            console.log(dividir(10, 2));
            */

    //para devolver un solo elmento se pueden omitir corchetes {} y return
    // esta funcion es la misma que la de arriba 
        
    const dividir = (a, b) =>  a / b
    
    console.log(dividir(10, 2));


    ///forEach()
    //un ciclo que recorre en automatico todo nuestro arreglo


    const arrNumeros = [1,4,6,8,10,20,30];
   /*          
    for(let i = 0; i< arrNumeros.length; i++){ /// regresa la cantidad de elementos que hay en la variable
        arrNumeros[i] =arrNumeros[i] * 2;
        console.log(arrNumeros);
        } */



        //forEach(elemento, indice, arreglo completo)
    //arrNumeros.forEach((elemento, index, arr) => 
    //console.log(elemento, index, arr));

    arrNumeros.forEach((elemento) => 
    console.log(elemento *= 2)  // elemento = elemento *2
    );
    

    















