const input = document.createElement('input');
input.type = 'text';
input.id = 'tareaInput';
input.placeholder = 'Ingrese una tarea';
document.body.appendChild(input);

const addButton = document.createElement('button');
addButton.textContent = 'Agregar Tarea';
document.body.appendChild(addButton);

const h1 = document.createElement('h1');
h1.textContent = 'Lista de Tareas';
document.body.appendChild(h1);

const ul = document.createElement('ul');
ul.id = 'listaTareas';
document.body.appendChild(ul);

// Agregar tarea a la lista
function agregarTarea() {
  const tareaTexto = input.value.trim();

  if (tareaTexto !== '') {
    const nuevaTarea = document.createElement('li');
    nuevaTarea.textContent = tareaTexto;
    ul.appendChild(nuevaTarea);
    input.value = '';
  }
}

// Agregar tarea cuando se presiona la tecla Enter
addButton.addEventListener('click', agregarTarea);


