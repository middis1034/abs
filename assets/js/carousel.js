/**
 * Hero Carousel Handler
 * Manages the image carousel with automatic rotation and manual navigation
 */

document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.carousel-slide');
    const indicators = document.querySelectorAll('.indicator');
    const prevButton = document.getElementById('carousel-prev');
    const nextButton = document.getElementById('carousel-next');
    
    let currentSlide = 0;
    let autoPlayInterval;
    const autoPlayDelay = 5000; // 5 seconds
    
    // Initialize carousel
    function initCarousel() {
        showSlide(currentSlide);
        startAutoPlay();
    }
    
    // Show specific slide
    function showSlide(index) {
        // Remove active class from all slides and indicators
        slides.forEach(slide => slide.classList.remove('active'));
        indicators.forEach(indicator => indicator.classList.remove('active'));
        
        // Add active class to current slide and indicator
        slides[index].classList.add('active');
        indicators[index].classList.add('active');
        
        currentSlide = index;
    }
    
    // Next slide
    function nextSlide() {
        const next = (currentSlide + 1) % slides.length;
        showSlide(next);
    }
    
    // Previous slide
    function prevSlide() {
        const prev = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(prev);
    }
    
    // Start auto play
    function startAutoPlay() {
        autoPlayInterval = setInterval(nextSlide, autoPlayDelay);
    }
    
    // Stop auto play
    function stopAutoPlay() {
        clearInterval(autoPlayInterval);
    }
    
    // Restart auto play
    function restartAutoPlay() {
        stopAutoPlay();
        startAutoPlay();
    }
    
    // Event listeners for navigation buttons
    nextButton.addEventListener('click', function() {
        nextSlide();
        restartAutoPlay();
    });
    
    prevButton.addEventListener('click', function() {
        prevSlide();
        restartAutoPlay();
    });
    
    // Event listeners for indicators
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', function() {
            showSlide(index);
            restartAutoPlay();
        });
    });
    
    // Pause auto play on hover
    const carouselContainer = document.querySelector('.carousel-container');
    carouselContainer.addEventListener('mouseenter', stopAutoPlay);
    carouselContainer.addEventListener('mouseleave', startAutoPlay);
    
    // Keyboard navigation
    document.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowLeft') {
            prevSlide();
            restartAutoPlay();
        } else if (event.key === 'ArrowRight') {
            nextSlide();
            restartAutoPlay();
        }
    });
    
    // Touch/swipe support for mobile
    let touchStartX = 0;
    let touchEndX = 0;
    
    carouselContainer.addEventListener('touchstart', function(event) {
        touchStartX = event.changedTouches[0].screenX;
    });
    
    carouselContainer.addEventListener('touchend', function(event) {
        touchEndX = event.changedTouches[0].screenX;
        handleSwipe();
    });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const swipeDistance = touchEndX - touchStartX;
        
        if (Math.abs(swipeDistance) > swipeThreshold) {
            if (swipeDistance > 0) {
                // Swipe right - show previous slide
                prevSlide();
            } else {
                // Swipe left - show next slide
                nextSlide();
            }
            restartAutoPlay();
        }
    }
    
    // Initialize the carousel
    initCarousel();
});
