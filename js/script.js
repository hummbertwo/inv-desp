// WhatsApp
const whatsappBtn = document.getElementById('whatsappBtn');
const phoneNumber = "528181191077"; // Cambia al número deseado con código país
const message = encodeURIComponent("¡Hola Daniela! Te confirmo mi Asistencia.");

whatsappBtn.addEventListener('click', () => {
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, '_blank');
});

// 🌸 Configuración de flores
const flowerImages = [
    "img/flower1.png",
    "img/flower2.png",
    "img/flower3.png"
];

let intervalId;

// Crear una flor
function createFlower() {
    const flower = document.createElement('div');
    flower.classList.add('flower');

    // Imagen aleatoria de flores
    const randomFlower = flowerImages[Math.floor(Math.random() * flowerImages.length)];
    flower.style.backgroundImage = `url('${randomFlower}')`;

    // Posición horizontal aleatoria
    const offsetX = Math.random() * window.innerWidth;
    flower.style.left = `${offsetX}px`;
    flower.style.top = `-30px`;

    // Tamaño aleatorio
    const size = 60 + Math.random() * 30; // entre 20px y 50px
    flower.style.width = `${size}px`;
    flower.style.height = `${size}px`;

    // Duración de caída aleatoria
    const duration = 6 + Math.random() * 4; // entre 6s y 10s
    flower.style.animationDuration = `${duration}s`;

    document.body.appendChild(flower);

    // Eliminar al terminar
    setTimeout(() => {
        flower.remove();
    }, duration * 1500);
}

// 🌸 Iniciar lluvia de flores SOLO por 10 segundos
function startFlowers() {
    intervalId = setInterval(createFlower, 500); // cada 0.5s aparece una
    setTimeout(() => {
        clearInterval(intervalId); // detener después de 10s
    }, 10000);
}

// Iniciar al cargar la página
window.onload = startFlowers;