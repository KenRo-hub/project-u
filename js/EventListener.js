
 //EventListener click al buscado

//  document.querySelector('#submit-buscador').addEventListener('click', function(e){
//         e.preventDefault();
//         alert('Buscando Cursos');
//  });

//AMBAS FORMAS SON CORRECTAS

document.querySelector('#submit-buscador').addEventListener('click', ejecutarBoton);

function ejecutarBoton(e){
    e.preventDefault();
    let elemento;
    elemento=e;
    elemento=e.target;
    elemento=e.target.id;
    elemento=e.target.ClassName;
    elemento=e.target.innerText;
   // console.log(elemento);
}

//EJEMPLO

document.querySelector('#encabezado').addEventListener('click', function(e){
    //console.log(e.target.innerText);
    e.target.innerText = 'Nuevo encabezado';
});