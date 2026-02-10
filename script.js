// ===== HERO IMAGE MOUSE PULL =====
const heroImage = document.querySelector(".hero-left img");

if (heroImage) {
  document.addEventListener("mousemove", (e) => {
    const x = (window.innerWidth / 2 - e.clientX) / 30;
    const y = (window.innerHeight / 2 - e.clientY) / 30;
    heroImage.style.transform = `translate(${x}px, ${y}px)`;
  });
}

// ===== SCROLL FADE-IN =====
const sections = document.querySelectorAll("section");

function handleScroll() {
  const scrollY = window.scrollY;
  const windowHeight = window.innerHeight;

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    // Section becomes active when scroll passes 30% of its top
    if(scrollY + windowHeight * 0.3 > sectionTop){
      section.classList.add("active");
    }
  });
}

window.addEventListener("scroll", handleScroll);
window.addEventListener("load", handleScroll);
