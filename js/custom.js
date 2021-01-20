$(document).ready(function () {

var particle;

 window.onload = function() {
   		particle = Particles.init({
     		 selector: '.background', connectParticles: 'true'
    		});	
  	};

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();

          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });

  $('.mode-toggle').on('click', function() {

      $('body').toggleClass("light-mode dark-mode");
      $('.navbar').toggleClass('bg-light bg-dark');
      $('.navbar').toggleClass('navbar-light navbar-dark');
      if($('body.light-mode').length > 0){
        particle = "";

        particle = Particles.init({
         selector: '.background', connectParticles: 'true', color: '#000000'
        }); 
      } else {
          particle = "";

          particle = Particles.init({
           selector: '.background', connectParticles: 'true', color: '#FFFFFF'
          }); 
      }

  });
});