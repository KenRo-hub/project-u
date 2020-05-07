//getElementById

let elemento;

elemento=document.getElementById('hero');

let encabezado;

//encabezado=document.getElementById('encabezado').innerText;
encabezado=document.getElementById('encabezado');

//podemos modificar el css
//COLOR DE FONDO
encabezado.style.background='#333';
//COLOR DEL TEXTO
encabezado.style.color='#fff';
//MARGEN
encabezado.style.padding='20px';
//CAMBIAR EL TEXTO
encabezado.textContent='The best course';




console.log(encabezado);
//console.log(elemento);
