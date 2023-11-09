document.addEventListener('DOMContentLoaded', function () {
    const textContainer = document.getElementById('text-container');
    const verMasButton = document.getElementById('ver-mas-button');

    let isExpanded = false; // Variable para controlar si el texto está expandido

    // Función para expandir o contraer el texto
    function toggleText() {
        isExpanded = !isExpanded;
        if (isExpanded) {
            textContainer.style.maxHeight = 'none'; // Mostrar todo el texto (esta línea es incorrecta)
            verMasButton.textContent = 'Mostrar menos';
        } else {
            textContainer.style.maxHeight = '100px'; // Restablecer la altura máxima a 100px
            verMasButton.textContent = 'Continuar leyendo';
        }
    }

    // Agregar un evento al botón "Continuar leyendo" para llamar a la función toggleText
    verMasButton.addEventListener('click', toggleText);

    // Inicialmente, muestra solo los primeros 100px de texto
    textContainer.style.maxHeight = '100px';
});
