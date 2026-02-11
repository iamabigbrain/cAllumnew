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
// TIMELINE HORIZONTAL HOVER/DRAG
// ================================

const timeline = document.querySelector(".timeline-track");
let isDragging = false;
let startX;
let scrollLeft;

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
  e.preventDefault();
  const x = e.pageX - timeline.offsetLeft;
  const walk = (x - startX) * 2; // scroll speed
  timeline.scrollLeft = scrollLeft - walk;
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
