let slideIndex = 0;

function moveSlide(n) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    slideIndex += n;

    if (slideIndex >= totalSlides) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = totalSlides - 1;
    }

    const slideWidth = slides[0].clientWidth;
    const slidesContainer = document.querySelector('.slides');
    slidesContainer.style.transform = `translateX(${-slideIndex * slideWidth}px)`;
}
