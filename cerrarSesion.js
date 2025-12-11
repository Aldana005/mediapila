document.addEventListener("DOMContentLoaded", () => {

    // --- Control de acceso ---
    const token = localStorage.getItem("irupeApp");
    if (!token) {
        window.location.href = "login.html";
        return;
    }

    // --- Botón cerrar sesión ---
    const cerrar_sesion = document.querySelector("#btnCerrarSesion");

    if (cerrar_sesion) {
        cerrar_sesion.addEventListener("click", () => {

            // Eliminamos todo lo relacionado al usuario
            localStorage.removeItem("irupeApp");
            localStorage.removeItem("usuarioLogueado");

            // Redirigimos
            window.location.href = "login.html";
        });
    }
});
