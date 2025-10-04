// This script provides smooth scrolling for navigation links

document.addEventListener('DOMContentLoaded', function() {
    // Select all navigation links
    const navLinks = document.querySelectorAll('nav a');

    // Add a click event listener to each link
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Prevent the default jump-to-anchor behavior
            e.preventDefault();

            // Get the target section's ID from the href attribute
            const targetId = this.getAttribute('href');
            
            // Find the target element on the page
            const targetSection = document.querySelector(targetId);

            // Smoothly scroll to the target section
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});