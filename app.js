// Obtener al usuario logueado
//JSON.parse(...) convierte ese texto en un objeto JS real
const usuario = JSON.parse(localStorage.getItem("usuarioLogueado"));

if (!usuario) {
    window.location.href = "login.html";
}

let tareas = [];   

// Cargar tareas del usuario desde el localStorage
tareas = JSON.parse(localStorage.getItem(`tareas_${usuario.token}`));


if (!tareas) {
    tareas = tareasMock;  // Si no hay tareas creadas, aparecen las de mock Data
}

tareas.sort((a,b) => new Date(a.fecha) - new Date(b.fecha))// ordena las tareas por fechas Antes de mostrarlas


// ------ Guardar tareas del usuario en localStorage
function guardarTareasUsuario() {
    localStorage.setItem(`tareas_${usuario.token}`, JSON.stringify(tareas));
}

//------ Inserta tarjeta en el orden correcto segun su fecha 
function insertarTareaEnOrden(div, tarea) {

    const contenedor = document.querySelector("#contenedorTareas");
    const tarjetas = contenedor.children;

    const fechaNueva = new Date(tarea.fecha);

    for (let tarjeta of tarjetas) {

        const idTarjeta = tarjeta.dataset.id;
        const tareaExistente = tareas.find(t => t.id == idTarjeta);

        const fechaExistente = new Date(tareaExistente.fecha);

        // Si la nueva tarea ocurre antes => va antes
        if (fechaNueva < fechaExistente) {
            contenedor.insertBefore(div, tarjeta);
            return;
        }
    }

    // Si no va antes que ninguna => va al final
    contenedor.appendChild(div);
} 

//------ Eliminar tarea 
function eliminarTarea(id) {
    //  Eliminar del array
    tareas = tareas.filter(t => t.id !== id);

    // Guardar cambios
    guardarTareasUsuario();

    // Eliminar del DOM
    const tarjeta = document.querySelector(`[data-id="${id}"]`);
    if (tarjeta) tarjeta.remove();
}


//------ Renderizar todo al iniciar la app
tareas.forEach(tarea => {
    renderizarTarea(tarea); 
    pintarDiaCalendario(tarea);// Colorea el dia correspondiente
});


function renderizarTarea(tarea) {//recibe un objeto "tarea" y construye visualmente la tarjeta que se muestra en la lista de tareas. También agrega los eventos de editar y eliminar
    const contenedor = document.querySelector("#contenedorTareas");

    const div = document.createElement("div");// div principal que va a envolver la tarjeta completa
    div.classList.add("col-12", "mb-3");
    div.dataset.id = tarea.id; // importante para identificar la tarjeta

    // Inserto la estructura HTML de la tarjeta
    div.innerHTML = `
        <div class="card border-${tarea.prioridad === "alta" ? "danger" : tarea.prioridad === "media" ? "warning" : "success"} shadow-sm">
            <div class="card-body d-flex justify-content-between align-items-center">

                <div>
                    <h5 class="card-title fw-bold">${tarea.nombre}</h5>
                    <p class="card-text text-muted mb-0">
                        <i class="bi bi-calendar-event"></i> ${tarea.fecha}
                    </p>
                </div>

                <!-- Parte derecha: prioridad y botones -->
                <div class="d-flex align-items-center gap-2">

                    <span class="badge rounded-pill bg-secondary text-uppercase">
                        ${tarea.prioridad}
                    </span>

                    <!-- Botón para editar -->
                    <button class="btn btn-outline-primary btn-sm btn-editar">
                        <i class="bi bi-pencil-fill"></i>
                    </button>

                    <!-- Botón para eliminar -->
                    <button class="btn btn-outline-danger btn-sm btn-eliminar">
                        <i class="bi bi-trash-fill"></i>
                    </button>

                </div>

            </div>
        </div>
    `;

    // ELIMINAR TAREA
    div.querySelector(".btn-eliminar").addEventListener("click", function () {
        if (confirm("¿Seguro que querés eliminar la tarea?")) {
            eliminarTarea(tarea.id);
        }
    });

    
    // EDITAR TAREA
    div.querySelector(".btn-editar").addEventListener("click", function () {

        // cargar datos en inputs
        document.querySelector("#tareaNombre").value = tarea.nombre;
        document.querySelector("#tareaFecha").value = tarea.fecha;
        document.querySelector("#tareaPrioridad").value = tarea.prioridad;

        // abrir modal
        document.querySelector('[data-bs-target="#modalTarea"]').click();

        // eliminar la tarea original para reemplazarla al guardar
        eliminarTarea(tarea.id);
    });

    // Finalmente agrego la tarjeta construida al contenedor de tareas
    contenedor.appendChild(div);
}


// Colorea el número del día dependiendo de si la prioridad es alta, media o baja.
function pintarDiaCalendario(tarea) {

    const partes = tarea.fecha.split("-");
    const diaTarea = parseInt(partes[2]);

    const circulos = document.querySelectorAll(".circuloFecha");

    circulos.forEach(circulo => {

        // EXTRAER SOLO EL NÚMERO REAL DEL CÍRCULO
        const diaCalendario = Number(circulo.innerHTML.trim());

        if (diaCalendario === diaTarea) {

            circulo.classList.add("text-white");

            if (tarea.prioridad === "alta") {
                circulo.classList.remove("bg-warning", "bg-success");
                circulo.classList.add("bg-danger");

            } else if (tarea.prioridad === "media") {
                if (!circulo.classList.contains("bg-danger")) {
                    circulo.classList.remove("bg-success");
                    circulo.classList.add("bg-warning");
                }

            } else {
                if (!circulo.classList.contains("bg-danger") &&
                    !circulo.classList.contains("bg-warning")) {
                    circulo.classList.add("bg-success");
                }
            }
        }
    });
}

function actualizarColoresSemana() {
    const circulos = document.querySelectorAll(".circuloFecha");

    // 1) Limpiar colores anteriores
    circulos.forEach(circulo => {
        circulo.classList.remove("bg-danger", "bg-warning", "bg-success", "text-white");
    });

    // 2) Volver a pintar según TODAS las tareas
    tareas.forEach(tarea => {
        pintarDiaCalendario(tarea);
    });
}

