const imput_email = document.querySelector("#emailInput") 
const imput_password = document.querySelector("#passwordInput")

const error_message = document.querySelector("#error_message")


const submit_button = document.querySelector("#btnIngresar")


const users = [
    {
        nombre: "Silvana",
        apellido: "Cepeda",
        correo: "cepedasilvanagabriela@gmail.com",
        password: "1234",
        token: "sil123",
    },
    {
        nombre:"Aldana",
        apellido:"Sanchez",
        correo:"aldanamariel005@gmail.com",
        password: "78910",
        token:"aldi",
    }
]

init()

function init() {
    const loggedUser = localStorage.getItem('irupeApp') 

    if( loggedUser ) {
        if(window.location.pathname.includes("app")) return
        window.location.href = "app.html"
    }else {
        if(window.location.pathname.includes("login")) return
        window.location.href = "login.html";
    }
}

submit_button.addEventListener('click', () => {
    const email = imput_email.value;
    const password = imput_password.value; 

    const queryUser = users.find((users) => users.correo === email)

    if( queryUser && queryUser.password === password ){

        localStorage.setItem('irupeApp', queryUser.token)

        window.location.href = "app.html";


    }else{
        error_message.textContent = 'El Usuario no existe'
        error_message.style.color = "red";

        setTimeout(() => {
            error_message.textContent==''
        },4000)
    }
})