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
