
/*--------------Image Slider------------*/

let slideIndex = 0;

/**
 * Function for image-slider in each project section.
 */
const slideShow = () => {

/**
* @type {HTMLDivElement}
*/
const slideTwo = document.getElementsByClassName('slideTwo');
/**
 * @type {HTMLDivElement}
 */
const slideOne = document.getElementsByClassName('slideOne');
/**
* @type {HTMLSpanElement}
*/
const dotFirst = document.getElementsByClassName('first');
/**
* @type {HTMLSpanElement}
*/
const dotSecond = document.getElementsByClassName('second');
  
  //FindKeyProject-Loop
  for(let i = 0; i < slideTwo.length; i++){
    slideTwo[i].style.display = 'none';
  }

  //Project-Loop
   for(let i = 0; i < slideOne.length; i++){
    slideOne[i].style.display = 'none';
   }

  slideIndex++;

  if(slideIndex > slideTwo.length){
    slideIndex = 1;
  }

   if(slideIndex > slideOne.length){
    slideIndex = 1;
   }

  //Dots-Loops

  for(let i = 0; i < dotFirst.length; i++) {
    dotFirst[i].className = dotFirst[i].className.replace(' active', '');
  }
   for(let i = 0; i < dotSecond.length; i++) {
     dotSecond[i].className = dotSecond[i].className.replace(' active', '');
   }


  slideTwo[slideIndex - 1].style.display = 'block';
  slideOne[slideIndex - 1].style.display = 'block';

  dotFirst[slideIndex -1].className += ' active';
  dotSecond[slideIndex -1].className += ' active';

  setTimeout(slideShow , 3000);
};




