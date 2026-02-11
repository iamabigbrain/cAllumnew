document.addEventListener("DOMContentLoaded", function () {

  // ================================
  // REGISTER GSAP
  // ================================
  gsap.registerPlugin(ScrollTrigger);


  // ================================
  // HERO IMAGE MOUSE PULL
  // ================================
  const heroImage = document.querySelector(".hero-left img");

  if (heroImage) {
    document.addEventListener("mousemove", e => {
      const x = (window.innerWidth / 2 - e.clientX) / 30;
      const y = (window.innerHeight / 2 - e.clientY) / 30;

      heroImage.style.transform = `translate(${x}px, ${y}px)`;
    });
  }


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
  // SECTION FADE-IN
  // ================================
// ================================
// SECTION FADE IN + OUT (SMOOTH)
// ================================
gsap.utils.toArray(".section").forEach(section => {

  gsap.fromTo(section,
    {
      opacity: 0,
      y: 80
    },
    {
      opacity: 1,
      y: 0,
      ease: "power3.out",
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "bottom 20%",
        scrub: true
      }
    }
  );

});



  // ================================
  // PROJECT HOVER EFFECT
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
// TIMELINE MILESTONES HOVER (SMOOTH)
// ================================

const milestones = document.querySelectorAll(".milestone");

milestones.forEach(milestone => {

  // Set a smooth baseline
  gsap.set(milestone, {
    scale: 1,
    transformOrigin: "center center"
  });

  milestone.addEventListener("mouseenter", () => {
    gsap.to(milestone, {
      scale: 1.12,
      boxShadow: "0 20px 40px rgba(255,0,0,0.45)",
      duration: 0.4,
      ease: "power3.out",
      overwrite: "auto"
    });
  });

  milestone.addEventListener("mouseleave", () => {
    gsap.to(milestone, {
      scale: 1,
      boxShadow: "0 0 0 rgba(0,0,0,0)",
      duration: 0.4,
      ease: "power3.out",
      overwrite: "auto"
    });
  });

});



  // ================================
  // SMOOTH NAV SCROLL
  // ================================
  document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", e => {
      e.preventDefault();

      const target = document.querySelector(link.getAttribute("href"));

      if (target) {
        target.scrollIntoView({
          behavior: "smooth"
        });
      }

    });

  });

});
