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

  // More Section Flip Card Interaction
  const articles = document.querySelectorAll('.article');

  articles.forEach(article => {
    const articleInner = article.querySelector('.article-inner');
    
    // Hover interaction for desktop
    article.addEventListener('mouseenter', () => {
      articleInner.classList.add('flipped');
    });

    article.addEventListener('mouseleave', () => {
      articleInner.classList.remove('flipped');
    });

    // Touch/Click interaction for mobile and accessibility
    article.addEventListener('click', () => {
      articleInner.classList.toggle('flipped');
    });

    // Keyboard accessibility
    article.setAttribute('tabindex', '0');
    article.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        articleInner.classList.toggle('flipped');
      }
    });
  });

  // Preload images for smoother experience
  function preloadImages() {
    const imageUrls = [
      'images/advisor.jpg', 
      'images/presenter.jpg', 
      'images/photo1.jpg', 
      'images/photo2.jpg',
      'images/photo3.jpg',
      'images/photo4.jpg',
      'images/photo5.jpg',
      'images/photo6.jpg',
      'images/photo7.jpg',
      'images/photo8.jpg',
      'images/photo9.jpg',
      'images/photo10.jpg',
      'images/photo11.jpg',
      'images/photo12.jpg',
      'images/photo13.jpg',
      'images/photo14.jpg',
      'images/photo15.jpg'
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
