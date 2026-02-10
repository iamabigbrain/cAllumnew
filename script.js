const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
  const scrollPos = window.scrollY;
  const windowHeight = window.innerHeight;

  sections.forEach((section, index) => {
    const start = index * windowHeight;
    const end = start + windowHeight;

    if (scrollPos >= start && scrollPos < end) {
      section.classList.add("active");
      section.classList.remove("fade-out");
    } else if (scrollPos >= end) {
      section.classList.remove("active");
      section.classList.add("fade-out");
    } else {
      section.classList.remove("active", "fade-out");
    }
  });
});
