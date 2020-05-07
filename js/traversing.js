
const cursos = document.querySelectorAll('.card');

//cantidad de hijos
console.log(cursos[0].childElementCount);
//ultimo hijo y lo que contiene
console.log(cursos[0].lastElementChild);
//primer hijo y lo que contiene
console.log(cursos[0].firstElementChild);



// const barra = document.querySelector('.barra');

// console.log(barra.children[0].children[0].children);




//const navegacion = document.querySelector('#principal');

//console.log(navegacion.children[0].textContent = 'Nuevo enlace');

//childNodes te regresa los espacios en blanco
//Children no te regresa los espacios en blanco
//console.log(navegacion.children);

//console.log(navegacion.children[0].nodeName);


//console.log(navegacion.children[0].nodeType);
// 1 = Elementos
// 2 = Atributos
// 3 = Text Node
// 8 = Comentarios
// 9 = documentos
//10 = doctype
