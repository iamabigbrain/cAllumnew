// ===== HERO IMAGE MOUSE PULL =====
const heroImage = document.querySelector(".hero-left img");
document.addEventListener("mousemove", e => {
  const x = (window.innerWidth / 2 - e.clientX) / 30;
  const y = (window.innerHeight / 2 - e.clientY) / 30;
  heroImage.style.transform = `translate(${x}px, ${y}px)`;
});

// ===== SMOOTH SCROLL AND SECTION FADE =====
const container = document.querySelector(".scroll-container");
const sections = document.querySelectorAll(".section");
const hero = document.querySelector(".hero");

let scrollY = 0;
let currentY = 0;

window.addEventListener("scroll", () => {
  scrollY = window.scrollY;
});

function animate() {
  // Smooth easing
  currentY += (scrollY - currentY) * 0.1;
  container.style.transform = `translateY(-${currentY}px)`;

  // Hero fade out as we scroll
  const heroHeight = hero.offsetHeight;
  let heroOpacity = 1 - currentY / heroHeight;
  if(heroOpacity < 0) heroOpacity = 0;
  hero.style.opacity = heroOpacity;

  // Fade in sections
  sections.forEach(sec => {
    const top = sec.offsetTop - currentY;
    const windowH = window.innerHeight;
    if(top < windowH * 0.8) {
      sec.classList.add("active");
    } else {
      sec.classList.remove("active");
    }
  });

  requestAnimationFrame(animate);
}

animate();
