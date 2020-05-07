
const enlaces = document.querySelectorAll('.enlace');
const navegacion = document.querySelector('#principal');

//AMBAS FORMAS DE REMOVER SON CORRECTAS
//enlaces[0].remove();
navegacion.removeChild(enlaces[0]);
//console.log(enlaces);



const primerLi = document.querySelector('.enlace');

let elemento;

//obtener una clase de CSS
elemento = primerLi.className;
elemento = primerLi.classList.add('nueva-clase');
elemento = primerLi.classList.remove('nueva-clase');
elemento = primerLi.classList;

//Leer atributos
elemento = primerLi.getAttribute('href');
primerLi.setAttribute('href', 'http://facebook.com');
primerLi.setAttribute('data-id', 20);
elemento = primerLi.hasAttribute('data-id');


console.log(elemento);





