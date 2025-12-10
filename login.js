const imput_email = document.querySelector("#emailInput") 
const imput_password = document.querySelector("#passwordInput")

const error_message = document.querySelector("#error_message")

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


init()

function init() {
    const loggedUser = localStorage.getItem('irupeApp') 
    const path = window.location.pathname;
    
    //Si esta logueado
    if( loggedUser ) {
        // si está en login o index -> lo lleva a "app" automáticamente
        if (path.includes("login") || path.includes("index")) {
            window.location.href = "app.html";
        }
        return; // si está en app, puede quedarse.
    }

    
    // Si NO está logueado puede entrar a index tranquilo.
    if (path.includes("index")) return;

    // si intenta ir a app sin login lo saco.
    if (path.includes("app")) {
        window.location.href = "login.html";
        return;
    }

    // si está en login lo dejo.
    if (path.includes("login")) return;
}



submit_button.addEventListener('click', () => {
    const email = imput_email.value.trim();//trim por si se pone algun espacio por error, lo corrige.
    const password = imput_password.value.trim(); 

    // Validación de campos vacíos
    if (!email || !password) {
        error_message.textContent = "Debe completar ambos campos";
        error_message.style.color = "red";

        setTimeout(() => {
            error_message.textContent = "";
        }, 3000);

        return; // frena ejecución
    }

    const queryUser = users.find((users) => users.correo === email)

    if( queryUser && queryUser.password === password ){

        localStorage.setItem('irupeApp', queryUser.token)

        window.location.href = "app.html";


    }else{
        error_message.textContent = 'El usuario no existe o la contraseña es incorrecta';
        error_message.style.color = "red";

        setTimeout(() => {
            error_message.textContent = ''
        },4000)
    }
})

