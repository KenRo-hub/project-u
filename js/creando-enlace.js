
//crear enlace

const enlace = document.createElement('a');

//agregamos una clase
enlace.className = 'enlace';
//añadir id
enlace.id = 'nuevo-id';
//atributo de href (2 formas)
//enlace.href = '#';
enlace.setAttribute('href', '#');
//añadir texto
enlace.textContent = 'Nuevo Enlace';
//agregarlo al html
document.querySelector('#secundaria').appendChild(enlace);


console.log(enlace);
