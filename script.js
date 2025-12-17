// ==================== Sidebar Toggle ====================
function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("sidebar-overlay");
  sidebar.classList.toggle("open");
  overlay.classList.toggle("show");
}

function closeSidebar() {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("sidebar-overlay");
  sidebar.classList.remove("open");
  overlay.classList.remove("show");
}

// ==================== Smooth Scroll with Offset ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const offset = 80;
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
      // Close sidebar on mobile after clicking
      if (window.innerWidth <= 768) {
        closeSidebar();
      }
    }
  });
});

// ==================== Scroll Animation ====================
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

// Observe all sections and cards
document.addEventListener('DOMContentLoaded', () => {
  const animatedElements = document.querySelectorAll('.section, .card, .timeline-item, .project-card, .award-card, .activity-item');
  
  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
});

// ==================== Active Navigation Highlight ====================
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('.section, header');
  const navLinks = document.querySelectorAll('.nav-link');
  
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;
    if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
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

// ==================== Parallax Effect for Header ====================
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  const scrolled = window.pageYOffset;
  if (header) {
    header.style.transform = `translateY(${scrolled * 0.5}px)`;
  }
});

// ==================== Add Animation Delays ====================
document.addEventListener('DOMContentLoaded', () => {
  const courseItems = document.querySelectorAll('.course-item');
  courseItems.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.05}s`;
  });
  
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
  });
  
  // ==================== Horizontal Photo Marquee Infinite Loop ====================
  const marqueeTrackHorizontal = document.getElementById('marqueeTrackHorizontal');
  if (marqueeTrackHorizontal) {
    // 複製所有照片項目以實現無縫循環
    const marqueeItems = Array.from(marqueeTrackHorizontal.children);
    marqueeItems.forEach(item => {
      const clone = item.cloneNode(true);
      marqueeTrackHorizontal.appendChild(clone);
    });
  }
});
