document.addEventListener('DOMContentLoaded', function() {
    // Form submission handling
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            // Here you would typically send the form data to a server
            alert('Form submitted successfully!');
            form.reset();
        });
    }

    // Add hover effect to all interactive elements
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, .gallery-img, #profile-pic');
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
            this.style.transform = 'scale(1.05)';
        });
        element.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Profile page animations
    if (document.querySelector('.profile-section')) {
        // Animate profile info table rows
        const tableRows = document.querySelectorAll('.profile-info tr');
        animateElements(tableRows, 'fadeInUp');

        // Animate quote
        const quote = document.querySelector('blockquote');
        if (quote) {
            animateElement(quote, 'fadeInUp', 300);
        }

        // Animate gallery images
        const galleryImages = document.querySelectorAll('.gallery figure');
        animateElements(galleryImages, 'fadeInUp');
    }

    // Utility function for animating elements
    function animateElements(elements, animationName, staggerDelay = 100) {
        elements.forEach((element, index) => {
            animateElement(element, animationName, index * staggerDelay);
        });
    }

    function animateElement(element, animationName, delay = 0) {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, delay);
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Optional: Add a scroll-to-top button
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '↑';
    scrollToTopBtn.setAttribute('aria-label', 'Scroll to top');
    scrollToTopBtn.id = 'scrollToTopBtn';
    document.body.appendChild(scrollToTopBtn);

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 100) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });
});