document.addEventListener("DOMContentLoaded", function () {

  gsap.registerPlugin(ScrollTrigger);

  // HERO IMAGE PULL
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

  // HEADER LOAD ANIMATION
  gsap.from("header", {
    y: -80,
    opacity: 0,
    duration: 1
  });

  gsap.from(".hero-left img", {
    opacity: 0,
    duration: 1.5
  });

  gsap.to(".fade-line", {
    opacity: 1,
    y: 0,
    stagger: 0.3,
    duration: 1,
    delay: 0.5
  });

  // SECTION FADE IN
  gsap.utils.toArray(".section").forEach(section => {
    gsap.from(section, {
      opacity: 0,
      y: 80,
      duration: 1,
      scrollTrigger: {
        trigger: section,
        start: "top 80%"
      }
    });
  });

  // PROJECT EXPAND
  document.querySelectorAll(".project").forEach(card => {
    card.addEventListener("click", () => {
      const extra = card.querySelector(".extra-info");
      extra.style.display =
        extra.style.display === "block" ? "none" : "block";
    });
  });

  // TIMELINE EXPAND
  document.querySelectorAll(".milestone").forEach(item => {
    item.addEventListener("click", () => {
      const extra = item.querySelector(".extra-info");
      extra.style.display =
        extra.style.display === "block" ? "none" : "block";
    });
  });

});
