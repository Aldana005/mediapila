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
        token:"aldi123",
    },
    {
       nombre:"Micaela",
       apellido:"Yanucci",
       correo:"micaelayanucci@gmail.com",
       password:"1234",
       token:"mica123",
    },
    {
       nombre:"Soledad",
       apellido:"Franco",
       correo:"soledadelisabethfranco@gmail.com",
       password:"1234",
       token:"sole123",
    },
    {
       nombre:"Natasha",
       apellido:"Garrido Rodas ",
       correo:"natashagarridorodas@gmail.com",
       password:"1234" ,
       token:"nati123",
    },
    {
        nombre:"Maria Jose",
        apellido:"Fariña",
        correo:"majofarina19@gmail.com",
        password:"1234",
        token:"majo123",
    },
    {
        nombre:"Agustina",
        apellido:"Rivoira",
        correo:"agustinarivoira7@gmail.com",
        password:"123",
        token:"agus123",
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