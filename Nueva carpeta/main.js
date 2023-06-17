window.onload = function(){
    const input = document.getElementById("opcion");
    const boton = document.querySelector("button");
    const lista = document.getElementById("lista");
    boton.onclick = function() {
        const textoOpcion = input.value;
        const opcion = document.createElement("option");
        opcion.innerText=textoOpcion;
        opcion.value=textoOpcion;


        lista.appendChild(opcion);

    }
}