//Creo un objeto
let datoEstado = {
    Estado: "",
}

//Creo el evento del boton
const handleSubmit = () => {
    let estado1 = document.getElementById("estadoSelect").value;

    datoEstado.Estado = estado1;

 
    document.getElementById("estadoSeleccionado").innerHTML = `
    <p>Estado Seleccionado: ${ datoEstado.Estado} </p>
    `
}






