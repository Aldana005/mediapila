const form = document.querySelector('#loginForm');
const emailInput = document.querySelector ('#emailInput');
const passwordInput = document.querySelector ('#passwordInput');
const errorMsg = document.querySelector ('#errorMsg');

const usuario = {
    email: 'prueba@ejemplo.com',
    password: '12345'
};

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = emailInput.value.trim();
    const pass = passwordInput.value.trim();

    if (email === usuario.email && pass === usuario.password) {
        window.location.href = 'app.html';
    } else {
        errorMsg.textContent = 'Correo o contraseña incorrectos';
    }
});