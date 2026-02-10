// ===== HERO IMAGE MOUSE PULL =====
const heroImage = document.querySelector(".hero-left img");

if (heroImage) {
  document.addEventListener("mousemove", (e) => {
    const x = (window.innerWidth / 2 - e.clientX) / 30;
    const y = (window.innerHeight / 2 - e.clientY) / 30;

    heroImage.style.transform = `translate(${x}px, ${y}px)`;
  });
}

// ===== SCROLL REVEAL =====
const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    const triggerPoint = windowHeight * 0.8;

    if (elementTop < triggerPoint) {
      el.classList.add("active");
    }
  });
}

// Run on scroll
window.addEventListener("scroll", revealOnScroll);

// Run on page load
window.addEventListener("load", revealOnScroll);
