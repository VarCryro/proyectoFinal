// programa.js

document.addEventListener('DOMContentLoaded', function () {
    
    var map; // Declarar map fuera para que sea accesible

    if (document.getElementById('map')) {
        // Coordenadas de tu marcador original (tu cuadra)
        const tuCuadraLat = 4.541920221090718; 
        const tuCuadraLng = -74.09174847415579;
        
        // Inicializa el mapa. El centro y zoom se ajustarán con fitBounds.
        map = L.map('map').setView([tuCuadraLat, tuCuadraLng], 15); 

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19,
          attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        // Marcador para "Tu Cuadra"
        L.marker([tuCuadraLat, tuCuadraLng]).addTo(map)
          .bindPopup('<b>¡Aquí está mi cuadra!</b>')
          .openPopup();

        // --- INICIO: CÓDIGO PARA EL POLÍGONO DEL BARRIO ---

        // Coordenadas ESTIMADAS para el polígono de La Nueva Gloria / Miraflores
        // basadas en la imagen proporcionada. ¡AJUSTAR SI ES NECESARIO!
        // Formato: [[latitud, longitud], [latitud, longitud], ...]
        var laNuevaGloriaCoordinates = [
            [4.5449, -74.0939], // V1 (Esquina Noroeste aprox.)
            [4.5450, -74.0930], // V2
            [4.5445, -74.0922], // V3
            [4.5435, -74.0907], // V4 (Borde Noreste por la quebrada)
            [4.5426, -74.0896], // V5 (Punto más al Este)
            [4.5407, -74.0903], // V6 (Esquina Sureste)
            [4.5408, -74.0913], // V7
            [4.5413, -74.0923], // V8 (Curva Sur)
            [4.5423, -74.0937], // V9 (Esquina Suroeste aprox.)
            [4.5436, -74.0943]  // V10 (Borde Oeste)
            // Asegúrate de que el polígono se cierre visualmente si es necesario,
            // aunque Leaflet generalmente lo maneja.
            // Si es necesario, repite el primer punto al final: [4.5449, -74.0939]
        ];

        // Crear el polígono
        var barrioPoligono = L.polygon(laNuevaGloriaCoordinates, {
            color: 'blue',       // Color del borde del polígono (como en la imagen)
            fillColor: '#3388ff',// Color de relleno (similar al de la imagen)
            fillOpacity: 0.4,    // Opacidad del relleno (0 a 1)
            weight: 2            // Grosor del borde en píxeles
        }).addTo(map);

        // Añadir un popup al polígono
        barrioPoligono.bindPopup("<b>Barrio La Nueva Gloria / Miraflores</b><br>Límites aproximados según imagen.");

        // Centrar y ajustar el zoom del mapa para que se vea todo el polígono
        map.fitBounds(barrioPoligono.getBounds()); 
        
        // --- FIN: CÓDIGO PARA EL POLÍGONO DEL BARRIO ---
    }
    
    let tareaDiv = document.getElementById("tarea");
    if (tareaDiv) {
        // console.log("Contenido original de 'tarea':", tareaDiv.innerHTML);
        // tareaDiv.innerHTML = "Hola desde JS! (Este es el div 'tarea')";
        // tareaDiv.style.display = 'block'; 
        // console.log("Nuevo contenido de 'tarea':", tareaDiv.innerHTML);
    }
    
    // console.log("Hola Mundo");

    /*
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