
//regresa TODOS los enlaces en el ID principal
//const enlaces = document.querySelectorAll('#principal .enlace');

//regresa todos los enlaces que sean impares
const enlaces = document.querySelectorAll('#principal a:nth-child(odd)');

enlaces.forEach(function(impares){
    impares.style.backgroundColor = 'red';
    impares.style.color = 'White';
})



// enlaces[1].style.background = 'red';
// enlaces[1].textContent = 'Nuevo enlace';


console.log(enlaces);