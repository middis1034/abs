/**
 * Dynamic Content Loader
 * Loads content from content.json and updates the website dynamically
 */

document.addEventListener('DOMContentLoaded', async function() {
    try {
        // Load content from JSON file
        const response = await fetch('/content.json');
        
        if (!response.ok) {
            console.warn('Could not load content.json, using default content');
            return;
        }
        
        const content = await response.json();
        
        // Update site content
        updateSiteContent(content);
        
    } catch (error) {
        console.warn('Error loading dynamic content:', error);
        // Site will continue to work with static content
    }
});

function updateSiteContent(content) {
    // Update site name and title
    if (content.site) {
        const logoName = document.querySelector('.nav-logo h1');
        const logoTitle = document.querySelector('.nav-logo span');
        if (logoName && content.site.name) logoName.textContent = content.site.name;
        if (logoTitle && content.site.title) logoTitle.textContent = content.site.title;
        
        // Update footer
        const footerName = document.querySelector('.footer-info h3');
        if (footerName && content.site.name && content.site.title) {
            footerName.textContent = `${content.site.name} ${content.site.title}`;
        }
    }
    
    // Update hero carousel
    if (content.hero && content.hero.length > 0) {
        updateHeroCarousel(content.hero);
    }
    
    // Update about section
    if (content.about) {
        updateAboutSection(content.about);
    }
    
    // Update contact information
    if (content.contact) {
        updateContactInfo(content.contact);
    }
    
    // Update testimonials
    if (content.testimonials && content.testimonials.length > 0) {
        updateTestimonials(content.testimonials);
    }
    
    // Update quotes
    if (content.quotes && content.quotes.length > 0) {
        updateQuotes(content.quotes);
    }
    
    // Update FAQ
    if (content.faq && content.faq.length > 0) {
        updateFAQ(content.faq);
    }
    
    // Update colors
    if (content.colors) {
        updateColors(content.colors);
    }
}

function updateHeroCarousel(heroItems) {
    const carouselContainer = document.querySelector('.carousel-container');
    if (!carouselContainer) return;
    
    carouselContainer.innerHTML = '';
    
    heroItems.forEach((item, index) => {
        const slide = document.createElement('div');
        slide.className = index === 0 ? 'carousel-slide active' : 'carousel-slide';
        slide.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <div class="carousel-overlay">
                <h2>${item.title}</h2>
                <p>${item.subtitle}</p>
            </div>
        `;
        carouselContainer.appendChild(slide);
    });
    
    // Reinitialize carousel if the script exists
    if (window.initCarousel) {
        window.initCarousel();
    }
}

function updateAboutSection(about) {
    // Update about text
    const aboutText = document.querySelector('#sobre .section-text p');
    if (aboutText && about.text) {
        aboutText.textContent = about.text;
    }
    
    // Update CRP
    const crpElement = document.querySelector('.footer-info p');
    if (crpElement && about.crp) {
        crpElement.textContent = `Psicóloga | CRP: ${about.crp}`;
    }
}

function updateContactInfo(contact) {
    // Update WhatsApp link
    const whatsappLink = document.querySelector('a[href*="wa.me"]');
    if (whatsappLink && contact.whatsapp && contact.whatsappText) {
        whatsappLink.href = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(contact.whatsappText)}`;
    }
    
    // Update Instagram link
    const instagramLink = document.querySelector('a[href*="instagram"]');
    if (instagramLink && contact.instagram) {
        instagramLink.href = `https://instagram.com/${contact.instagram}`;
    }
}

function updateTestimonials(testimonials) {
    const testimonialsContainer = document.querySelector('.testimonials-container');
    if (!testimonialsContainer) return;
    
    testimonialsContainer.innerHTML = '';
    
    testimonials.forEach((testimonial, index) => {
        const testimonialSlide = document.createElement('div');
        testimonialSlide.className = index === 0 ? 'testimonial-slide active' : 'testimonial-slide';
        testimonialSlide.innerHTML = `
            <div class="testimonial-card">
                <img src="${testimonial.image}" alt="${testimonial.name}">
                <div class="testimonial-content">
                    <p>"${testimonial.text}"</p>
                    <span>— ${testimonial.name}</span>
                </div>
            </div>
        `;
        testimonialsContainer.appendChild(testimonialSlide);
    });
    
    // Update navigation indicators
    const indicators = document.querySelector('.testimonial-indicators');
    if (indicators) {
        indicators.innerHTML = '';
        testimonials.forEach((_, index) => {
            const indicator = document.createElement('button');
            indicator.className = index === 0 ? 'indicator active' : 'indicator';
            indicator.setAttribute('data-slide', index);
            indicators.appendChild(indicator);
        });
    }
    
    // Reinitialize testimonials carousel
    if (window.initTestimonials) {
        window.initTestimonials();
    }
}

function updateQuotes(quotes) {
    const quotesCarousel = document.getElementById('quotes-carousel');
    if (!quotesCarousel) return;
    
    quotesCarousel.innerHTML = '';
    
    quotes.forEach((quote, index) => {
        const quoteSlide = document.createElement('div');
        quoteSlide.className = index === 0 ? 'quote-slide active' : 'quote-slide';
        quoteSlide.innerHTML = `
            <p>"${quote.text}"</p>
            <span>— ${quote.author}</span>
        `;
        quotesCarousel.appendChild(quoteSlide);
    });
    
    // Reinitialize quotes carousel
    if (window.initQuotesCarousel) {
        window.initQuotesCarousel();
    }
}

function updateFAQ(faqItems) {
    const faqContainer = document.querySelector('.faq-container');
    if (!faqContainer) return;
    
    faqContainer.innerHTML = '';
    
    faqItems.forEach((item) => {
        const faqItem = document.createElement('div');
        faqItem.className = 'faq-item';
        faqItem.innerHTML = `
            <button class="faq-question">
                <span>${item.question}</span>
                <i class="fas fa-chevron-down"></i>
            </button>
            <div class="faq-answer">
                <p>${item.answer}</p>
            </div>
        `;
        faqContainer.appendChild(faqItem);
    });
    
    // Reinitialize FAQ functionality
    if (window.initFAQ) {
        window.initFAQ();
    }
}

function updateColors(colors) {
    if (!colors) return;
    
    const root = document.documentElement;
    
    if (colors.primary) {
        root.style.setProperty('--primary', colors.primary);
        // Calculate RGB values for transparency effects
        const rgb = hexToRgb(colors.primary);
        if (rgb) {
            root.style.setProperty('--primary-rgb', `${rgb.r}, ${rgb.g}, ${rgb.b}`);
        }
    }
    
    if (colors.secondary) {
        root.style.setProperty('--secondary', colors.secondary);
    }
    
    if (colors.accent) {
        root.style.setProperty('--accent', colors.accent);
    }
}

function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}