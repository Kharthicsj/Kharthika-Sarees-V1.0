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

  function redirectToShopPage() {
    var shopPageUrl = 'Shop.html #cotton';
    window.location.href = shopPageUrl;
}

function redirectToShopPageCC() {
  var shopPageUrl = 'Shop.html #Cotton-Chudithars';
  window.location.href = shopPageUrl;
}
function redirectToShopPageSilkSaree() {
  var shopPageUrl = 'Shop.html #silk';
  window.location.href = shopPageUrl;
}
function redirectToShopPageSilkC() {
  var shopPageUrl = 'Shop.html #Silk-Chudithars';
  window.location.href = shopPageUrl;
}
function redirectToShopPageKora() {
  var shopPageUrl = 'Shop.html #kora';
  window.location.href = shopPageUrl;
}
function redirectToShopPageKoraC() {
  var shopPageUrl = 'Shop.html #kora-chudithars';
  window.location.href = shopPageUrl;
}
document.getElementById('cotton-link').addEventListener('click', function(e) {
    e.preventDefault();
    window.location.href = 'Shop.html#Cotton';
  });

  document.getElementById('silk-link').addEventListener('click', function(e) {
    e.preventDefault();
    window.location.href = 'Shop.html#Silk';
  });

  document.getElementById('kora-link').addEventListener('click', function(e) {
    e.preventDefault();
    window.location.href = 'Shop.html#Kora';
  });

  document.getElementById('soft-silk-link').addEventListener('click', function(e) {
    e.preventDefault();
    window.location.href = 'Shop.html#SoftSilk';
  });
  
  
  
  
