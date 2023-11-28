// Definir una función para cargar la barra de navegación
function loadNavbar() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', '/navbar.html', true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        // Insertar el contenido de la barra de navegación en un elemento con un ID específico
        document.getElementById('navbar-container').innerHTML = xhr.responseText;
      }
    };
    xhr.send();
  }
  loadNavbar();
  // Llamar a la función para cargar la barra de navegación
  