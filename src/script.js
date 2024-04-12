const menu = document.querySelector(".menu");
const burger = document.querySelector(".menu-burger");
const closeIcon = document.querySelector(".close-menu");
const accordionsMobile = document.querySelectorAll(".accordion-select");
const accordionsDesktop = document.querySelectorAll(
  ".accordion-desktop-select"
);
const hero = document.querySelector(".hero-section");

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
    content.classList.remove("h-[150px]");
    content.classList.add("h-0");
  });
}

//mobile nav

accordionsMobile.forEach((accordion) => {
  accordion.addEventListener("click", () => {
    document.querySelectorAll(".accordion-content").forEach((content) => {
      content.classList.remove("h-[150px]");
      content.classList.add("h-0");
    });

    const content = accordion.nextElementSibling;
    if (content) {
      content.classList.remove("h-0");
      content.classList.add("h-[150px]");
    }
  });
});

//desktop nav

accordionsDesktop.forEach((accordion) => {
  accordion.addEventListener("click", () => {
    document
      .querySelectorAll(".accordion-desktop-content")
      .forEach((content) => {
        content.classList.remove("flex");
        content.classList.add("hidden");
      });

    const content = accordion.nextElementSibling;
    if (content) {
      content.classList.toggle("hidden");
    }
  });
});

hero.addEventListener("click", () => {
  document.querySelectorAll(".accordion-desktop-content").forEach((content) => {
    content.classList.remove("flex");
    content.classList.add("hidden");
  });
});

burger.addEventListener("click", openMenu);
closeIcon.addEventListener("click", closeMenu);
