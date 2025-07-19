/**
 * Dark Mode Toggle
 * Toggles between light and dark themes with smooth transitions
 */

document.addEventListener('DOMContentLoaded', function() {
    const darkModeBtn = document.getElementById('dark-mode-btn');
    const body = document.body;
    
    // Check for saved dark mode preference
    const savedDarkMode = localStorage.getItem('darkMode');
    
    if (savedDarkMode === 'enabled') {
        body.classList.add('dark-mode');
        updateIcon(true);
    }
    
    // Toggle dark mode
    darkModeBtn.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        
        const isDarkMode = body.classList.contains('dark-mode');
        
        // Save preference
        localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
        
        // Update icon
        updateIcon(isDarkMode);
    });
    
    function updateIcon(isDarkMode) {
        const icon = darkModeBtn.querySelector('i');
        if (isDarkMode) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    }
});