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



function initMap() {
    var mapOptions = {
        center: { lat: -12.04323080249785, lng: -75.19155604728536 }, // Coordenadas del centro del mapa
        zoom: 15, // Nivel de zoom
        mapTypeId: 'roadmap', // Tipo de mapa (puedes usar 'satellite', 'hybrid', etc.)
        disableDefaultUI: true, // Desactiva los controles predeterminados
        gestureHandling: 'none', // Deshabilita la manipulación del mapa
        scrollwheel: false, // Desactiva el zoom con la rueda del ratón
        draggable: false, // Desactiva el arrastre del mapa
    };
    
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);

    // Marcadores para indicar tus ubicaciones
    var locations = [
        { 
            lat: -12.04323080249785, 
            lng: -75.19155604728536, 
            title: 'Sucursal Huancayo Upla',
            googleMapsUrl: 'https://www.google.com/maps?q=-12.043164917381516,-75.19201873883885'
        },
        //{ lat: -13.53257, lng: -71.96871, title: 'Sucursal Cusco' },
        //{ lat: -9.19159, lng: -75.2105, title: 'Sucursal Tarapoto' },
    ];

    // Agregar los marcadores al mapa
    locations.forEach(function(location) {
        var marker = new google.maps.Marker({
            position: { lat: location.lat, lng: location.lng },
            map: map,
            title: location.title
        });

        // Agregar el evento de clic en cada marcador
        google.maps.event.addListener(marker, 'click', function() {
            window.open(location.googleMapsUrl, '_blank'); // Abre Google Maps en una nueva pestaña
        });
    });
}
