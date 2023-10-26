document.addEventListener("DOMContentLoaded", function () {
    // Selecciona el contenedor de la barra de navegación
    const navbarContainer = document.getElementById("navbar-container");

    // Carga el contenido de la barra de navegación desde un archivo externo (navbar.html en este caso)
    fetch("navbar.html")
        .then((response) => response.text())
        .then((navbarContent) => {
            navbarContainer.innerHTML = navbarContent;
        })
        .catch((error) => {
            console.error("Error al cargar la barra de navegación:", error);
        });
});