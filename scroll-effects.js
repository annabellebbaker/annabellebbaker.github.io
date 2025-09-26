// REMOVED: Parallax effect that was causing cards to move on scroll
// The original parallax code was applying translateY transforms to cards

// Add intersection observer for fade-in animations only (no movement)
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      // REMOVED: transform translateY - this was causing movement
      // entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Initially hide cards for fade-in animation (no transform movement)
document.querySelectorAll(".project-card").forEach((card, index) => {
  card.style.opacity = "0";
  // REMOVED: translateY transform that caused initial movement
  // card.style.transform = 'translateY(50px)';
  card.style.transition = `opacity 0.6s ease ${index * 0.2}s`;
  observer.observe(card);
});

// Keep smooth scrolling for better UX
document.documentElement.style.scrollBehavior = "smooth";
