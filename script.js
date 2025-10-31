// Detecta cuando el servicio es visible
const serviceItems = document.querySelectorAll('.service-item');

function checkVisibility() {
    serviceItems.forEach(item => {
        const rect = item.getBoundingClientRect();
        // Modifica la condición para activarlo antes de que esté centrado
        if (rect.top < window.innerHeight * 0.75) { // Cambié el valor de "0" a "0.75"
            item.classList.add('visible'); // Aplica la animación
        }
    });
}

// Revisa la visibilidad cuando el usuario hace scroll
window.addEventListener('scroll', checkVisibility);

// Llama la función al cargar la página por si los elementos ya están visibles
checkVisibility();


// Función que inicializa el mapa
function initMap() {
    var mapOptions = {
        center: { lat: -12.04318, lng: -77.02824 }, // Coordenadas del centro del mapa (ajústalas a tu zona)
        zoom: 12, // Nivel de zoom
        mapTypeId: 'roadmap' // Tipo de mapa (puedes usar 'satellite', 'hybrid', etc.)
    };
    
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);

    // Marcadores para indicar tus ubicaciones (si tienes varias)
    var locations = [
        { lat: -12.04318, lng: -77.02824, title: 'Sucursal Lima' },
        { lat: -13.53257, lng: -71.96871, title: 'Sucursal Cusco' },
        { lat: -9.19159, lng: -75.2105, title: 'Sucursal Tarapoto' },
    ];

    // Agregar los marcadores al mapa
    locations.forEach(function(location) {
        var marker = new google.maps.Marker({
            position: { lat: location.lat, lng: location.lng },
            map: map,
            title: location.title
        });
    });
}