document.addEventListener("DOMContentLoaded", function () {

  // ================================
  // REGISTER GSAP
  // ================================
  gsap.registerPlugin(ScrollTrigger);

  // ================================
  // HERO IMAGE MOUSE PULL
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
  // SECTIONS FADE IN
  // ================================
  gsap.utils.toArray(".section").forEach(section => {
    gsap.fromTo(section,
      { opacity: 0, y: 80 },
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
  // PROJECTS HOVER
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
  // TIMELINE HOVER
  // ================================
  document.querySelectorAll(".milestone").forEach(milestone => {
    gsap.set(milestone, { scale: 1, transformOrigin: "center center" });

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
  // CLICK TO EXPAND PROJECTS & TIMELINE
  // ================================
  document.querySelectorAll(".project, .milestone").forEach(item => {
    item.addEventListener("click", () => {
      item.classList.toggle("expanded");
    });
  });

  // ================================
  // SMOOTH NAV SCROLL
  // ================================
  document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      if (target) target.scrollIntoView({ behavior: "smooth" });
    });
  });

});
