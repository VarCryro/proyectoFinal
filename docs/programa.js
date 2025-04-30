// Inicializar el mapa centrado en tu cuadra
var map = L.map('map').setView([4.541920221090718, -74.09174847415579], 18);

// Capa de OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Añadir marcador
L.marker([4.541920221090718, -74.09174847415579]).addTo(map)
  .bindPopup('¡Aquí está mi cuadra!')
  .openPopup();
