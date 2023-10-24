let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');

function showSlide(n) {
    slides[currentSlide].style.display = 'none';
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].style.display = 'block';
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function previousSlide() {
    showSlide(currentSlide - 1);
}

function autoPlay() {
    nextSlide();
}

setInterval(autoPlay, 5000); // Cambia de imagen cada 5 segundos
showSlide(currentSlide); // Mostrar la primera imagen

// Event listeners para los botones de siguiente y anterior (opcional)
document.querySelector('.next-button').addEventListener('click', nextSlide);
document.querySelector('.prev-button').addEventListener('click', previousSlide);