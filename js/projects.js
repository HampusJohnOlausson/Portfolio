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

