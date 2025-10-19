// === TOGGLE NAVBAR ICON ===
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// === SCROLL SECTIONS ACTIVE LINK ===
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        }
    });

    // === STICKY HEADER ===
    let header = document.querySelector('header');
    header.classList.toggle('sticky', top > 100);

    // === REMOVE NAVBAR WHEN LINK CLICKED (MOBILE) ===
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// === SCROLL REVEAL ANIMATIONS ===
ScrollReveal({
    distance: '80px',
    duration: 1800,
    delay: 200,
    reset: false  // disable reset for smoother scroll behavior
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// === TYPED TEXT EFFECT ===
const typed = new Typed('.multiple-text', {
    strings: [
        'Finance Student',
        'Analytics Enthusiast',
        'Sustainability Advocate',
        'Aspiring Analyst'
    ],
    typeSpeed: 100,
    backSpeed: 90,
    backDelay: 1200,
    loop: true,
    smartBackspace: true
});
