const imput_email = document.querySelector("#emailInput") 
const imput_password = document.querySelector("#passwordInput")
const error_message = document.querySelector("#error_mensaje")
const submit_button = document.querySelector("#btnIngresar")

const users = [
    {
        nombre: "Silvana",
        apellido: "Cepeda",
        correo: "cepedasilvanagabriela@correo.com",
        password: "1234",
        token: "sil123",
    },
    {
        nombre: "Aldana",
        apellido: "Sánchez",
        correo: "aldanamariel005@correo.com",
        password: "1234",
        token: "ald123",
    },
    {
        nombre: "Micaela",
        apellido: "Yanucci",
        correo: "micaelayanucci@correo.com",
        password: "1234",
        token: "mica123",
    },
    {
        nombre: "Soledad",
        apellido: "Franco",
        correo: "soledadelisabethfranco@correo.com",
        password: "1234",
        token: "sole123",
    },
    {
        nombre:"Natasha",
        apellido:"Garrido Rodas ",
        correo:"natashagarridorodas@correo.com",
        password:"1234" ,
        token:"nati123",
    },
    {
        nombre: "Maria Jose",
        apellido: "Fariña",
        correo: "majofarina19@correo.com",
        password: "1234",
        token: "majo123",
    },
    {
        nombre: "Agustina",
        apellido: "Rivoira",
        correo: "agustinarivoira7@correo.com",
        password: "1234",
        token: "agus123",
    },
    {
        nombre: "Catalina",
        apellido: "Ponce",
        correo: "catalin4ponce@correo.com",
        password: "1234",
        token: "cata123",
    }
]

submit_button.addEventListener('click', () => {
    const email = imput_email.value.trim();
    const password = imput_password.value.trim(); 

    // Validación de campos vacíos
    if (!email || !password) {
        error_message.textContent = "Debe completar ambos campos";
        error_message.style.color = "red";

        setTimeout(() => {
            error_message.textContent = "";
        }, 3000);

        return;
    }

    const queryUser = users.find((user) => user.correo === email)

    if(queryUser && queryUser.password === password) {
        // Guardar usuario en localStorage
        localStorage.setItem("usuarioLogueado", JSON.stringify(queryUser));
        localStorage.setItem("irupeApp", queryUser.token);

        // Redirigir a la app
        window.location.href = "app.html";

    } else {
        error_message.textContent = 'El usuario no existe o la contraseña es incorrecta';
        error_message.style.color = "red";

        setTimeout(() => {
            error_message.textContent = ''
        }, 4000)
    }
})