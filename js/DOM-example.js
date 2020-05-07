
let elemento;

elemento=document;
elemento=document.all;
elemento=document.all[10];
elemento=document.head;
elemento=document.body;
elemento=document.domain;
elemento=document.URL;
elemento=document.characterSet;
elemento=document.forms;
elemento=document.forms[0];
elemento=document.forms[0].id;
//regresa las clases todas juntas en una cadena de texto
elemento=document.forms[0].className;
//regresa las clases separadas como un arreglo
elemento=document.forms[0].classList;
elemento=document.forms[0].classList[0];
elemento=document.images;
elemento=document.images[2];
//incluye el puerto
elemento=document.images[2].src;
//te da acceso a todos los atributos y hasta personalizarlos, te regresa solo la url sin el 127.0.0.1
elemento=document.images[2].getAttribute('src');

//SCRIPT
elemento=document.scripts;

elemento=document.images;

let imagenes=document.images;
let imagenesArr=Array.from(imagenes);

imagenesArr.forEach(function(imagen){
    console.log(imagen);
})

console.log(imagenesArr);
