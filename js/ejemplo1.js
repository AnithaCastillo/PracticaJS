//Arrays
var frutas = ["Manzana", "Uva", "Pera", "Melon", "Fresa", "Sandia"];


for (var i = 0; i < frutas.length; i++) {

document.getElementById("listaFrutas").innerHTML += "<li>" + frutas[i] + "</li>";
}

//Object
var persona = { nombre: "Juan", telefono: "12345678" };

// Lista de objetos
var contactos = [
    { nombre: "Juan", telefono: "12345678" },
    { nombre: "Carmen", telefono: "87654321" },
];

for (var i = 0; i < contactos.length; i++) {
    document.getElementById("listaContactos").innerHTML += "<li>" + contactos[i].nombre + ": " +  contactos[i].telefono + "</li>"
    console.log(contactos[i]);
}

