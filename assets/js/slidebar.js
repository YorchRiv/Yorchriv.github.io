function loadFooter() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', '/contenido/boletin/slidebar.html', true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        // Insertar el contenido del pie de página en el contenedor específico
        document.getElementById('sidebar-container').innerHTML = xhr.responseText;
      }
    };
    xhr.send();
  }
  
  loadFooter();
