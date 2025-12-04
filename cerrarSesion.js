const usuarioLogeado = localStorage.getItem("SesionActiva");

if (!usuarioLogeado) {

    window.location = "login.html";
}


const botonSalir = document.querySelector("#btnCerrarSesion"); 

if(botonSalir) {
    botonSalir.addEventListener("click", function() {
        
        
        localStorage.removeItem("SesionActiva");
        
       
        window.location = "login.html";
    });
}