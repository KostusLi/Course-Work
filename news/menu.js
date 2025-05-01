document.addEventListener('DOMContentLoaded', function() {
  const burgerMenu = document.querySelector('.burger-menu');
  const mobileNav = document.querySelector('.mobile-nav');
  
  if (!burgerMenu || !mobileNav) return;
  
  burgerMenu.addEventListener('click', function() {
      this.classList.toggle('active');
      mobileNav.classList.toggle('active');
      
      if (mobileNav.classList.contains('active')) {
          document.body.style.overflow = 'hidden';
      } else {
          document.body.style.overflow = '';
      }
  });
  
  const navLinks = document.querySelectorAll('.mobile-nav a');
  navLinks.forEach(link => {
      link.addEventListener('click', function() {
          burgerMenu.classList.remove('active');
          mobileNav.classList.remove('active');
          document.body.style.overflow = '';
      });
  });
  
  document.addEventListener('click', function(e) {
      if (!e.target.closest('.burger-menu') && 
          !e.target.closest('.mobile-nav') &&
          mobileNav.classList.contains('active')) {
          burgerMenu.classList.remove('active');
          mobileNav.classList.remove('active');
          document.body.style.overflow = '';
      }
  });
});