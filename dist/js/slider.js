const slides = document.querySelector('.slides');
const slideArray = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;
let autoSlideInterval;

function showSlide(index) {
    const slideWidth = slideArray[0].clientWidth;
    slides.style.transform = `translateX(${-index * slideWidth}px)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

function nextSlide() {
    currentIndex = (currentIndex < slideArray.length - 1) ? currentIndex + 1 : 0;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : slideArray.length - 1;
    showSlide(currentIndex);
}

function goToSlide(index) {
    currentIndex = index;
    showSlide(currentIndex);
}

function resetInterval() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(nextSlide, 5000);
}

dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
        const index = parseInt(e.target.getAttribute('data-index'));
        goToSlide(index);
        resetInterval();
    });
});

window.addEventListener('resize', () => {
    showSlide(currentIndex);
});

resetInterval(); // Start the interval when the page loads
showSlide(currentIndex);
