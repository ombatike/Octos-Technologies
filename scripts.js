// Add any JavaScript functionality here, such as form validation or interactive elements

document.addEventListener('DOMContentLoaded', function() {
    // Example: Smooth scroll to sections
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
