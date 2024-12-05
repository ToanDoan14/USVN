document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector("#slider");
    const slides = slider.querySelectorAll(".slide-item");
    const prevButton = document.querySelector(".slider-control-prev");
    const nextButton = document.querySelector(".slider-control-next");
    let currentIndex = 0;
    let autoSlideInterval;

    const changeSlide = (index) => {
        // Remove active class from all slides
        slides.forEach((slide) => slide.classList.remove("active"));

        // Add active class to the current slide
        slides[index].classList.add("active");
    };

    const nextSlide = () => {
        currentIndex = (currentIndex + 1) % slides.length;
        changeSlide(currentIndex);
    };

    const prevSlide = () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        changeSlide(currentIndex);
    };

    // Event listeners for buttons
    nextButton.addEventListener("click", () => {
        nextSlide();
        resetAutoSlide();
    });

    prevButton.addEventListener("click", () => {
        prevSlide();
        resetAutoSlide();
    });

    // Auto-slide every 20 seconds
    const startAutoSlide = () => {
        autoSlideInterval = setInterval(nextSlide, 20000);
    };

    const resetAutoSlide = () => {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    };

    // Initialize slider
    const initializeSlider = () => {
        changeSlide(currentIndex);
        startAutoSlide();
    };

    initializeSlider();
});
