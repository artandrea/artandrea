const menuButton = document.querySelector('#menu'); // Selecciona el botón del menú
const nav = document.querySelector('nav'); // Selecciona el menú de navegación

menuButton.addEventListener('click', function () {
    nav.classList.toggle('active'); // Alternar la clase 'active' en el menú
});

document.querySelector('.arrow').addEventListener('click', function () {
    window.scrollTo({
        top: window.innerHeight, // Altura de la ventana
        behavior: 'smooth' // Desplazamiento suave
    });
});

// Opcional: Pausar el carrusel en hover
const carousel = document.querySelector('.carousel');
carousel.addEventListener('mouseenter', () => {
    carousel.style.animationPlayState = 'paused';
});
carousel.addEventListener('mouseleave', () => {
    carousel.style.animationPlayState = 'running';
});
