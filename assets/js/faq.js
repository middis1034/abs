/**
 * FAQ Accordion Handler
 * Manages the expand/collapse functionality for FAQ items
 */

document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        
        question.addEventListener('click', function() {
            const isActive = item.classList.contains('active');
            
            // Close all other FAQ items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                    const otherAnswer = otherItem.querySelector('.faq-answer');
                    otherAnswer.style.maxHeight = null;
                }
            });
            
            // Toggle current FAQ item
            if (isActive) {
                // Close current item
                item.classList.remove('active');
                answer.style.maxHeight = null;
            } else {
                // Open current item
                item.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
            
            // Update aria-expanded for accessibility
            const isExpanded = item.classList.contains('active');
            question.setAttribute('aria-expanded', isExpanded);
        });
        
        // Initialize aria-expanded attribute
        question.setAttribute('aria-expanded', false);
        
        // Add keyboard support
        question.addEventListener('keydown', function(event) {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                question.click();
            }
        });
    });
    
    // Handle window resize to recalculate max-height
    window.addEventListener('resize', function() {
        faqItems.forEach(item => {
            if (item.classList.contains('active')) {
                const answer = item.querySelector('.faq-answer');
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
        });
    });
});
