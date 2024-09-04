// Array de objetos
var productos = [
    { nombre: "Base", precio: "$8.70" },
    { nombre: "Corrector", precio: "$22.70" },
    { nombre: "Polvo Compacto", precio: "$10.65" },
    { nombre: "Serum", precio: "$28.55" },
    { nombre: "Lip Gloss", precio: "$12.65" },
    { nombre: "Labial", precio: "$5.99" },
    { nombre: "Pestañol", precio: "$17.25" },
    { nombre: "Sombra", precio: "$15.55" },
    { nombre: "Blush", precio: "$18.00" },
    { nombre: "Fijador", precio: "$7.00" }
];

console.log(productos);

for (var i = 0; i < productos.length; i++) {
    var html = "<tr>";
    html += "           <td>" + productos[i].nombre + "</td>";
    html += "           <td>" + productos[i].precio + "</td>";
    html += "</tr>";

    document.getElementById("tbodyProductos").innerHTML += html;
}
