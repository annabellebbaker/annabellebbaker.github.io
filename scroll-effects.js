// Basic fade/slide reveal for sections
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const reveal = () => {
    const trigger = window.innerHeight * 0.94;
    sections.forEach((section) => {
      const top = section.getBoundingClientRect().top;
      if (top < trigger) {
        section.classList.add("visible");
      }
    });
  };
  window.addEventListener("scroll", reveal);
  reveal();
});
