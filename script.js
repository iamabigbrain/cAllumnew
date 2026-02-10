// ===== HERO IMAGE MOUSE PULL =====
const heroImage = document.querySelector(".hero-left img");
document.addEventListener("mousemove", e => {
  const x = (window.innerWidth / 2 - e.clientX) / 30;
  const y = (window.innerHeight / 2 - e.clientY) / 30;
  heroImage.style.transform = `translate(${x}px, ${y}px)`;
});

// ===== SECTIONS FADE-IN =====
const sections = document.querySelectorAll(".hero, .section");
function animateSections() {
  const scrollY = window.scrollY;
  const windowH = window.innerHeight;

  sections.forEach(sec => {
    const secTop = sec.offsetTop;
    if(scrollY + windowH * 0.8 > secTop){
      sec.classList.add("active");
    }
  });

  // HERO fade out
  const hero = document.querySelector(".hero");
  const heroHeight = hero.offsetHeight;
  let opacity = 1 - scrollY / (heroHeight * 0.7);
  if(opacity < 0) opacity = 0;
  hero.style.opacity = opacity;

  // TIMELINE HORIZONTAL SCROLL
  const timelineSection = document.querySelector(".timeline");
  const timelineTrack = document.querySelector(".timeline-track");
  const secTop = timelineSection.offsetTop;
  const secHeight = timelineSection.offsetHeight;
  if(scrollY >= secTop && scrollY <= secTop + secHeight){
    const progress = (scrollY - secTop) / secHeight; // 0 → 1
    const maxScroll = timelineTrack.scrollWidth - timelineSection.offsetWidth;
    timelineTrack.style.transform = `translateX(-${progress * maxScroll}px)`;
  }
}

window.addEventListener("scroll", animateSections);
window.addEventListener("load", animateSections);
