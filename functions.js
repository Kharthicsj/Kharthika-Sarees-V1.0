// JavaScript for scroll animation
document.addEventListener("DOMContentLoaded", function () {
  const animatedElements = document.querySelectorAll(".scroll-animation");

  function checkIfInView() {
      animatedElements.forEach(function (element) {
          const elementTop = element.getBoundingClientRect().top;
          const windowHeight = window.innerHeight;

          if (elementTop < windowHeight) {
              element.classList.add("animate");
          }
      });
  }

  // Initial check when the page loads
  checkIfInView();

  // Check when the user scrolls
  window.addEventListener("scroll", function () {
      checkIfInView();
  });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          behavior: 'smooth',
          top: targetElement.offsetTop
        });
      }
    });
  });

document.getElementById('cottonSareeButton').addEventListener('click', function() {
    var shopPageUrl = 'Shop.html#Cotton'; // Replace with the correct section ID
    window.location.href = shopPageUrl;
});

document.getElementById('cottonChudiButton').addEventListener('click', function() {
    var shopPageUrl = 'Shop.html#Cotton-Chudithars'; // Replace with the correct section ID
    window.location.href = shopPageUrl;
});

document.getElementById('silkSareeButton').addEventListener('click', function() {
    var shopPageUrl = 'Shop.html#silk'; // Replace with the correct section ID
    window.location.href = shopPageUrl;
});

document.getElementById('silkChudiButton').addEventListener('click', function() {
    var shopPageUrl = 'Shop.html#Silk-Chudithars'; // Replace with the correct section ID
    window.location.href = shopPageUrl;
});

document.getElementById('koraSareeButton').addEventListener('click', function() {
    var shopPageUrl = 'Shop.html#kora'; // Replace with the correct section ID
    window.location.href = shopPageUrl;
});

document.getElementById('koraChudiButton').addEventListener('click', function() {
    var shopPageUrl = 'Shop.html#kora-chudithars'; // Replace with the correct section ID
    window.location.href = shopPageUrl;
});

document.getElementById('cotton-link').addEventListener('click', function(e) {
    e.preventDefault();
    window.location.href = 'Shop.html#Cotton';
  });

  document.getElementById('silk-link').addEventListener('click', function(e) {
    e.preventDefault();
    window.location.href = 'Shop.html#silk';
  });

  document.getElementById('kora-link').addEventListener('click', function(e) {
    e.preventDefault();
    window.location.href = 'Shop.html#kora';
  });

  document.getElementById('soft-silk-link').addEventListener('click', function(e) {
    e.preventDefault();
    window.location.href = 'Shop.html#soft_silk';
  });

  document.getElementById('about-link').addEventListener('click', function(e) {
    e.preventDefault();
    window.location.href = 'index.html#about';
  });
  
  document.getElementById('contact-link').addEventListener('click', function(e) {
    e.preventDefault();
    window.location.href = 'contact.html';
  });
  
