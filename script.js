document.addEventListener("DOMContentLoaded", function () {

  // ================================
  // GSAP REGISTER
  // ================================
  gsap.registerPlugin(ScrollTrigger);

  // ================================
  // HERO IMAGE MOUSE PULL (toward mouse)
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
  // FADE IN HERO ON LOAD
  // ================================
  gsap.from(".hero-right h1, .hero-right p, .hero-left img", {
    opacity: 0,
    y: 40,
    duration: 1.2,
    stagger: 0.2,
    ease: "power3.out"
  });

  // ================================
  // FADE OUT HERO ON SCROLL
  // ================================
  gsap.to(".hero", {
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom top",
      scrub: true
    },
    opacity: 0
  });

  // ================================
  // SECTION FADE IN
  // ================================
  gsap.utils.toArray(".section").forEach(section => {
    gsap.fromTo(section, { opacity: 0, y: 80 }, {
      opacity: 1,
      y: 0,
      ease: "power3.out",
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "bottom 20%",
        scrub: true
      }
    });
  });

  // ================================
  // PROJECT HOVER
  // ================================
  document.querySelectorAll(".project").forEach(card => {
    card.addEventListener("mouseenter", () => {
      gsap.to(card, { scale: 1.06, boxShadow: "0 20px 40px rgba(255,0,0,0.35)", duration: 0.3 });
    });
    card.addEventListener("mouseleave", () => {
      gsap.to(card, { scale: 1, boxShadow: "0 0 0 rgba(0,0,0,0)", duration: 0.3 });
    });
  });

  // ================================
  // TIMELINE HOVER
  // ================================
  document.querySelectorAll(".milestone").forEach(m => {
    gsap.set(m, { scale: 1, transformOrigin: "center center" });
    m.addEventListener("mouseenter", () => gsap.to(m, { scale: 1.1, boxShadow: "0 20px 40px rgba(255,0,0,0.45)", duration: 0.4, ease: "power3.out" }));
    m.addEventListener("mouseleave", () => gsap.to(m, { scale: 1, boxShadow: "0 0 0 rgba(0,0,0,0)", duration: 0.4, ease: "power3.out" }));
  });

  // ================================
  // SMOOTH NAV SCROLL WITH OFFSET
  // ================================
  document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      if (!target) return;
      const yOffset = -100; // header height
      const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    });
  });

});
