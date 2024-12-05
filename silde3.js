
document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector("#slider");
    const slides = slider.querySelectorAll(".slide-item");
    const prevButton = document.querySelector(".slider-control-prev");
    const nextButton = document.querySelector(".slider-control-next");
    let currentIndex = 0;
    let autoSlideInterval;

    const changeSlide = (index) => {
        slides.forEach((slide, i) => {
            slide.classList.remove("active");
            slide.style.transform = `translateX(${100 * (i - index)}%)`;
        });

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

    nextButton.addEventListener("click", () => {
        nextSlide();
        resetAutoSlide();
    });

    prevButton.addEventListener("click", () => {
        prevSlide();
        resetAutoSlide();
    });

    const startAutoSlide = () => {
        autoSlideInterval = setInterval(nextSlide, 20000);
    };

    const resetAutoSlide = () => {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    };

    const initializeSlider = () => {
        changeSlide(currentIndex);
        startAutoSlide();
    };

    initializeSlider();
});
