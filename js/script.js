// WhatsApp
const whatsappBtn = document.getElementById('whatsappBtn');
const phoneNumber = "528181191077"; // Cambia al número deseado con código país
const message = encodeURIComponent("¡Hola! Te contacto desde la web.");

whatsappBtn.addEventListener('click', () => {
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, '_blank');
});

// Flores cayendo frente a la imagen
function createFlower() {
    const flower = document.createElement('div');
    flower.classList.add('flower');

    // Posición horizontal aleatoria
    const offsetX = Math.random() * window.innerWidth;
    flower.style.left = `${offsetX}px`;
    flower.style.top = `-30px`; // empieza arriba

    // Tamaño aleatorio para variedad
    const size = 60 + Math.random() * 20; // entre 20px y 40px
    flower.style.width = `${size}px`;
    flower.style.height = `${size}px`;

    // Velocidad de caída aleatoria (más despacio)
    const duration = 6 + Math.random() * 4; // entre 6s y 10s
    flower.style.animationDuration = `${duration}s`;

    document.body.appendChild(flower);

    // Eliminar después de la animación
    setTimeout(() => {
        flower.remove();
    }, duration * 1000);
}

// Generar flores cada 0.7s
setInterval(createFlower, 700);
