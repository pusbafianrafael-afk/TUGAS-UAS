// DOM Elements
const navLinks = document.querySelectorAll('.nav-link');
const pages = document.querySelectorAll('.page');
const filterButtons = document.querySelectorAll('.filter-btn');
const mediaItems = document.querySelectorAll('.media-item');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

// Navigation functionality
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Get the target page
        const targetPage = this.getAttribute('data-page');
        
        // Update active nav link
        navLinks.forEach(item => item.classList.remove('active'));
        this.classList.add('active');
        
        // Show target page
        pages.forEach(page => {
            page.classList.remove('active');
            if (page.id === targetPage) {
                page.classList.add('active');
            }
        });
        
        // Close mobile menu if open
        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        }
        
        // Scroll to top of page
        window.scrollTo(0, 0);
    });
});

// Media filter functionality
filterButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Update active filter button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        
        // Get filter value
        const filterValue = this.getAttribute('data-filter');
        
        // Filter media items
        mediaItems.forEach(item => {
            if (filterValue === 'all' || item.classList.contains(filterValue)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Mobile menu toggle
hamburger.addEventListener('click', function() {
    this.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', function(e) {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Form submission handling (if any forms added later)
const forms = document.querySelectorAll('form');
forms.forEach(form => {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Form submitted! (This is a demo)');
        this.reset();
    });
});

// Add animation to elements when scrolling
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.feature-card, .project-card, .media-item').forEach(el => {
    observer.observe(el);
});

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Set initial active page
    const activePage = document.querySelector('.page.active');
    
    // Add some sample data to demonstrate dynamic content
    console.log('Portfolio website loaded successfully!');
    
    // Display current date in console
    const now = new Date();
    console.log(`Ujian Akhir Semester - ${now.toLocaleDateString('id-ID', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    })}`);
});