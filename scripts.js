document.addEventListener('DOMContentLoaded', function() {
    // Aquí puedes agregar interactividad con JavaScript
    let index = 0;
    const images = document.querySelectorAll(".carousel-container img");
    const totalImages = images.length;

    function moveSlide(step) {
        index = (index + step + totalImages) % totalImages;
        updateCarousel();
    }

    function updateCarousel() {
        const offset = -index * 100;
        document.querySelector(".carousel-container").style.transform = `translateX(${offset}%)`;
    }

    function autoSlide() {
        moveSlide(1);
        setTimeout(autoSlide, 3000);
    }

    setTimeout(autoSlide, 3000);

});


