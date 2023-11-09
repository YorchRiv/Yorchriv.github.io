function loadFooter() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'footer.html', true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        // Insertar el contenido del pie de página en el contenedor específico
        document.getElementById('footer-container').innerHTML = xhr.responseText;
      }
    };
    xhr.send();
  }
  
  loadFooter();
