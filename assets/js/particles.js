/**
 * Floating Particles Background Effect
 * Creates subtle animated particles for modern glassmorphism aesthetic
 */

document.addEventListener('DOMContentLoaded', function() {
    const particlesContainer = document.getElementById('floating-particles');
    const particleCount = 50;
    
    if (!particlesContainer) return;
    
    // Create particles
    function createParticles() {
        for (let i = 0; i < particleCount; i++) {
            createParticle();
        }
    }
    
    function createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random horizontal position
        particle.style.left = Math.random() * 100 + '%';
        
        // Random animation delay
        particle.style.animationDelay = Math.random() * 15 + 's';
        
        // Random size variation
        const size = Math.random() * 3 + 2;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        
        // Random opacity
        particle.style.opacity = Math.random() * 0.3 + 0.1;
        
        particlesContainer.appendChild(particle);
        
        // Remove and recreate particle after animation
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
                createParticle();
            }
        }, 15000);
    }
    
    // Initialize particles
    createParticles();
});