// ===== HERO IMAGE MOUSE PULL =====
const heroImage = document.querySelector(".hero-left img");
document.addEventListener("mousemove", e => {
  const x = (window.innerWidth / 2 - e.clientX) / 30;
  const y = (window.innerHeight / 2 - e.clientY) / 30;
  heroImage.style.transform = `translate(${x}px, ${y}px)`;
});

// ===== SECTION FADE-IN ON SCROLL =====
const sections = document.querySelectorAll(".section");
const hero = document.querySelector(".hero");

function onScroll() {
  const scrollY = window.scrollY;
  const windowH = window.innerHeight;

  // Fade out hero
  const heroHeight = hero.offsetHeight;
  let heroOpacity = 1 - scrollY / (heroHeight * 0.7); // fade hero faster
  if(heroOpacity < 0) heroOpacity = 0;
  hero.style.opacity = heroOpacity;

  // Fade in sections
  sections.forEach(sec => {
    const secTop = sec.offsetTop;
    if(scrollY + windowH * 0.8 > secTop){
      sec.classList.add("active");
    }
  });
}

window.addEventListener("scroll", onScroll);
window.addEventListener("load", onScroll);
