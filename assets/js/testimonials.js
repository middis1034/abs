/**
 * Testimonial Carousel Handler
 * Modern carousel with glassmorphism effects and auto-rotation
 */

document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.testimonial-slide');
    const indicators = document.querySelectorAll('.testimonial-indicator');
    const prevButton = document.getElementById('testimonial-prev');
    const nextButton = document.getElementById('testimonial-next');
    
    let currentSlide = 0;
    let autoPlayInterval;
    const autoPlayDelay = 10000; // 10 seconds as requested
    
    // Initialize carousel
    function initTestimonialCarousel() {
        showSlide(currentSlide);
        startAutoPlay();
    }
    
    // Show specific slide with smooth transitions
    function showSlide(index) {
        // Remove active class from all slides and indicators
        slides.forEach((slide, i) => {
            slide.classList.remove('active', 'prev');
            
            if (i === index) {
                slide.classList.add('active');
            } else if (i === (index - 1 + slides.length) % slides.length) {
                slide.classList.add('prev');
            }
        });
        
        indicators.forEach(indicator => indicator.classList.remove('active'));
        
        // Add active class to current indicator
        if (indicators[index]) {
            indicators[index].classList.add('active');
        }
        
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
    if (nextButton) {
        nextButton.addEventListener('click', function() {
            nextSlide();
            restartAutoPlay();
        });
    }
    
    if (prevButton) {
        prevButton.addEventListener('click', function() {
            prevSlide();
            restartAutoPlay();
        });
    }
    
    // Event listeners for indicators
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', function() {
            showSlide(index);
            restartAutoPlay();
        });
    });
    
    // Pause auto play on hover
    const testimonialsContainer = document.querySelector('.testimonials-container');
    if (testimonialsContainer) {
        testimonialsContainer.addEventListener('mouseenter', stopAutoPlay);
        testimonialsContainer.addEventListener('mouseleave', startAutoPlay);
    }
    
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
    
    if (testimonialsContainer) {
        testimonialsContainer.addEventListener('touchstart', function(event) {
            touchStartX = event.changedTouches[0].screenX;
        });
        
        testimonialsContainer.addEventListener('touchend', function(event) {
            touchEndX = event.changedTouches[0].screenX;
            handleSwipe();
        });
    }
    
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
    
    // Add fade-in animation when testimonials section comes into view
    const testimonialsSection = document.querySelector('.testimonials');
    if (testimonialsSection) {
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    testimonialsSection.classList.add('fade-in-up');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        observer.observe(testimonialsSection);
    }
    
    // Initialize the carousel
    initTestimonialCarousel();
});