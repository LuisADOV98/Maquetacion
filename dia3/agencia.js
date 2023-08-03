
let arrdatos=[]

function recogerInfo(){
    let nombre = document.getElementById("nombre").value.toUpperCase();
    let origen = document.getElementById("origen").value;
    let destino = document.getElementById("destino").value.toUpperCase();
    let ndePersonas = document.getElementById("NdePersonas").value;

   console.log(nombre);
   console.log(origen);
   console.log(destino);
   console.log(ndePersonas);
   
   let cliente = {
    nombre: nombre,
    origen: origen,
    destino: destino,
    numeroPersonas: ndePersonas,
}
arrdatos.push(cliente);
    console.log(arrdatos);
}

function filtro(){
  
    let mostrar= arrdatos.filter(dato => dato.destino == "PORTO" || dato.destino == "PARIS" || dato.destino == "ROMA");
    let stringMostrar = "";

    for (let datos of mostrar){
        console.log(datos.nombre);
        stringMostrar += ` <div>Nombre: ${datos.nombre}</div>
                            <div>Destino:${datos.destino}</div> `
    }
    console.log(stringMostrar);
    document.getElementById("mostrar").append(stringMostrar )   
}

