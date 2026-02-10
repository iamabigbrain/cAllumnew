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
