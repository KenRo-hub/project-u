
//Variables

const busqueda = document.querySelector('#buscador');

//busqueda.addEventListener('keydown', obtenerEvento);

//busqueda.addEventListener('keyup', obtenerEvento);

//busqueda.addEventListener('keypress', obtenerEvento);

//busqueda.addEventListener('focus', obtenerEvento);

//busqueda.addEventListener('blur', obtenerEvento);//muy utilizado, comprueba los caracteres y si escribio algo

//busqueda.addEventListener('cut', obtenerEvento);

//busqueda.addEventListener('copy', obtenerEvento);

//busqueda.addEventListener('paste', obtenerEvento);

busqueda.addEventListener('input', obtenerEvento);//incluye todas las opciones que estan antes del input

busqueda.addEventListener('change', obtenerEvento);// para cuando cambias una opcion en un select



function obtenerEvento(e){
    //console.log(busqueda.value);
    //document.querySelector('#encabezado').innerText = busqueda.value;
    console.log(`Evento: ${e.type}`);
}