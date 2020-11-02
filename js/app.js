//Nav-Meny & Hamburger Meny
const navToggle = () => {

const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".header-nav");
const navLinks = document.querySelector(".header-nav .nav-links");
const links = document.querySelectorAll(".nav-links li");

//Hamburger toggle
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  navbar.classList.toggle("open");

  links.forEach((link) => {
    link.classList.toggle("open");
  });
  
});

//Nav links Toggle
navLinks.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  navbar.classList.toggle("open");

  links.forEach((link) => {
    link.classList.toggle("open");
  });
  
});

}
navToggle();






//change language button

function changeLanguage() {

  const linkHome = document.querySelector('.homeLI');
  linkHome.innerHTML = 'Home'; 

  const englishBtn = document.querySelector('.english');
  englishBtn.innerHTML = 'Svenska';

}





