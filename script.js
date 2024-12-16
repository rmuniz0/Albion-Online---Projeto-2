const carousel = document.getElementById("carousel");
const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");
let index = 0;

nextButton.addEventListener("click", () => {
    const items = document.querySelectorAll(".carousel-item");
    items[index].classList.remove("active");
    index = (index + 1) % items.length;
    items[index].classList.add("active");
    carousel.style.transform = `translateX(-${index * 100}%)`;
});

prevButton.addEventListener("click", () => {
    const items = document.querySelectorAll(".carousel-item");
    items[index].classList.remove("active");
    index = (index - 1 + items.length) % items.length;
    items[index].classList.add("active");
    carousel.style.transform = `translateX(-${index * 100}%)`;
});


//Contagem regressiva//
function countdownTimer(daysFromNow) {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + daysFromNow); // Adiciona os dias ao dia atual

    const timer = setInterval(() => {
        const now = new Date().getTime();
        const eventDate = targetDate.getTime();
        const timeLeft = eventDate - now;

        if (timeLeft <= 0) {
            clearInterval(timer);
            document.getElementById("countdown-timer").innerText = "O evento já começou!";
            return;
        }

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("days").innerText = days.toString().padStart(2, '0');
        document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
        document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
        document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');
    }, 1000);
}

// Inicia a contagem regressiva para 180 dias
countdownTimer(180);
