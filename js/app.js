/*-----Nav-Meny & Hamburger Meny-----*/
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


/*-------Image slider-------*/

let i = 0; //Starting point
let images = [];
let time = 1500; //Duration

/*---Key game----*/

/*---Image list----*/

images[0] = 'findKey.jpg';
images[1] = 'findKey2.jpg';
images[2] = 'findKey3.jpg';
images[3] = 'findKey4.jpg';

/*--Function */

function changeImage(){
  document.slideOne.src = images[i];

  if(i <images.length - 1){
    i++;
  } else {
    i = 0;
  }

  setTimeout('changeImage()', time);
}
 window.onload = changeImage;


 /*----Bengans Resor */
/*---Image list----*/

/*

imagesBengan[0] = 'bengan.jpg';
imagesBengan[1] = 'bengan2.jpg';


function changeImage(){
  document.slideTwo.src = imagesBengan[i];

  if(i <imagesBengan.length - 1){
    i++;
  } else {
    i = 0;
  }

  setTimeout('changeImage()', time);
}
 window.onload = changeImage;
 */