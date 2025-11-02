// 🌸 Iniciar lluvia de flores SOLO por 10 segundos
function startFlowers() {
    intervalId = setInterval(createFlower, 500); // cada 0.5s aparece una
    setTimeout(() => {
        clearInterval(intervalId); // detener después de 10s
    }, 10000);
}

// 🌸 Lluvia de flores
const flowerImages = [
    "img/flower1.png",
    "img/flower2.png",
    "img/flower3.png"
];

let intervalId;

// Crear una flor animada
function createFlower() {
    const flower = document.createElement('div');
    flower.classList.add('flower');

    // Imagen aleatoria
    const randomFlower = flowerImages[Math.floor(Math.random() * flowerImages.length)];
    flower.style.backgroundImage = `url('${randomFlower}')`;

    // Posición aleatoria
    const offsetX = Math.random() * window.innerWidth;
    flower.style.left = `${offsetX}px`;
    flower.style.top = `-30px`;

    // Tamaño aleatorio
    const size = 40 + Math.random() * 40;
    flower.style.width = `${size}px`;
    flower.style.height = `${size}px`;

    // Duración aleatoria de caída
    const duration = 6 + Math.random() * 4;
    flower.style.animationDuration = `${duration}s`;

    document.body.appendChild(flower);

    // Eliminar flor después de caer
    setTimeout(() => {
        flower.remove();
    }, duration * 1000);
}

// Iniciar lluvia de flores durante 10 segundos
function startFlowers() {
    intervalId = setInterval(createFlower, 500);
    setTimeout(() => clearInterval(intervalId), 10000);
}

// ⏳ Countdown
function startCountdown() {
    const eventDate = new Date("2025-11-16T18:00:00").getTime();

    const countdown = setInterval(() => {
        const now = new Date().getTime();
        const distance = eventDate - now;

        if (distance < 0) {
            clearInterval(countdown);
            document.getElementById("countdown").innerHTML = "💖 ¡Llegó el gran día! 💖";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("days").innerText = days.toString().padStart(2, "0");
        document.getElementById("hours").innerText = hours.toString().padStart(2, "0");
        document.getElementById("minutes").innerText = minutes.toString().padStart(2, "0");
        document.getElementById("seconds").innerText = seconds.toString().padStart(2, "0");
    }, 1000);
}

// 🌸 Iniciar efectos al cargar la página
window.onload = () => {
    startFlowers();
    startCountdown();
};

function mostrarMapa() {
  const mapa = document.getElementById("mapa");
  mapa.style.display = mapa.style.display === "none" || mapa.style.display === "" ? "block" : "none";
}