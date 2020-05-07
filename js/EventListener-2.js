
//Variables
const encabezado = document.querySelector('#encabezado');
const enlaces = document.querySelectorAll('.enlace');
const boton = document.querySelector('#vaciar-carrito');

// click
//boton.addEventListener('click', obtenerEvento);

// doble click
//boton.addEventListener('dblclick', obtenerEvento);

// mouse enter
//boton.addEventListener('mouseenter',obtenerEvento);

// mouse leave
//boton.addEventListener('mouseleave',obtenerEvento);

// mouse over
//boton.addEventListener('mouseover',obtenerEvento);

// mouse out
//boton.addEventListener('mouseout',obtenerEvento);

// mouse down
//boton.addEventListener('mousedown',obtenerEvento);

encabezado.addEventListener('mousemove', obtenerEvento);

// mouse up
boton.addEventListener('mouseup',obtenerEvento);


function obtenerEvento(e){
    console.log(`Evento: ${e.type}`);
}
 