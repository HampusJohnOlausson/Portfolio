let hamburger = document.querySelector('.hamburger');
let menu = document.querySelector('.header-nav');
let nav = document.querySelector('.nav-links');
let li = document.querySelector('.nav-links li');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('li');
    menu.classList.toggle('open');
    nav.classList.toggle('open');
    //li.classList.toggle('open');
  });



