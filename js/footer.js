document.addEventListener("DOMContentLoaded", function () {
    // Selecciona el contenedor del footer
    const footerContainer = document.getElementById("footer-container");

    // Carga el contenido del footer desde un archivo externo (footer.html en este caso)
    fetch("/footer.html")
        .then((response) => response.text())
        .then((footerContent) => {
            footerContainer.innerHTML = footerContent;
        })
        .catch((error) => {
            console.error("Error al cargar el footer:", error);
        });
});
