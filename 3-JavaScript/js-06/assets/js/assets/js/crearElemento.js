

//crear un elemento
 const imagen = document.createElement('img');

 // modificar los atributos html del elemento
imagen.src = 'https://placeimg.com/200/200/animals';
imagen.alt = 'Imagenes aleatorias de animales';




 //lo insertamos en un elemento apdre
 document.body.appendChild(imagen);  // agrega las imagenes hasta el fineal
 document.body.insertAdjacentElement('afterbegin',imagen); // con este elemento inserta la imagen hasta el inicio
 document.body.insertAdjacentElement('afterend',imagen);
 document.body.insertAdjacentElement('beforebegin',imagen);
 document.body.insertAdjacentElement('beforeend',imagen);

 // forma correcta de crear e insertar un elemento
 // 1. crear el elemento padre  --el lemento que contendra la imagen
// 2. seleccionar el elemento padre
const padreImg =document.getElementById('padreImg');

//3. crear  el elemento
const imagen2 = document.createElement('img');

// 4. modificamos los atributos del lemento

imagen2.src = 'https://placeimg.com/200/200/nature';
imagen2.alt = 'Imagenes de naturaleza';

/// 5. insertar elemento

padreImg.appendChild(imagen2);


// utilizar forEach para pintar datos
const frutas = ['Toronja', 'Manzana', 'Mandarina', 'Limón', 'Granada', 'Melón', 'Plátano', 'Guayaba'];

// forEach -- para ciclar un arreglo / para leer todos los elementos del array

const listafrutas = document.getElementById('frutas');


//forma 1
/* frutas.forEach((element) => {
     const li = document.createElement('li');
     li.textContent = element
    listafrutas.appendChild(li);
}); */


//forma 2

frutas.forEach((el) => {       //// el = element
    listafrutas.innerHTML += `<li>${el}</li>`;   /// += muestra todos lod elemenmtos  /= solo el ultimo

});

