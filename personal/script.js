const adButton = document.getElementById('ad-button');
const countdownContainer = document.getElementById('countdown-container');
const countdownText = document.getElementById('countdown');
const redirectButton = document.getElementById('redirect-button');
const circle = document.querySelector('circle');

adButton.addEventListener('click', () => {
    // Open the ad URL in a new tab
    window.open('https://reticencevaliddecoction.com/buv05ceys?key=c1b9f1872fd90f18cfbabc7786c51600', '_blank');

    // Start the countdown after opening the ad URL
    adButton.classList.add('hidden');
    countdownContainer.classList.remove('hidden');

    // Animate countdown circle and text for 20 seconds
    circle.style.animation = 'countdown 20s linear forwards';

    let timeLeft = 20;
    const countdownInterval = setInterval(() => {
        timeLeft--;
        countdownText.textContent = timeLeft;

        if (timeLeft === 0) {
            clearInterval(countdownInterval);
            countdownContainer.classList.add('hidden');
            redirectButton.classList.remove('hidden');
        }
    }, 1000);
});

// Redirect to the final page when the second button is clicked
redirectButton.addEventListener('click', () => {
    window.location.href = 'https://reticencevaliddecoction.com/buv05ceys?key=c1b9f1872fd90f18cfbabc7786c51600';
});
