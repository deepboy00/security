// Detecta cuando el servicio es visible
const serviceItems = document.querySelectorAll('.service-item');

function checkVisibility() {
    serviceItems.forEach(item => {
        const rect = item.getBoundingClientRect();
        // Modifica la condición para activarlo antes de que esté centrado
        if (rect.top < window.innerHeight * 0.80) { // Cambié el valor de "0" a "0.75"
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
        center: { lat: -12.1147103, lng: -75.1875637 }, // Coordenadas del centro del mapa
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
            lat: -12.1147103, 
            lng: -75.1875637,
            title: 'Sucursal Huancayo Upla',
            googleMapsUrl: 'https://www.google.com/maps?q=-12.1147103,-75.1875637'
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

// JavaScript para agregar un desplazamiento suave personalizado
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href').substring(1); // Obtener el ID de destino
        const targetElement = document.getElementById(targetId);

        // Desplazamiento suave
        window.scrollTo({
            top: targetElement.offsetTop - 100, // Ajuste el valor 100 según sea necesario
            behavior: 'smooth'
        });
    });
});



/*
document.addEventListener('DOMContentLoaded', function () {
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const carousel = document.querySelector('.client-carousel');
    const items = document.querySelectorAll('.client-logo');
    const totalItems = items.length;
    let currentIndex = 0; // Índice inicial

    // Función para actualizar el carrusel
    function updateCarousel() {
        const itemWidth = items[0].offsetWidth + 20; // Ancho de la imagen + el espacio entre ellas
        const offset = -currentIndex * itemWidth; // Calcula el desplazamiento
        carousel.style.transform = `translateX(${offset}px)`;
    }

    // Función para mover al siguiente elemento
    nextBtn.addEventListener('click', () => {
        if (currentIndex < totalItems - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; // Volver al primer elemento
        }
        updateCarousel();
    });

    // Función para mover al elemento anterior
    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = totalItems - 1; // Volver al último elemento
        }
        updateCarousel();
    });

    // Inicializa el carrusel
    updateCarousel();
});
*/