//DELEGATION, es una alternativa al event bubbling(mas no lo soluciona del todo)

document.body.addEventListener('click', eleminarElemento);

function eleminarElemento(e){
    e.preventDefault();


    //console.log('Click!');
    //console.log(e.target.classList);

    if(e.target.classList.contains('borrar-curso')){
        console.log(e.target.parentElement.parentElement.remove());
    }
    //remueve los cursos del carrito

    if(e.target.classList.contains('agregar-carrito')){
        console.log('Curso agregado');
    }
}