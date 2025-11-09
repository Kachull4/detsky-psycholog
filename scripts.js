const toggle = document.querySelector(".menu__toggle");
const menu = document.querySelector(".menu__list");

toggle.addEventListener("click", () => {
  const expanded = toggle.getAttribute("aria-expanded") === "true" || false;
  toggle.setAttribute("aria-expanded", !expanded);
  toggle.classList.toggle("is-active");
  menu.classList.toggle("is-active");
});

document.querySelectorAll(".menu__link").forEach((link) => {
  link.addEventListener("click", () => {
    toggle.classList.remove("is-active");
    menu.classList.remove("is-active");
  });
});

const sections = document.querySelectorAll("header[id], section[id]");
const navLinks = document.querySelectorAll(".menu__link");

window.addEventListener("scroll", () => {
  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 70;
    const sectionHeight = section.offsetHeight;

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(`#${currentSection}`)) {
      link.classList.add("active");
    }
  });
});