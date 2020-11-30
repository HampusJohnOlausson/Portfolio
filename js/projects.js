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
//const benganSlide = document.getElementsByClassName('slideBengan');
/**
* @type {HTMLSpanElement}
*/
const dotFirst = document.getElementsByClassName('first');
/**
* @type {HTMLSpanElement}
*/
//const dotSecond = document.getElementsByClassName('second');
  
  //FindKeyProject-Loop
  for(let i = 0; i < keySlide.length; i++){
      keySlide[i].style.display = 'none';
  }

  //BenganProject-Loop
  // for(let i = 0; i < benganSlide.length; i++){
  //   benganSlide[i].style.display = 'none';
  // }

  slideIndex++;

  if(slideIndex > keySlide.length){
    slideIndex = 1;
  }

  // if(slideIndex > benganSlide.length){
  //   slideIndex = 1;
  // }

  //Dots-Loops

  for(let i = 0; i < dotFirst.length; i++) {
    dotFirst[i].className = dotFirst[i].className.replace(' active', '');
  }
  // for(let i = 0; i < dotSecond.length; i++) {
  //   dotSecond[i].className = dotSecond[i].className.replace(' active', '');
  // }


  keySlide[slideIndex - 1].style.display = 'block';
  // benganSlide[slideIndex - 1].style.display = 'block';

  dotFirst[slideIndex -1].className += ' active';
  // dotSecond[slideIndex -1].className += ' active';

  setTimeout(slideShow , 2700);
};

/*----Modal Pop-Up----*/
const modal = () => {

  const popUp = document.querySelector('.readMore');
  const modalContainer = document.querySelector('.modal-container');
  const exit = document.querySelector('.fa-times-circle');

  popUp.addEventListener('click', () => {

    modalContainer.style.transform = 'scale(1)';
  })

  exit.addEventListener('click', () => {

    modalContainer.style.transform = 'scale(0)';
  })
}

