let pantalonGris = {type: "Pantalon suelto gris", price: 20};
let vestidoTunico = {type: "Vestido tunico", price: 18};
let faldaMidPrint = {type: "Falda mid print", price: 23};
let cardiganLargoRayas = {type: "Cardigan largo rayas", price: 28};
let faldaMiniZebra = {type: "Falda mini zebra", price: 12};
let monoOverol = {type: "Mono overol", price: 30};
let vestidoJersey = {type: "Vestido jersey", price: 26};
let pantalonAncho = {type: "Pantalon Ancho", price: 30};

let arrPrendas = [];

$("#pantalonGris").on("click",() => {
    arrPrendas.push(pantalonGris);
});

$("#vestidoTunico").on("click",() => {
    arrPrendas.push(vestidoTunico);
});

$("#faldaMidPrint").on("click",() => {
    arrPrendas.push(faldaMidPrint);
});

$("#cardiganLargoRayas").on("click",() => {
    arrPrendas.push(cardiganLargoRayas);
});

$("#faldaMiniZebra").on("click",() => {
    arrPrendas.push(faldaMiniZebra);
});

$("#monoOverol").on("click",() => {
    arrPrendas.push(monoOverol);
});

$("#vestidoJersey").on("click",() => {
    arrPrendas.push(vestidoJersey);
});

$("#pantalonAncho").on("click",() => {
    arrPrendas.push(pantalonAncho);
});

$("#carrito").on("click",() => {
    $("#cesta").modal("show");
    let total = 0;
    for(prenda of arrPrendas){
        $("#total").append("PRENDA: " + prenda.type + prenda.price + "€");

        total += prenda.price
    }
});

