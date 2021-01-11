
/*--------------Image Slider------------*/

let slideIndex = 0;

/**
 * Function for image-slider in each project section.
 */
const slideShow = () => {

/**
 * @type {HTMLDivElement}
 */
const slideOne = document.getElementsByClassName('slideOne');

/**
* @type {HTMLSpanElement}
*/
const dotFirst = document.getElementsByClassName('first');

 //Project-Loop
 for(let i = 0; i < slideOne.length; i++){
  slideOne[i].style.display = 'none';
 }

  slideIndex++;

  if(slideIndex > slideOne.length){
    slideIndex = 1;
   }

  //Dots-Loops

  for(let i = 0; i < dotFirst.length; i++) {
    dotFirst[i].className = dotFirst[i].className.replace(' active', '');
  }

  slideOne[slideIndex - 1].style.display = 'block';

  dotFirst[slideIndex -1].className += ' active';
  

  setTimeout(slideShow , 3000);
};




