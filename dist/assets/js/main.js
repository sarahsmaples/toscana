// Hero slideshow
const slides = document.querySelectorAll('.hero-slide');
if (slides.length > 1) {
  let current = 0;
  setInterval(() => {
    slides[current].classList.add('opacity-0');
    current = (current + 1) % slides.length;
    slides[current].classList.remove('opacity-0');
  }, 3000);
}

// Scroll-triggered animations
const animatedEls = document.querySelectorAll('[data-animate]');
if (animatedEls.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  animatedEls.forEach(el => observer.observe(el));
}

// Mobile menu toggle
const menuToggle = document.querySelector('[data-collapse-toggle="navbar-mobile"]');
const mobileMenu = document.getElementById('navbar-mobile');
if (menuToggle && mobileMenu) {
  mobileMenu.style.maxHeight = '0';
  mobileMenu.style.overflow = 'hidden';
  mobileMenu.style.transition = 'max-height 0.4s ease';

  const closeMenu = () => { mobileMenu.style.maxHeight = '0'; };
  const openMenu  = () => { mobileMenu.style.maxHeight = mobileMenu.scrollHeight + 'px'; };
  let isOpen = false;

  menuToggle.addEventListener('click', () => {
    isOpen = !isOpen;
    isOpen ? openMenu() : closeMenu();
  });
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => { isOpen = false; closeMenu(); });
  });
}

// Scroll-aware nav background
const nav = document.getElementById('main-nav');
if (nav) {
  const onScroll = () => {
    nav.classList.toggle('nav-scrolled', window.scrollY > 10);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run on load in case page is already scrolled
}
