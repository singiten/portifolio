// Projects Data
const projects = [
    {
        id: 1,
        name: "Flora Social Media",
        tech: ["React", "Node.js", "MongoDB", "Express"],
        description: "A full-featured social media platform where users can share posts, like, comment, follow others, and save favorite content with real-time notifications.",
        github: "https://github.com/singiten/flora",
        live: "https://flora-social-media.onrender.com",
        image: "images/flora.jpg"
    },
    {
        id: 2,
        name: "Ethiopian Tour Guide",
        tech: ["HTML", "CSS", "JavaScript"],
        description: "A tourism platform showcasing Ethiopia's 9 regions, Addis Ababa, and Dire Dawa. Features region-based exploration, interactive maps, real-time booking, and cultural insights.",
        github: "https://github.com/singiten/tour-guide",
        live: "#",
        image: "images/tour.jpg"
    },
    {
        id: 3,
        name: "Ahadu Jobs Portal",
        tech: ["React", "Node.js", "MongoDB", "Express", "Socket.io"],
        description: "A dual-interface job marketplace connecting job seekers with recruiters. Features intelligent job matching, application tracking, recruiter dashboards, and real-time notifications.",
        github: "https://github.com/singiten/ahadu-jobs",
        live: "https://ahadu-jobs-frontend.onrender.com/",
        image: "images/ahadu.jpg"
    },
    {
        id: 4,
        name: "Ethiopian Book Store",
        tech: ["HTML", "CSS", "JavaScript"],
        description: "An e-commerce platform celebrating Ethiopian literature. Features book browsing across categories, shopping cart management, secure checkout, and personalized recommendations.",
        github: "https://github.com/singiten/book_storess",
        live: "#",
        image: "images/book.jpg"
    },
    {
        id: 5,
        name: "Ethiopian Holiday",
        tech: ["HTML", "CSS", "JS"],
        description: "A cultural platform celebrating Ethiopia's unique holidays and calendar system. Features holiday descriptions, daily Sinksar readings, and an intelligent Ethiopian calendar date checker.",
        github: "https://github.com/singiten/holiday",
        live: "#",
        image: "images/holiday.jpg"
    },
    {
        id: 6,
        name: "Association Web",
        tech: ["HTML", "JS", "CSS"],
        description: "A role-based association management platform with three-tier access control (Owner, Staff, Members). Features member registration, event management, announcement system, and real-time notifications.",
        github: "https://github.com/singiten/associations",
        live: "#",
        image: "images/asso.jpg"
    }
];

// Skills Data
const skills = [
    {
        icon: "⚛️",
        title: "Frontend",
        skills: ["React", "JavaScript", "HTML/CSS", "Tailwind"]
    },
    {
        icon: "🚀",
        title: "Backend",
        skills: ["Node.js", "Express",  "REST API"]
    },
    {
        icon: "🗄️",
        title: "Database",
        skills: ["MongoDB", "MySQL"]
    },
    {
        icon: "🔧",
        title: "Tools",
        skills: ["Git", "Insomnia", "VS Code", "Thunder Client"]
    }
];

// Toast Notification Function
function showToast(message, type = 'success', title = '') {
    // Remove existing toast
    const existingToast = document.querySelector('.toast-notification');
    if (existingToast) {
        existingToast.remove();
    }
    
    // Create toast element
    const toast = document.createElement('div');
    toast.className = `toast-notification toast-${type}`;
    
    // Set title
    let toastTitle = title;
    if (!toastTitle) {
        if (type === 'success') toastTitle = 'Success!';
        if (type === 'error') toastTitle = 'Error!';
        if (type === 'info') toastTitle = 'Info';
    }
    
    toast.innerHTML = `
        <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
        <div class="toast-content">
            <div class="toast-title">${toastTitle}</div>
            <div class="toast-message">${message}</div>
        </div>
        <i class="fas fa-times toast-close"></i>
    `;
    
    document.body.appendChild(toast);
    
    // Show toast with animation
    setTimeout(() => {
        toast.classList.add('show');
    }, 10);
    
    // Close button
    const closeBtn = toast.querySelector('.toast-close');
    closeBtn.addEventListener('click', () => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    });
    
    // Auto close after 4 seconds
    setTimeout(() => {
        if (toast && toast.parentNode) {
            toast.classList.remove('show');
            setTimeout(() => {
                if (toast && toast.parentNode) toast.remove();
            }, 300);
        }
    }, 4000);
}

