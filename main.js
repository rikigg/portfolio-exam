// main.js

document.addEventListener("DOMContentLoaded", function () {
  // Burger menu logic
  const burgerBtn = document.getElementById('burger-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const closeMenu = document.getElementById('close-menu');
  if (burgerBtn && mobileMenu) {
    burgerBtn.addEventListener('click', () => {
      burgerBtn.classList.toggle('open');
      mobileMenu.classList.toggle('hidden');
      mobileMenu.classList.toggle('flex');
    });
  }
  if (closeMenu) {
    closeMenu.addEventListener('click', () => {
      burgerBtn.classList.remove('open');
      mobileMenu.classList.add('hidden');
      mobileMenu.classList.remove('flex');
    });
  }

  // Loader fade-out
  window.addEventListener("load", function () {
    const loader = document.getElementById("loader");
    if (loader) loader.style.opacity = "0";
    setTimeout(() => {
      if (loader) loader.style.display = "none";
    }, 600);
  });

  // Fade-in on scroll
  const fadeEls = document.querySelectorAll('.fade-in-up');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.18 });
    fadeEls.forEach(el => observer.observe(el));
  } else {
    fadeEls.forEach(el => el.classList.add('visible'));
  }

  // Vanta фон
  if (window.VANTA && document.getElementById('vanta-bg')) {
    VANTA.NET({
      el: "#vanta-bg",
      mouseControls: true,
      touchControls: true,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0x5bb6ff,
      backgroundColor: 0xe6edf7,
      points: 10.0,
      maxDistance: 22.0
    });
  }
});
