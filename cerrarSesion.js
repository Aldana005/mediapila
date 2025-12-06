const cerrar_sesion = document.querySelector("#btnCerrarSesion")

cerrar_sesion.addEventListener('click', () => {
    console.log('HOLA')
    localStorage.removeItem('irupeApp')

window.location.href = "login.html";})