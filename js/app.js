/*-----Hamburger Menu-----*/

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


/*--------Smooth Scroll---------*/

const smoothScroll = () => {

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

  anchor.addEventListener('click', function(e) {

    e.preventDefault();
    
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

};
smoothScroll();


/*---------Image Slider----------*/

let slideIndex = 0;

const slideShow = () => {

  const keySlide = document.getElementsByClassName('slideKey');
  const dotFirst = document.getElementsByClassName('first');
  const dotSecond = document.getElementsByClassName('second');
  const benganSlide = document.getElementsByClassName('slideBengan');
  
  //Key Loop
  for(let i = 0; i < keySlide.length; i++){
      keySlide[i].style.display = 'none';
  }

  //Bengan Loop
  for(let i = 0; i < benganSlide.length; i++){
    benganSlide[i].style.display = 'none';
  }

  slideIndex++;

  //Key if
  if(slideIndex > keySlide.length){
    slideIndex = 1;
  }

  //Bengan if
  if(slideIndex > benganSlide.length){
    slideIndex = 1;
  }

//Dots

  for(let i = 0; i < dotFirst.length; i++) {
    dotFirst[i].className = dotFirst[i].className.replace(' active', '');
  }
  for(let i = 0; i < dotSecond.length; i++) {
    dotSecond[i].className = dotSecond[i].className.replace(' active', '');
  }

  /*-----------------*/
  keySlide[slideIndex - 1].style.display = 'block';
  benganSlide[slideIndex - 1].style.display = 'block';

  /*-----------------*/
  dotFirst[slideIndex -1].className += ' active';
  dotSecond[slideIndex -1].className += ' active';

  //Duration
  setTimeout(slideShow , 2000);



};
slideShow();






