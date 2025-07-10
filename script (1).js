// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  
  // Smooth scrolling for nav links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Animated Counter
  function animateCounter() {
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;
      const increment = target / 100;
      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(animateCounter, 20);
      } else {
        counter.innerText = target;
      }
    });
  }
  
  // Trigger counter when section is visible
  window.addEventListener('scroll', function() {
    const counterSection = document.querySelector('.counter-box');
    if (counterSection.getBoundingClientRect().top < window.innerHeight - 100) {
      animateCounter();
    }
  });
