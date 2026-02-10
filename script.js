// HERO IMAGE MOUSE PULL
const heroImage = document.querySelector(".hero-left img");
document.addEventListener("mousemove", e => {
  const x = (window.innerWidth / 2 - e.clientX) / 30;
  const y = (window.innerHeight / 2 - e.clientY) / 30;
  heroImage.style.transform = `translate(${x}px, ${y}px)`;
});

// FADE-IN SECTIONS & HERO FADE
gsap.registerPlugin(ScrollTrigger);

// Hero fade out as you scroll
gsap.to(".hero", {
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: true
  },
  opacity: 0
});

// Fade in sections
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

// TIMELINE HORIZONTAL SCROLL
gsap.to(".timeline-track", {
  x: () => -(document.querySelector(".timeline-track").scrollWidth - window.innerWidth + 40),
  ease: "none",
  scrollTrigger: {
    trigger: ".timeline",
    start: "top top",
    end: "bottom top",
    scrub: true
  }
});

// SMOOTH SCROLL FOR MENU
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    target.scrollIntoView({behavior: "smooth"});
  });
});
