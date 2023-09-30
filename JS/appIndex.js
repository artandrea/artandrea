
//Cuando realizo un CLICK, nav 'activo'

var burguer = document.querySelector('#menu');
var nav = document.querySelector('nav');

burguer.addEventListener('click', function(){
    nav.classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', function () {
    const carouselContainer = document.querySelector('.carousel-container');
    const carousel = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.slide');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    const slideWidth = slides[0].offsetWidth + 20; // Ancho de cada slide en píxeles, incluyendo el margen
    let visibleSlides = 3; // Cantidad de diapositivas visibles en pantalla completa
    let currentIndex = 0;

    // Función para actualizar el carrusel
    function updateCarousel() {
        const marginLeft = (carousel.offsetWidth - slideWidth * visibleSlides) / 2; // Margen izquierdo para centrar
        const translateValue = -(currentIndex * slideWidth + marginLeft) + 'px'; // Ajuste para centrar
        carousel.style.transform = 'translateX(' + translateValue + ')';
    }

    // Función para manejar el cambio de tamaño de la ventana
    function handleResize() {
        const windowWidth = window.innerWidth;
        if (windowWidth >= 1024) {
            visibleSlides = 3; // Muestra 3 diapositivas en pantalla completa (mayor o igual a 1024 píxeles)
        } else if (windowWidth >= 768) {
            visibleSlides = 2; // Muestra 2 diapositivas en tabletas (768 a 1023 píxeles)
        } else {
            visibleSlides = 1; // Muestra 1 diapositiva en dispositivos móviles (menor a 768 píxeles)
        }
        updateCarousel();
    }

    // Listener para el evento de cambio de tamaño de la ventana
    window.addEventListener('resize', handleResize);

    // Manejo de clics en las flechas izquierda y derecha
    rightArrow.addEventListener('click', () => {
        if (currentIndex < slides.length - visibleSlides) {
            currentIndex++;
        } else {
            currentIndex = 0; // Vuelve al principio cuando llegues al final
        }
        updateCarousel();
    });

    leftArrow.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = slides.length - visibleSlides; // Vuelve al final cuando llegues al principio
        }
        updateCarousel();
    });

    // Asegurarse de que el carrusel esté configurado inicialmente
    handleResize();
});
