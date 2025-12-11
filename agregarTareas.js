document.addEventListener("DOMContentLoaded", () => {

    const inputNombre = document.querySelector("#tareaNombre");
    const inputFecha = document.querySelector("#tareaFecha");
    const selectPrioridad = document.querySelector("#tareaPrioridad");

    const btnGuardar = document.querySelector("#btnGuardarTarea");

    btnGuardar.addEventListener("click", function () {

        const nombre = inputNombre.value;
        const fecha = inputFecha.value;
        const prioridad = selectPrioridad.value;

        if (nombre === "" || fecha === "") {
            alert("Por favor completa todos los campos.");
            return;
        }

        const nuevaTareaObj = {
            id: Date.now(),
            nombre,
            fecha,
            prioridad
        };

        tareas.push(nuevaTareaObj);// Agrego al array
        tareas.sort((a, b) => new Date(a.fecha) - new Date(b.fecha));  // Ordeno por fecha
        guardarTareasUsuario(); //Guardo
        renderizarTarea(nuevaTareaObj); //Renderizo solo la nueva tarea
        pintarDiaCalendario(nuevaTareaObj);

        //Limpio el formulario
        inputNombre.value = ""; 
        inputFecha.value = "";

        document.querySelector(".btn-close").click();
    });

});





