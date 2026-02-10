// ===== HERO IMAGE MOUSE PULL =====
const heroImage = document.querySelector(".hero-left img");
document.addEventListener("mousemove", e => {
  const x = (window.innerWidth / 2 - e.clientX) / 30;
  const y = (window.innerHeight / 2 - e.clientY) / 30;
  heroImage.style.transform = `translate(${x}px, ${y}px)`;
});

// ===== SCROLL ANIMATION =====
const sections = document.querySelectorAll(".hero, .section");

function animateSections() {
  const scrollY = window.scrollY;
  const windowH = window.innerHeight;

  sections.forEach(sec => {
    const secTop = sec.offsetTop;
    if(scrollY + windowH * 0.8 > secTop) {
      sec.classList.add("active");
    }
  });
}

window.addEventListener("scroll", animateSections);
window.addEventListener("load", animateSections);
