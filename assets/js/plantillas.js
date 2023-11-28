// combinarPlantillas.js
document.addEventListener("DOMContentLoaded", function () {
    // Cargar la primera plantilla y sus estilos
    cargarContenidoYEstilos("/index.html", ["/assets/css/fontawesome-all.min.css", "/assets/css/main.css", "/assets/css/noscript.css"], "plantilla1Contenedor");

    // Cargar la segunda plantilla y sus estilos
    cargarContenidoYEstilos("/galeria/index.html", ["/galeria/assets/css/fontawesome-all.min.css", "/galeria/assets/css/main.css", "/galeria/assets/css//noscript.css"], "plantilla2Contenedor");
});

function cargarContenidoYEstilos(urlPlantilla, urlsEstilos, contenedor) {
    // Cargar la plantilla
    cargarContenido(urlPlantilla, function (contenido) {
        // Agregar la plantilla al contenedor
        document.getElementById(contenedor).innerHTML = contenido;

        // Cargar los estilos correspondientes
        urlsEstilos.forEach(function (url) {
            cargarEstilos(url);
        });
    });
}

function cargarContenido(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            callback(xhr.responseText);
        }
    };
    xhr.open("GET", url, true);
    xhr.send();
}

function cargarEstilos(url) {
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = url;
    document.head.appendChild(link);
}
