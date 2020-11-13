
/*----------Loader----------*/

/**
 * @type {HTMLDivElement}
 */
let spinnerWrapper = document.querySelector('.spinner-wrapper');

//Spinning loader that appears when the website is loading
window.addEventListener('load', function () {

    spinnerWrapper.parentElement.removeChild(spinnerWrapper);
});

/*-------------Hamburger Menu-------------*/
/**
 * Function for hamburger menu.
 * Appears at 1150px and lower. 
 * When clicked hamburger toggle to Nav-menu.
 * When clicked on any link in the menu hamburger toggles back to original state.
 */
const navToggle = () => {

/**
 * @type {HTMLDivElement}
 */
const hamburger = document.querySelector(".hamburger");
/**
 * @type {HTMLNavElement}
 */
const navbar = document.querySelector(".header-nav");
/**
 * @type {HTMLUListElement}
 */
const navLinks = document.querySelector(".nav-links");
/**
 * @type {HTMLLinkElement}
 */
const links = document.querySelectorAll(".nav-links li");

//Hamburger toggle
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  navbar.classList.toggle("open");

  links.forEach((link) => {
    link.classList.toggle("open");
  });
  
});

//Nav-links Toggle
navLinks.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  navbar.classList.toggle("open");

  links.forEach((link) => {
    link.classList.toggle("open");
  });
  
});
}
navToggle();


/*-----------Smooth Scroll-----------*/

/**
 * Function for smooth scrolling on page.
 */
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


/*--------------Image Slider------------*/

let slideIndex = 0;

/**
 * Function for image-slider in each project section.
 */
const slideShow = () => {

/**
* @type {HTMLDivElement}
*/
const keySlide = document.getElementsByClassName('slideKey');
/**
 * @type {HTMLDivElement}
 */
const benganSlide = document.getElementsByClassName('slideBengan');
/**
* @type {HTMLSpanElement}
*/
const dotFirst = document.getElementsByClassName('first');
/**
* @type {HTMLSpanElement}
*/
const dotSecond = document.getElementsByClassName('second');
  
  //FindKeyProject-Loop
  for(let i = 0; i < keySlide.length; i++){
      keySlide[i].style.display = 'none';
  }

  //BenganProject-Loop
  for(let i = 0; i < benganSlide.length; i++){
    benganSlide[i].style.display = 'none';
  }

  slideIndex++;

  if(slideIndex > keySlide.length){
    slideIndex = 1;
  }

  if(slideIndex > benganSlide.length){
    slideIndex = 1;
  }

  //Dots-Loops

  for(let i = 0; i < dotFirst.length; i++) {
    dotFirst[i].className = dotFirst[i].className.replace(' active', '');
  }
  for(let i = 0; i < dotSecond.length; i++) {
    dotSecond[i].className = dotSecond[i].className.replace(' active', '');
  }


  keySlide[slideIndex - 1].style.display = 'block';
  benganSlide[slideIndex - 1].style.display = 'block';

  dotFirst[slideIndex -1].className += ' active';
  dotSecond[slideIndex -1].className += ' active';

  setTimeout(slideShow , 2700);

};
slideShow();