// Load Projects with Images
function loadProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    if (!projectsGrid) return;
    
    projectsGrid.innerHTML = projects.map((project, index) => `
        <div class="project-card" data-aos="fade-up" data-aos-delay="${index * 100}">
            <div class="project-image-wrapper">
                <img src="${project.image}" alt="${project.name}" class="project-image" onerror="this.src='https://via.placeholder.com/400x250/8B5A2B/FFFFFF?text=${encodeURIComponent(project.name)}'">
                <div class="project-overlay">
                    <div class="project-links-overlay">
                        <a href="${project.live}" target="_blank" class="overlay-link"><i class="fas fa-external-link-alt"></i> Live Demo</a>
                        <a href="${project.github}" target="_blank" class="overlay-link"><i class="fab fa-github"></i> Code</a>
                    </div>
                </div>
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.name}</h3>
                <div class="project-tech">
                    ${project.tech.slice(0, 4).map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    ${project.tech.length > 4 ? `<span class="tech-tag">+${project.tech.length - 4}</span>` : ''}
                </div>
                <p class="project-description">${project.description.substring(0, 120)}${project.description.length > 120 ? '...' : ''}</p>
                <div class="project-links">
                    <a href="${project.github}" target="_blank" class="project-link"><i class="fab fa-github"></i> Code</a>
                    <a href="${project.live}" target="_blank" class="project-link"><i class="fas fa-external-link-alt"></i> Live Demo</a>
                </div>
            </div>
        </div>
    `).join('');
}

// Load Skills
function loadSkills() {
    const skillsGrid = document.getElementById('skills-grid');
    if (!skillsGrid) return;
    
    skillsGrid.innerHTML = skills.map(skill => `
        <div class="skill-card">
            <div class="skill-icon">${skill.icon}</div>
            <h3 class="skill-title">${skill.title}</h3>
            <ul class="skill-list">
                ${skill.skills.map(s => `<li>${s}</li>`).join('')}
            </ul>
        </div>
    `).join('');
}

// Download Resume
function downloadResume() {
    // Create a temporary link to download resume
    const link = document.createElement('a');
    link.href = 'resume.pdf';
    link.download = 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    showToast('Resume download started!', 'success', 'Downloading...');
}

// Contact Form Handler with Formspree
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const name = this.querySelector('input[name="name"]').value;
        const email = this.querySelector('input[name="email"]').value;
        const message = this.querySelector('textarea[name="message"]').value;
        
        // Validate
        if (!name || !email || !message) {
            showToast('Please fill in all fields', 'error', 'Missing Information');
            return;
        }
        
        if (!email.includes('@') || !email.includes('.')) {
            showToast('Please enter a valid email address', 'error', 'Invalid Email');
            return;
        }
        
        // Show loading state
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;
        
        try {
            const formData = new FormData(this);
            const response = await fetch(this.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            if (response.ok) {
                showToast(
                    `Thank you ${name}! I'll get back to you within 24 hours.`,
                    'success',
                    'Message Sent! 🎉'
                );
                this.reset();
            } else {
                const data = await response.json();
                if (data.errors) {
                    showToast(data.errors.map(error => error.message).join(', '), 'error', 'Error');
                } else {
                    showToast('Something went wrong. Please try again.', 'error', 'Error');
                }
            }
        } catch (error) {
            console.error('Formspree Error:', error);
            showToast('Network error. Please check your connection.', 'error', 'Error');
        } finally {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }
    });
}

// Navbar Scroll Effect
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
            const navLinks = document.querySelector('.nav-links');
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        }
    });
});

// Active link highlighting on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Animation on Scroll using Intersection Observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Load all content when page loads
document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
    loadSkills();
    
    // Observe cards for animation
    document.querySelectorAll('.project-card, .skill-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });
});