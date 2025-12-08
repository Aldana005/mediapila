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

    let colorBorde = "";
    let claseFondo = ""; 

    if(prioridad === "alta") {
        colorBorde = "border-danger";
        claseFondo = "bg-danger"; 
    } else if (prioridad === "media"){
        colorBorde = "border-warning";
        claseFondo = "bg-warning"; 
    } else {
        colorBorde = "border-success";
        claseFondo = "bg-success";
    }

    const nuevaTarea = document.createElement("div");
    nuevaTarea.classList.add("col-12", "mb-3");

    nuevaTarea.innerHTML = 
    '<div class="card ' + colorBorde + ' shadow-sm">' +
        '<div class="card-body d-flex justify-content-between align-items-center">' +
            
            '<div>' +
                '<h5 class="card-title fw-bold">' + nombre + '</h5>' +
                '<p class="card-text text-muted mb-0">' +
                    '<i class="bi bi-calendar-event"></i> ' + fecha +
                '</p>' +
            '</div>' +

            '<div class="d-flex align-items-center gap-2">' +
                '<span class="badge rounded-pill bg-secondary text-uppercase">' + prioridad + '</span>' +
                '<button class="btn btn-outline-primary btn-sm btn-editar">' +
                    '<i class="bi bi-pencil-fill"></i>' +
                '</button>' +
                '<button class="btn btn-outline-danger btn-sm btn-eliminar">' +
                    '<i class="bi bi-trash-fill"></i>' +
                '</button>' +
            '</div>' +

        '</div>' +
    '</div>';

    
    const btnEliminar = nuevaTarea.querySelector(".btn-eliminar");
    btnEliminar.addEventListener("click", function() {
        if (confirm("¿Estás segura de borrar esta tarea?")) {
            nuevaTarea.remove();
        }
    });

    const btnEditar = nuevaTarea.querySelector(".btn-editar");
    btnEditar.addEventListener("click", function() {
        inputNombre.value = nombre;
        inputFecha.value = fecha;
        
        const botonAgregar = document.querySelector("a[href='#modalTarea']"); 
        if(botonAgregar) botonAgregar.click();

        nuevaTarea.remove();
    });

   
    if (fecha !== "") {
        
        const partesFecha = fecha.split("-"); 
        const diaTarea = parseInt(partesFecha[2]); 

        const circulos = document.querySelectorAll(".circuloFecha");

        circulos.forEach(function(circulo) {
            
            const diaCalendario = parseInt(circulo.textContent);

            if (diaCalendario === diaTarea) {
                
               
                circulo.classList.add("text-white");

                

                if (prioridad === "alta") {
                    
                    circulo.classList.remove("bg-warning", "bg-success");

                    circulo.classList.add("bg-danger");
                } 
                else if (prioridad === "media") {
        
                    if (circulo.classList.contains("bg-danger") === false) {
                        
                        circulo.classList.remove("bg-success");

                        circulo.classList.add("bg-warning");

                    }
                } 
                else { 
                    
                    if (circulo.classList.contains("bg-danger") === false && circulo.classList.contains("bg-warning") === false) {
                       
                        circulo.classList.add("bg-success");
                    }

                }
            }
        });
    }
    
  
    contenedorTareas.appendChild(nuevaTarea);

    inputNombre.value = "";
    inputFecha.value = "";

    const botonCerrarModal = document.querySelector(".btn-close");
    botonCerrarModal.click();
    
});



