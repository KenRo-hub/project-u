
const enlaces = document.querySelectorAll('.enlace');

//visita a los primos anteriores
// console.log(enlaces[4].previousElementSibling.previousElementSibling);

//Visita a los primos siguientes
console.log(enlaces[0].nextElementSibling.nextElementSibling.parentElement.children);

//parentElement, sirve para ir al padre
//children, sirve para listar a los hijos


// const cursos = document.querySelectorAll('.card');

// console.log(cursos[0].parentElement.parentElement.parentElement.children);


// const enlaces = document.querySelectorAll('.enlace');

//se dirigie del hijo al padre(cosa que en css no se puede)
// console.log(enlaces[0].parentElement.parentElement.parentElement.parentElement.parentElement);
