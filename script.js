document.addEventListener("DOMContentLoaded", function () {

  // ====================================
  // REGISTER GSAP
  // ====================================
  gsap.registerPlugin(ScrollTrigger);

  // ====================================
  // HEADER DROP + FADE IN
  // ====================================
  gsap.from("header", {
    y: -80,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
  });


  // ====================================
  // HERO IMAGE FADE IN
  // ====================================
  gsap.from(".hero-left img", {
    opacity: 0,
    scale: 0.9,
    duration: 1.2,
    delay: 0.3,
    ease: "power3.out"
  });


  // ====================================
  // HERO IMAGE MOUSE PULL (TOWARDS MOUSE)
  // ====================================
  const heroImage = document.querySelector(".hero-left img");

  if (heroImage) {
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
  }


  // ====================================
  // HERO TEXT FADE IN (STAGGERED)
  // ====================================
  gsap.from(".hero-right h1", {
    opacity: 0,
    y: 40,
    duration: 1,
    ease: "power3.out"
  });

  gsap.from(".fade-line", {
    opacity: 0,
    y: 30,
    duration: 1,
    stagger: 0.3,
    delay: 0.4,
    ease: "power3.out"
  });


  // ====================================
  // HERO FADE OUT ON SCROLL
  // ====================================
  gsap.to(".hero", {
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom top",
      scrub: true
    },
    opacity: 0
  });






  // ====================================
  // SECTION FADE IN ON SCROLL
  // ====================================
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
          end: "top 40%",
          scrub: true
        }
      }
    );

  });


  // ====================================
  // PROJECT EXPAND ON CLICK
  // ====================================
  document.querySelectorAll(".project").forEach(card => {

    card.addEventListener("click", () => {

      // Close others
      document.querySelectorAll(".project").forEach(c => {
        if (c !== card) c.classList.remove("expanded");
      });

      card.classList.toggle("expanded");

    });

  });


  // ====================================
  // TIMELINE EXPAND ON CLICK
  // ====================================
  document.querySelectorAll(".milestone").forEach(milestone => {

    milestone.addEventListener("click", () => {

      document.querySelectorAll(".milestone").forEach(m => {
        if (m !== milestone) m.classList.remove("expanded");
      });

      milestone.classList.toggle("expanded");

    });

  });


  // ====================================
  // SMOOTH NAV SCROLL (FIXED HEADER OFFSET)
  // ====================================
  document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", e => {
      e.preventDefault();

      const target = document.querySelector(link.getAttribute("href"));

      if (target) {

        const headerOffset = 100;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });

      }

    });

  });

});

const timelineCards = document.querySelectorAll(".timeline-card");

timelineCards.forEach(card => {
  card.addEventListener("click", () => {

    timelineCards.forEach(other => {
      if (other !== card) {
        other.classList.remove("active");
      }
    });

    card.classList.toggle("active");

  });
});
