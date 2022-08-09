const num = 10;

console.log(num);

console.log(2);

setTimeout(() =>{           // se crea un espacio de tiempo en la ejecucuion
    console.log('Hola');
}, 2000)

console.log(3);

setTimeout(() =>{           // sin importar el timpo de retraso la tarea se manda al final
    console.log('Adios');
}, 0)

console.log(4);

for(let i=0; i<10000; i++){        // por EVENT LOOP se ejecuta antes que los temporizadores
    console.log('estoy procesando');
}

console.log(5);
