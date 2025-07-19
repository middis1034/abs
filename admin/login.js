// Simple login authentication
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const errorMessage = document.getElementById('error-message');
    
    // Simple password obfuscation
    const correctPassword = atob('MTIz'); // Base64 of "123"
    
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const password = document.getElementById('password').value;
        
        if (password === correctPassword) {
            // Set session
            sessionStorage.setItem('admin_authenticated', 'true');
            // Redirect to admin panel
            window.location.href = 'painel.html';
        } else {
            errorMessage.textContent = 'Senha incorreta!';
            errorMessage.style.display = 'block';
            document.getElementById('password').value = '';
        }
    });
});