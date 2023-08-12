let listaTareas = [];

function agregarTarea() {
  const tareaInput = document.getElementById("tareaInput");
  const tareaTexto = tareaInput.value;

  if (tareaTexto.trim() !== "") {
    
    listaTareas.push(tareaTexto);

    const listaTareasElemento = document.getElementById("listaTareas");
    const nuevaTareaElemento = document.createElement("li");
    nuevaTareaElemento.innerText = tareaTexto;

    nuevaTareaElemento.addEventListener("click", function() {
      this.classList.toggle("completed");
    });

    listaTareasElemento.appendChild(nuevaTareaElemento);

    tareaInput.value = "";
  }
}

