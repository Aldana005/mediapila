// Validación de acceso -> no podes entrar a app.html sin validar mail y contraseña
const token = localStorage.getItem("irupeApp");
if (!token) {
    window.location.href = "login.html";
}


document.addEventListener("DOMContentLoaded", () => {

    const cerrar_sesion = document.querySelector("#btnCerrarSesion");

    cerrar_sesion.addEventListener('click', () => {
        localStorage.removeItem('irupeApp');
        window.location.href = "login.html";
    });
});
