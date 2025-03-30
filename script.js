// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    
    // Set initial state based on localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'cyberpunk') {
        document.documentElement.setAttribute('data-theme', 'cyberpunk');
        themeToggle.checked = true;
    }
    
    // Toggle theme on checkbox change
    themeToggle.addEventListener('change', () => {
        if (themeToggle.checked) {
            document.documentElement.setAttribute('data-theme', 'cyberpunk');
            localStorage.setItem('theme', 'cyberpunk');
        } else {
            document.documentElement.removeAttribute('data-theme');
            localStorage.removeItem('theme');
        }
    });
}); 