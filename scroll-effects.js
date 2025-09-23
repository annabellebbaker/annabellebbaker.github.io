
// Add subtle parallax effect on scroll
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const cards = document.querySelectorAll('.project-card');

  cards.forEach((card, index) => {
    const speed = 0.3;
    const yPos = -(scrolled * speed * (index + 1) * 0.05);
    card.style.transform = `translateY(${yPos}px)`;
  });
});

// Add intersection observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px',
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Initially hide cards for animation
document.querySelectorAll('.project-card').forEach((card, index) => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(50px)';
  card.style.transition = `opacity 0.6s ease ${index * 0.2}s, transform 0.6s ease ${index * 0.2}s`;
  observer.observe(card);
});

// Add smooth scrolling for better UX
document.documentElement.style.scrollBehavior = 'smooth';
