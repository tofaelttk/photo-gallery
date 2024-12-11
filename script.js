// Optional: Add GSAP animations
document.addEventListener("DOMContentLoaded", () => {
  gsap.from("header", { duration: 1, y: -100, opacity: 0 });
  gsap.from("#gallery h1", { duration: 1, x: -200, opacity: 0, delay: 0.5 });
});

