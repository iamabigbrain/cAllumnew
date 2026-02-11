// ================================
// HERO IMAGE MOUSE PULL (TOWARD)
// ================================
const heroImage = document.querySelector(".hero-left img");

document.addEventListener("mousemove", e => {
  // pull toward mouse
  const x = (e.clientX - window.innerWidth / 2) / 25;
  const y = (e.clientY - window.innerHeight / 2) / 25;

  gsap.to(heroImage, {
    x: x,
    y: y,
    duration: 0.6,
    ease: "power3.out"
  });
});

// ================================
// SECTIONS FADE-IN ON SCROLL
// ================================
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".section").forEach(section => {
  gsap.from(section, {
    opacity: 0,
    y: 40,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: section,
      start: "top 90%",
      toggleActions: "play none none reverse"
    }
  });
});

// ================================
// PROJECT CARDS HOVER EFFECT
// ================================
document.querySelectorAll(".project").forEach(card => {
  card.addEventListener("mouseenter", () => {
    gsap.to(card, {
      scale: 1.06,
      boxShadow: "0 20px 40px rgba(255,0,0,0.35)",
      duration: 0.3,
      ease: "power2.out"
    });
  });
  card.addEventListener("mouseleave", () => {
    gsap.to(card, {
      scale: 1,
      boxShadow: "0 0 0 rgba(0,0,0,0)",
      duration: 0.3,
      ease: "power2.out"
    });
  });
});

// ================================
// TIMELINE MILESTONES HOVER EFFECT
// ================================
document.querySelectorAll(".milestone").forEach(milestone => {
  milestone.addEventListener("mouseenter", () => {
    gsap.to(milestone, {
      scale: 1.1,
      boxShadow: "0 20px 40px rgba(255,0,0,0.45)",
      duration: 0.3,
      ease: "power2.out"
    });
  });

  milestone.addEventListener("mouseleave", () => {
    gsap.to(milestone, {
      scale: 1,
      boxShadow: "0 0 0 rgba(0,0,0,0)",
      duration: 0.3,
      ease: "power2.out"
    });
  });
});

// ================================
// NAV LINKS SMOOTH SCROLL
// ================================
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});

// ================================
// TIMELINE DRAG (HORIZONTAL DESKTOP / VERTICAL MOBILE)
// ================================
const timeline = document.querySelector(".timeline-track");
const isMobile = window.innerWidth <= 768;

if (!isMobile) {
  let isDragging = false;
  let startX;
  let scrollLeft;

  // MOUSE DRAG
  timeline.addEventListener("mousedown", e => {
    isDragging = true;
    startX = e.pageX - timeline.offsetLeft;
    scrollLeft = timeline.scrollLeft;
    timeline.style.cursor = "grabbing";
  });
  timeline.addEventListener("mouseleave", () => {
    isDragging = false;
    timeline.style.cursor = "grab";
  });
  timeline.addEventListener("mouseup", () => {
    isDragging = false;
    timeline.style.cursor = "grab";
  });
  timeline.addEventListener("mousemove", e => {
    if (!isDragging) return;
    const x = e.pageX - startX;
    const walk = x * 2; // drag speed
    timeline.scrollLeft = scrollLeft - walk;
  });

  // TOUCH DRAG
  timeline.addEventListener("touchstart", e => {
    isDragging = true;
    startX = e.touches[0].pageX - timeline.offsetLeft;
    scrollLeft = timeline.scrollLeft;
  });
  timeline.addEventListener("touchmove", e => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - startX;
    const walk = x * 2;
    timeline.scrollLeft = scrollLeft - walk;
  });
  timeline.addEventListener("touchend", () => {
    isDragging = false;
  });
}
