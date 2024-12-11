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

  // Toggle photo description on click for mobile
  const photos = document.querySelectorAll('.photo');

  photos.forEach(photo => {
    photo.addEventListener('click', () => {
      if (photo.classList.contains('clicked')) {
        photo.classList.remove('clicked');
      } else {
        // Remove 'clicked' class from all photos first
        photos.forEach(p => p.classList.remove('clicked'));
        photo.classList.add('clicked');
      }
    });
  });
});
