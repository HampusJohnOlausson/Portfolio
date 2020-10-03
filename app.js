//Nav-Meny & Hamburger Meny

const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".header-nav");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach((link) => {
    link.classList.toggle("fade");
  });
});

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("open");
});

links.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach((link) => {
    link.classList.toggle("fade");
  });
});