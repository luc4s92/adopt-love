const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");
const body = document.querySelector("body");

// Display mobile menu
const mobileMenu = () => {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
  body.classList.toggle("active");
};

menu.addEventListener("click", mobileMenu);

// Animations with CSS on scroll
const elementsToAnimate = document.querySelectorAll(
  ".animate-hero, .animate-services, .animate-img, .animate-membership, .animate-card, .animate-team, .animate-email"
);

const animateOnScroll = () => {
  const triggerBottom = (window.innerHeight / 5) * 4;

  elementsToAnimate.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < triggerBottom) {
      element.classList.add("show");
    } else {
      element.classList.remove("show");
    }
  });
};

window.addEventListener("scroll", animateOnScroll);

// Initial check
animateOnScroll();
