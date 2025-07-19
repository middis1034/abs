/**
 * Quotes Carousel
 * Auto-rotating inspirational quotes carousel
 */

let quotesCarouselInterval;

function initQuotesCarousel() {
    const carousel = document.getElementById('quotes-carousel');
    if (!carousel) return;
    
    const slides = carousel.querySelectorAll('.quote-slide');
    let currentSlide = 0;
    
    if (slides.length === 0) return;
    
    // Clear existing interval
    if (quotesCarouselInterval) {
        clearInterval(quotesCarouselInterval);
    }
    
    function showSlide(index) {
        // Hide all slides
        slides.forEach(slide => slide.classList.remove('active'));
        
        // Show current slide
        if (slides[index]) {
            slides[index].classList.add('active');
        }
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }
    
    // Auto-rotate every 5 seconds
    quotesCarouselInterval = setInterval(nextSlide, 5000);
    
    // Initialize first slide
    showSlide(0);
}

document.addEventListener('DOMContentLoaded', function() {
    initQuotesCarousel();
});

// Make function globally available
window.initQuotesCarousel = initQuotesCarousel;