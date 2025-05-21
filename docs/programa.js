document.addEventListener('DOMContentLoaded', function () {
    
    if (document.getElementById('map')) {
        var map = L.map('map').setView([4.541920221090718, -74.09174847415579], 18);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19,
          attribution: '© OpenStreetMap contributors'
        }).addTo(map);

        L.marker([4.541920221090718, -74.09174847415579]).addTo(map)
          .bindPopup('<b>Zona de Estudio Principal</b><br>La Nueva Gloria (según coordenadas).')
          .openPopup();
    }

    /*
    // Mapa opcional para la página "Acerca de"
    if (document.getElementById('map-about')) {
        const aboutLat = 4.568; 
        const aboutLng = -74.095;
        const aboutZoom = 15;

        var mapAbout = L.map('map-about').setView([aboutLat, aboutLng], aboutZoom);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(mapAbout);
        L.marker([aboutLat, aboutLng]).addTo(mapAbout)
            .bindPopup("<b>Barrio La Nueva Gloria (Ubicación General)</b>")
            .openPopup();
    }
    */
    
    let tareaDiv = document.getElementById("tarea");
    if (tareaDiv) {
        // console.log("Contenido original de 'tarea':", tareaDiv.innerHTML);
        // tareaDiv.innerHTML = "Hola desde JS! (Este es el div 'tarea')";
        // tareaDiv.style.display = 'block'; 
        // console.log("Nuevo contenido de 'tarea':", tareaDiv.innerHTML);
    }
    
    // console.log("Hola Mundo"); // Tu console.log original

    /*
    // Bucle de tu programa.js original
    for (let i = 1; i <= 50; i++) {
      if (i % 9 !== 0 && i % 13 !== 0) {
        // console.log(i);
      }
    }
    */

    function updateCopyrightYear() {
        const yearSpans = document.querySelectorAll('#currentYear, #currentYearAbout, #currentYearAuthor');
        yearSpans.forEach(span => {
            if (span) {
                span.textContent = new Date().getFullYear();
            }
        });
    }
    updateCopyrightYear();

});