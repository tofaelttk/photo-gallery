document.addEventListener('DOMContentLoaded', () => {
  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      
      window.scrollTo({
        top: targetSection.offsetTop - 50,
        behavior: 'smooth'
      });
    });
  });

  // Enhanced photo interaction with modal-like description
  const photos = document.querySelectorAll('.photo');
  
  photos.forEach(photo => {
    // Optional: Add click event for mobile/touch devices
    photo.addEventListener('click', () => {
      photo.classList.toggle('active');
    });

    // Accessibility: Add keyboard navigation
    photo.setAttribute('tabindex', '0');
    photo.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        photo.classList.toggle('active');
      }
    });
  });

  // Preload images for smoother experience
  function preloadImages() {
    const imageUrls = [
      'images/advisor.jpg', 
      'images/presenter.jpg', 
      'images/photo1.jpg', 
      'images/photo2.jpg'
    ];

    imageUrls.forEach(url => {
      const img = new Image();
      img.src = url;
    });
  }
  preloadImages();

  // Scroll-based animation for sections
  const sections = document.querySelectorAll('.section');
  
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const sectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  sections.forEach(section => {
    sectionObserver.observe(section);
  });
});
