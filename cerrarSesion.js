document.addEventListener("DOMContentLoaded", () => {
    const cerrar_sesion = document.querySelector("#btnCerrarSesion");
    
    if (cerrar_sesion) {
        cerrar_sesion.addEventListener('click', () => {
            localStorage.removeItem('irupeApp');
            localStorage.removeItem('usuarioLogueado');
            window.location.href = "login.html";
        });
    }
});