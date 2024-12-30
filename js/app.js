// Selección de elementos
const menuItems = document.querySelectorAll('.menu_item');
const displayImage = document.getElementById('displayImage');
const displayText = document.getElementById('displayText');

// Función para actualizar la sección de visualización
function updateDisplay(practiceName, imageSrc) {
    displayImage.src = imageSrc;
    displayImage.alt = practiceName;
    displayText.textContent = practiceName;

}

// Inicializar con la Práctica 1 al cargar la página
window.addEventListener('DOMContentLoaded', () => {
    const firstItem = menuItems[0]; // Suponiendo que el primer elemento corresponde a la Práctica 1
    const practiceName = firstItem.getAttribute('tituloPractica');
    const imageSrc = firstItem.getAttribute('imagenPractica');
    updateDisplay(practiceName, imageSrc);
});

// Añadir eventos de clic a cada elemento del menú
menuItems.forEach(item => {
    item.addEventListener('click', event => {
        event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace
        
        // Resto del código para actualizar la imagen y el texto...
        const practiceName = item.getAttribute('tituloPractica');
        const imageSrc = item.getAttribute('imagenPractica');
        updateDisplay(practiceName, imageSrc);
    });
});


// Configuración del texto animado
const text = "Práctica final de TIG hecha por Lola Pons, Jaime Enguidanos y Estela Gallardo";
const container = document.querySelector('.rotating-text-container');
const margin = 20; // Margen respecto al borde de la página

// Crear letras individuales para el texto giratorio
text.split("").forEach(char => {
    const span = document.createElement("span");
    span.textContent = char;
    container.appendChild(span);
});

// Animación del texto
let offset = 0; // Posición inicial del texto
function animateText() {
    const letters = document.querySelectorAll('.rotating-text-container span');
    const width = window.innerWidth - margin * 2;
    const height = window.innerHeight - margin * 2;

    letters.forEach((letter, index) => {
        
        const totalPath = (width + height) * 2; // Perímetro del rectángulo
        const letterOffset = (offset + index * 20) % totalPath; // Ajusta la separación de letras

        let x = 0, y = 0;

        // Calcular posiciones en el contorno del rectángulo
        if (letterOffset < width) {
            x = margin + letterOffset;
            y = margin;
        } else if (letterOffset < width + height) {
            x = margin + width;
            y = margin + (letterOffset - width);
        } else if (letterOffset < 2 * width + height) {
            x = margin + (2 * width + height - letterOffset);
            y = margin + height;
        } else {
            x = margin;
            y = margin + (totalPath - letterOffset);
        }

        // Actualizar posición de cada letra
        letter.style.left = `${x}px`;
        letter.style.top = `${y}px`;
    });

    offset += 1.6; // Ajusta la velocidad del movimiento (más pequeño = más lento)
    requestAnimationFrame(animateText);
}

animateText();
