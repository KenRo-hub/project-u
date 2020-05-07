
//QUERY SELECTOR


//la diferencia con el getElementById (SOLO ACCEDE A LOS ID)es que puede acceder a las clases con un . y a los ID con un #
const encabezado= document.querySelector('.encabezado');
//si inspeccionamos que hay varias clases solo imprimira el primero si usamos el querySelector, para ello debemos usar el querySelectorAll
//se recomienda tener un id con un nombre unico por pagina 
//tambien puedes escoger etiquetas
//const encabezado= document.querySelector('h1');
//QUERYSELECTOR solo te va a regresar solo el primero de muchas clases nombradas de la misma manera


//APLICAR CSS
encabezado.style.background='#333';
encabezado.style.color='#fff';
encabezado.style.padding='20px';
encabezado.textContent='Los mejores cursos';

console.log(encabezado);

//si inspeccionamos que hay varias clases solo imprimira el primero si usamos el querySelector, para ello debemos usar el querySelectorAll

//nesting de selectores

let enlace;

enlace=document.querySelector('#principal a:first-child');
enlace=document.querySelector('#principal a:last-child');
enlace=document.querySelector('#principal a:nth-child(3)');

console.log(enlace);