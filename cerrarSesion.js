
const usuarioLogeado = localStorage.getItem("UsuarioAldana");

if (!usuarioLogeado) {

    window.location = "login.html";
}

const botonSalir = document.querySelector("#btnCerrarSesion"); 

if(botonSalir) {
    botonSalir.addEventListener("click", function() {
        localStorage.removeItem("UsuarioAldana");
        window.location = "login.html";
    });
}