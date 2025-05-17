// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Sticky header
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 0);
    });

    // Project filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            const filterValue = button.getAttribute('data-filter');
            
            projectCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Video modal functionality
    const modal = document.getElementById('video-modal');
    const demoButtons = document.querySelectorAll('.view-demo');
    const closeModal = document.querySelector('.close-modal');
    const videoFrame = document.getElementById('demo-video');

    demoButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Set the video source (in a real app, you would get this from a data attribute or API)
            // For demo purposes, we're using a placeholder YouTube video
            const videoId = this.closest('.project-card').getAttribute('data-category');
            let videoSrc = '';
            
            switch(videoId) {
                case 'ecommerce':
                    videoSrc = 'https://www.youtube.com/embed/dQw4w9WgXcQ'; // Replace with actual video ID
                    break;
                case 'portfolio':
                    videoSrc = 'https://www.youtube.com/embed/dQw4w9WgXcQ'; // Replace with actual video ID
                    break;
                case 'dashboard':
                    videoSrc = 'https://www.youtube.com/embed/dQw4w9WgXcQ'; // Replace with actual video ID
                    break;
                case 'blog':
                    videoSrc = 'https://www.youtube.com/embed/dQw4w9WgXcQ'; // Replace with actual video ID
                    break;
                default:
                    videoSrc = 'https://www.youtube.com/embed/dQw4w9WgXcQ'; // Replace with actual video ID
            }
            
            videoFrame.setAttribute('src', videoSrc);
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
        });
    });

    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
        videoFrame.setAttribute('src', ''); // Stop the video from playing when modal is closed
        document.body.style.overflow = ''; // Re-enable scrolling
    });

    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
            videoFrame.setAttribute('src', '');
            document.body.style.overflow = '';
        }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Adjust for header height
                    behavior: 'smooth'
                });
            }
        });
    });

    // Simple form validation
    const contactForm = document.querySelector('.contact-form form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const subjectInput = document.getElementById('subject');
            const messageInput = document.getElementById('message');
            
            let isValid = true;
            
            // Basic validation
            if (nameInput.value.trim() === '') {
                highlightError(nameInput);
                isValid = false;
            } else {
                removeError(nameInput);
            }
            
            if (emailInput.value.trim() === '' || !isValidEmail(emailInput.value)) {
                highlightError(emailInput);
                isValid = false;
            } else {
                removeError(emailInput);
            }
            
            if (subjectInput.value.trim() === '') {
                highlightError(subjectInput);
                isValid = false;
            } else {
                removeError(subjectInput);
            }
            
            if (messageInput.value.trim() === '') {
                highlightError(messageInput);
                isValid = false;
            } else {
                removeError(messageInput);
            }
            
            if (isValid) {
                // In a real application, you would send the form data to a server here
                alert('Message sent successfully! We will get back to you soon.');
                contactForm.reset();
            }
        });
    }

    function highlightError(input) {
        input.style.borderColor = 'var(--danger-color)';
    }

    function removeError(input) {
        input.style.borderColor = 'var(--light-gray)';
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Testimonial slider auto-scroll
    const testimonialSlider = document.querySelector('.testimonials-slider');
    const testimonials = document.querySelectorAll('.testimonial');
    
    if (testimonialSlider && testimonials.length > 1) {
        let currentIndex = 0;
        const testimonialWidth = testimonials[0].offsetWidth + 30; // Add gap
        
        setInterval(() => {
            currentIndex = (currentIndex + 1) % testimonials.length;
            testimonialSlider.scrollTo({
                left: currentIndex * testimonialWidth,
                behavior: 'smooth'
            });
        }, 5000); // Change testimonial every 5 seconds
    }

    // Projects hover effect for mobile
    if (window.innerWidth < 768) {
        projectCards.forEach(card => {
            const overlay = card.querySelector('.project-overlay');
            
            card.addEventListener('click', function(e) {
                if (e.target.closest('.view-demo') || e.target.closest('.btn')) {
                    return; // Allow clicking on buttons
                }
                
                projectCards.forEach(c => {
                    if (c !== card) {
                        c.querySelector('.project-overlay').style.opacity = '0';
                    }
                });
                
                const currentOpacity = window.getComputedStyle(overlay).opacity;
                overlay.style.opacity = currentOpacity === '0' ? '1' : '0';
            });
        });
    }
}); 