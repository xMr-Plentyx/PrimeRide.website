
document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector('.services-slider');
    const services = ['basic.jpg', 'deluxe.jpg', 'interior.jpg'];
    services.forEach(img => {
        const image = document.createElement('img');
        image.src = `assets/images/${img}`;
        image.style.width = "100%";
        image.style.marginBottom = "1em";
        slider.appendChild(image);
    });
});
