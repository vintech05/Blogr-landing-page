const menu = document.querySelector(".menu");
const burger = document.querySelector(".menu-burger");
const closeIcon = document.querySelector(".close-menu");
const accordions = document.querySelectorAll(".accordion-select");

function openMenu() {
  menu.style.display = "flex";
  closeIcon.style.display = "flex";
  burger.style.display = "none";
}

function closeMenu() {
  menu.style.display = "none";
  closeIcon.style.display = "none";
  burger.style.display = "flex";

  document.querySelectorAll(".accordion-content").forEach((content) => {
    content.classList.remove("h-[300px]");
    content.classList.add("h-0");
  });
}

accordions.forEach((accordion) => {
  accordion.addEventListener("click", () => {
    document.querySelectorAll(".accordion-content").forEach((content) => {
      content.classList.remove("h-[300px]");
      content.classList.add("h-0");
    });

    const content = accordion.nextElementSibling;
    if (content) {
      content.classList.remove("h-0");
      content.classList.add("h-[300px]");
    }
  });
});

burger.addEventListener("click", openMenu);
closeIcon.addEventListener("click", closeMenu);
