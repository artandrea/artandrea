//Cuando realizo un CLICK, nav 'activo'

var burguer = document.querySelector('#menu');
var nav = document.querySelector('nav');

burguer.addEventListener('click', function(){
    nav.classList.toggle('active');
});


  document.getElementById("miFormulario").addEventListener("submit", function (event) {
        const correoInput = document.getElementById("correo");
        const errorCorreo = document.getElementById("errorCorreo");
        const correo = correoInput.value;

        // Expresión regular para validar el formato del correo electrónico
        const formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!formatoCorreo.test(correo)) {
            // El correo no es válido, muestra el mensaje de error y evita el envío del formulario
            errorCorreo.style.display = "block";
            event.preventDefault();
        }
    });

  
// document.addEventListener("DOMContentLoaded", function () {
//     const formulario = document.getElementById("miFormulario");
//     const mensajeError = document.getElementById("mensaje-error");
//     const mensajeConfirmacion = document.getElementById("mensaje-confirmacion");
//     const fondo = document.querySelector(".fondo");
//     const cerrarMensaje = document.getElementById("cerrar-mensaje");

//     formulario.addEventListener("submit", function (e) {
//         e.preventDefault();

//         const nombreInput = document.getElementById("nombre");
//         const correoInput = document.getElementById("correo");
//         const mensajeInput = document.getElementById("mensaje");

//         const esFormularioValido = nombreInput.value && correoInput.value && mensajeInput.value;

//         if (esFormularioValido) {
//             mensajeError.style.display = "none";
//             mensajeConfirmacion.style.display = "block";
//             fondo.style.display = "block";
//             formulario.reset();

//             // Aplicar opacidad al formulario
//             formulario.style.opacity = "0";
//         } else {
//             mensajeError.textContent = "Por favor, completa todos los campos obligatorios.";
//             mensajeError.style.display = "block";
//             mensajeConfirmacion.style.display = "none";
//         }
//     });

//     // Cerrar el mensaje de confirmación y restaurar la opacidad del formulario
//     cerrarMensaje.addEventListener("click", function () {
//         mensajeConfirmacion.style.display = "none";
//         fondo.style.display = "none";
//         formulario.style.opacity = "1"; // Restaura la opacidad
//     });
// });


