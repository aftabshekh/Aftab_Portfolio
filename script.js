// Responsive Navbar Toggle for Mobile
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.getElementById('nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function () {
            navLinks.classList.toggle('active');
        });
    }

    // Optional: Close menu when a link is clicked (mobile UX)
    document.querySelectorAll('#nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 700) {
                navLinks.classList.remove('active');
            }
        });
    });
});

// Optional: Smooth scroll for anchor links (for older browsers)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Scroll-to-top button functionality
const scrollBtn = document.getElementById('scrollTopBtn');
window.onscroll = function () {
    if (window.scrollY > 200) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
};
scrollBtn.onclick = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Highlight active navbar link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('#nav-links a');
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 80;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            const msg = document.getElementById('formMsg');
            msg.style.display = 'block';
            form.reset();
            setTimeout(() => { msg.style.display = 'none'; }, 3000);
        });
    }
});