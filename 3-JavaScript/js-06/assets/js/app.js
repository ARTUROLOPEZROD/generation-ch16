//console.log(document.URL); ejemplo en el navegador


// getElementbyId()

console.log(document.getElementById("parrafo1")); // si hubira mas Id solo regresa el primer elemento

console.log(document.getElementById("parrafo")); // si no encuentra el elemento Id me regresara null

console.log(document.getElementById("parrafo1").textContent);  //este lemento regresa el contenido de 


const parrafo1 = document.getElementById('parrafo1'); 

console.log(parrafo1.textContent);

parrafo1.textContent = ' Hola desde el parrafo1';  // el elemento está, pero el contenido lo reemplaxa por una variable de nada '';

console.log(parrafo1.textContent);  //  textContent es una propiedad que noa muestra el comtemido de texto de ese elemento

console.log(parrafo1.style);  // devuelve atributos de estilo del parrafo y se puden manipular

parrafo1.style.color ='red'  // modificar propiedades fuera del console.log  
parrafo1.style.backgroundColor ='yellow'; //no es la forma mas apropiada, esto se hace desde el doc css



//querySelector()
//etiqueta = p
//clase = .parrafo
// id  = #parafo1

//const parrafo2 = document.querySelector('.parrafo');
//console.log(parrafo2);

const parrafo2 = document.querySelector('.parrafo');
console.log(parrafo2.textContent);


parrafo2.textContent += '\n Modificando contenido desde JavaScript';      // esta son dos maneras de hacerlo
console.log(parrafo2.textContent + 'Modificando contenido desde JavaScript'); 


  // \n  -- inserta un salto de linea  === <br>

  // \t  


  //querySelectorAll()  // regresa una lista de nodos

  const parrafos = document.querySelectorAll('p');  // (),('') da error ; se debe de especificar lo que se debe buscar
  //console.log(parrafos.length);
  //console.log(parrafos[2]);
  console.log(parrafos);

  parrafos[2].style.fontSize = '2rem'

  // css - font-size
  // js - fontSize  -  lower camel case



  //Modificar los atributos de html

  const enlace = document.getElementById('enlace');
  console.log(enlace.href);

  enlace.href = 'https://www.youtube.com/';
  enlace.target = '_blank';
  enlace.textContent = 'Enlace de youtube';



/* parrafos[1].style.backgroundColor = 'red'
console.log(parrafos); */
  


/* reemplazar contenido */

const parrafo4 = document.getElementById('parrafo4');

console.log(parrafo4.nodeName);   /// nos regresa p - que es un parrafo
console.log(parrafo4.textContent);   // regresa contenido de texto de la etiqueta
 
console.log(parrafo4.innerHTML); // muestra el html que haya en el interior del elemento

console.log(parrafo4.outerHTML);  // muestra el contenido html incluyendo el elemento


//parrafo4.textContent = '<a href="http://google.com">Enlace</a>';  // modifica 'parrafo4' regresa un string no una etiqueta de enlace
//parrafo4.innerHTML = '<a href="http://google.com">Enlace</a>';    // modifica 'parrafo4'  lo imprime como  enlace
//parrafo4.outerHTML = '<a href="http://google.com">Enlace</a>';  // reemplaza el elemento completo

//parrafo4.innerHTML = '<div class ='elemento'>Este es un div</div>';  


// Js permite modifiacar las clases css
// utilizando style

console.log(parrafo4.classList.contains('elemento'));
//parrafo4.classList.add('elemento');

const cambiarColor =() => {
    parrafo4.classList.toggle('elemento');
}
cambiarColor(); // se agrega la clase
cambiarColor(); // se quita la clase







