

// ref a elementos del form
const emailInput = document.querySelector("#emailInput");
const passwordInput = document.querySelector("#passwordInput");
const boton = document.querySelector("#btnIngresar");
const error_mensaje = document.querySelector("#error_mensaje");

const users = [
    {
        nombre: "Aldana",
        apellido: "Sánchez",
        correo: "aldanamariel005@gmail.com",
        contrasena: "grupo6.1",
        token: "tokenaldana"
    },
    {
        nombre: "Silvana",
        apellido: "Cepeda",
        correo: "cepedasilvanagabriela@gmail.com",
        contrasena: "1234",    
        token: "sil123"
    }
    
];

init();

function init() {
    const token = localStorage.getItem("SesionActiva");
    if (token) {
        //direcciona a la aplicacion 
        window.location = "app.html";
    }
}

boton.addEventListener("click", function() {
    
    const email = emailInput.value;
    const password = passwordInput.value;
    
    const queryUser = users.find((user) => user.correo === email);

    if (queryUser && queryUser.contrasena === password) {
        

        localStorage.setItem("SesionActiva", queryUser.token);
        window.location = "app.html";

    } else {
        error_mensaje.textContent = "El usuario no existe";
        error_mensaje.style.color = "red";
        setTimeout(() => {
            error_mensaje.textContent = "";
        }, 5000);
    }
});
