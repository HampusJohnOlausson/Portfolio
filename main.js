window.addEventListener('load', () => {
  navToggle();
  smoothScroll();
});


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
  
  

