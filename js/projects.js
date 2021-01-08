
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
* @type {HTMLDivElement}
*/
const slideTwo = document.getElementsByClassName('slideTwo');

/**
* @type {HTMLSpanElement}
*/
const dotFirst = document.getElementsByClassName('first');
/**
* @type {HTMLSpanElement}
*/
const dotSecond = document.getElementsByClassName('second');
  

 //Project-Loop
 for(let i = 0; i < slideOne.length; i++){
  slideOne[i].style.display = 'none';
 }
  //FindKeyProject-Loop
  for(let i = 0; i < slideTwo.length; i++){
    slideTwo[i].style.display = 'none';
  }

  slideIndex++;

  if(slideIndex > slideOne.length){
    slideIndex = 1;
   }

  if(slideIndex > slideTwo.length){
    slideIndex = 1;
  }

  //Dots-Loops

  for(let i = 0; i < dotFirst.length; i++) {
    dotFirst[i].className = dotFirst[i].className.replace(' active', '');
  }
   for(let i = 0; i < dotSecond.length; i++) {
     dotSecond[i].className = dotSecond[i].className.replace(' active', '');
   }

  slideOne[slideIndex - 1].style.display = 'block';
  slideTwo[slideIndex - 1].style.display = 'block';

  dotFirst[slideIndex -1].className += ' active';
  dotSecond[slideIndex -1].className += ' active';

  setTimeout(slideShow , 3000);
};




