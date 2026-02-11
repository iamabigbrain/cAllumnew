// ================================
// HERO IMAGE MOUSE PULL (TOWARD)
// ================================
const heroImage = document.querySelector(".hero-left img");

document.addEventListener("mousemove", e => {
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
// GSAP SCROLL FADE-IN SECTIONS
// ================================
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".section").forEach(section => {
  gsap.fromTo(section,
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: section,
        start: "top 90%", // triggers when section top is 90% down the viewport
        toggleActions: "play none none reverse"
      }
    }
  );
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
// TIMELINE CARDS HOVER EFFECT
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
// TIMELINE HORIZONTAL DRAG (WITHOUT BLOCKING VERTICAL SCROLL)
// ================================
const timeline = document.querySelector(".timeline-track");
let isDragging = false;
let startX;
let scrollLeft;

// Mouse events
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
  if(!isDragging) return;
  const x = e.pageX - startX;
  const walk = x * 2; // adjust drag speed
  timeline.scrollLeft = scrollLeft - walk;
});

// Touch events for mobile
timeline.addEventListener("touchstart", e => {
  isDragging = true;
  startX = e.touches[0].pageX - timeline.offsetLeft;
  scrollLeft = timeline.scrollLeft;
});

timeline.addEventListener("touchend", () => {
  isDragging = false;
});

timeline.addEventListener("touchmove", e => {
  if(!isDragging) return;
  const x = e.touches[0].pageX - startX;
  const walk = x * 2;
  timeline.scrollLeft = scrollLeft - walk;
});
