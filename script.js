// ================================
// HERO IMAGE MOUSE PULL
// ================================
const heroImage = document.querySelector(".hero-left img");

document.addEventListener("mousemove", e => {
  // Calculate distance from mouse to center of image
  const x = (window.innerWidth / 2 - e.clientX) / 30;
  const y = (window.innerHeight / 2 - e.clientY) / 30;

  // Move the image smoothly
  heroImage.style.transform = `translate(${x}px, ${y}px)`;
});

// ================================
// GSAP + SCROLL ANIMATIONS
// ================================

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// 1️⃣ Fade out hero on scroll
gsap.to(".hero", {
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: true
  },
  opacity: 0
});

// 2️⃣ Fade in sections on scroll
gsap.utils.toArray(".section").forEach(section => {
  gsap.fromTo(section,
    {opacity: 0, y: 50},
    {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "top 50%",
        scrub: true
      }
    });
});

// ================================
// PROJECT CARDS HOVER EFFECT
// ================================
document.querySelectorAll(".project").forEach(card => {
  card.addEventListener("mouseenter", () => {
    gsap.to(card, {
      scale: 1.05,
      boxShadow: "0 15px 30px rgba(255,0,0,0.3)", // red glow
      duration: 0.3
    });
  });
  card.addEventListener("mouseleave", () => {
    gsap.to(card, {
      scale: 1,
      boxShadow: "0 0 0 rgba(0,0,0,0)",
      duration: 0.3
    });
  });
});

// ================================
// TIMELINE MILESTONES HOVER EFFECT
// ================================
const milestones = document.querySelectorAll(".milestone");

milestones.forEach(milestone => {
  milestone.addEventListener("mouseenter", () => {
    gsap.to(milestone, {
      scale: 1.1,
      boxShadow: "0 15px 30px rgba(255,0,0,0.4)", // red glow
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
// SMOOTH SCROLL FOR NAV LINKS
// ================================
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    target.scrollIntoView({behavior: "smooth"});
  });
});
