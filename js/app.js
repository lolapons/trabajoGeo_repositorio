// Selección de elementos
const menuItems = document.querySelectorAll('.menu_item');
const displayImage = document.getElementById('displayImage');
const displayText = document.getElementById('displayText');

// Añadir eventos de clic a cada elemento del menú
menuItems.forEach(item => {
    item.addEventListener('click', event => {
        event.preventDefault(); // Prevenir el comportamiento por defecto del enlace

        // Obtener los datos de la imagen y el texto de los atributos personalizados
        const practiceName = item.getAttribute('tituloPractica');
        const imageSrc = item.getAttribute('imagenPractica');

        // Actualizar la sección de visualización
        displayImage.src = imageSrc;
        displayImage.alt = practiceName;
        displayText.textContent = practiceName;

        // Animación opcional para mejorar la experiencia
        displayImage.style.transform = 'scale(1.2)';
        setTimeout(() => {
            displayImage.style.transform = 'scale(1)';
        }, 200);
    });
});
