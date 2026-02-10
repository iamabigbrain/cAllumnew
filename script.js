// HERO IMAGE MOUSE PULL
const heroImage = document.querySelector(".hero-left img");
document.addEventListener("mousemove", e => {
  const x = (window.innerWidth / 2 - e.clientX) / 30;
  const y = (window.innerHeight / 2 - e.clientY) / 30;
  heroImage.style.transform = `translate(${x}px, ${y}px)`;
});

// REGISTER GSAP PLUGIN
gsap.registerPlugin(ScrollTrigger);

// HERO FADE OUT ON SCROLL
gsap.to(".hero", {
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: true
  },
  opacity: 0
});

// FADE IN SECTIONS
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

// TIMELINE HORIZONTAL SCROLL WITH PIN LOCK
const timelineSection = document.querySelector(".timeline");

ScrollTrigger.create({
  trigger: timelineSection,
  start: "top top",
  end: () => "+=" + (timelineSection.scrollWidth),
  onEnter: () => document.body.style.overflowY = "hidden",
  onLeave: () => document.body.style.overflowY = "auto",
  onEnterBack: () => document.body.style.overflowY = "hidden",
  onLeaveBack: () => document.body.style.overflowY = "auto",
});


// TIMELINE MILESTONES POP-IN
gsap.utils.toArray(".milestone").forEach((milestone, i) => {
  gsap.from(milestone, {
    scale: 0.8,
    opacity: 0,
    y: 30,
    scrollTrigger: {
      trigger: milestone,
      containerAnimation: ScrollTrigger.getById(timelineTrack),
      start: "left 80%",
      end: "left 50%",
      toggleActions: "play none none reverse",
      scrub: true
    },
    delay: i * 0.1
  });
});

// PROJECT CARDS HOVER MICROINTERACTIONS
document.querySelectorAll(".project").forEach(card => {
  card.addEventListener("mouseenter", () => {
    gsap.to(card, {scale: 1.05, boxShadow: "0 15px 30px rgba(0,255,255,0.3)", duration: 0.3});
  });
  card.addEventListener("mouseleave", () => {
    gsap.to(card, {scale: 1, boxShadow: "0 0 0 rgba(0,0,0,0)", duration: 0.3});
  });
});

// SMOOTH SCROLL FOR NAV LINKS
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    target.scrollIntoView({behavior: "smooth"});
  });
});
