
const inputNombre = document.querySelector("#tareaNombre");
const inputFecha = document.querySelector("#tareaFecha");
const selectPrioridad = document.querySelector("#tareaPrioridad");
const contenedorTareas = document.querySelector("#contenedorTareas");
const btnGuardar = document.querySelector("#btnGuardarTarea");

btnGuardar.addEventListener("click", function () {
    
    const nombre = inputNombre.value;
    const fecha = inputFecha.value;
    const prioridad = selectPrioridad.value;

    if (nombre === "") {
        alert("El campo no puede estar vacío");
        return;
    }

    let colorBorde ="";

    if(prioridad=== "alta") {
        colorBorde= "border-danger";
    }else if (prioridad === "media"){
        colorBorde="border-warning";
    } else {
        colorBorde="border-success";
    }

    const nuevaTarea= document.createElement ("div");
    nuevaTarea.classList.add("col-12", "mb-3");


    nuevaTarea.innerHTML=
    "<div class=\"card " + colorBorde + " shadow-sm\">" +
            "<div class=\"card-body d-flex justify-content-between align-items-center\">" +
                "<div>" +
                    "<h5 class=\"card-title fw-bold\">" + nombre + "</h5>" +
                    "<p class=\"card-text text-muted mb-0\">" +
                        "<i class=\"bi bi-calendar-event\"></i> " + fecha +
                    "</p>" +
                "</div>" +
                "<span class=\"badge rounded-pill bg-secondary text-uppercase\">" + prioridad + "</span>" +
            "</div>" +
    "</div>";

    contenedorTareas.appendChild(nuevaTarea);

    inputNombre.value = "";
    inputFecha.value = "";

    const botonCerrarModal = document.querySelector(".btn-close");
    botonCerrarModal.click();
});