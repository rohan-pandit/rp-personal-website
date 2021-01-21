$(document).ready(function () {

  window.addEventListener('load', function(){
  new Glider(document.querySelector('.glider'), {
      slidesToShow: 1,
      dots: '#dots',
      draggable: true,
      arrows: {
        prev: '.glider-prev',
        next: '.glider-next'
      }
  })
});


$('#carouselExampleControls').on('slid.bs.carousel', function () {
    $('.modal').scrollTop(0);
});
var particle;

 window.onload = function() {
   		particle = Particles.init({
     		 selector: '.background', 
         connectParticles: 'true', 
         responsive: [
         {
            breakpoint: 768,
            options: {
              maxParticles: 50,
              connectParticles: true
            }
         }, 
         {
            breakpoint: 425,
            options: {
              maxParticles: 25,
              connectParticles: true
            }
          }, 
          {
            breakpoint: 320,
            options: {
              maxParticles: 25,
              connectParticles: true

            }
          }
        ]
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

//window.setTimeout(function() {
       $('body').toggleClass("light-mode dark-mode");
      $('.navbar').toggleClass('bg-light bg-dark');
      $('.navbar').toggleClass('navbar-light navbar-dark');
      $('footer').toggleClass('bg-light bg-dark');
       $('footer').toggleClass('navbar-light navbar-dark');

    //}, 250);
    
      if($('body.light-mode').length > 0){
        particle = "";

        particle = Particles.init({
         selector: '.background', 
         connectParticles: 'true', 
         color: '#000000',
        responsive: [
         {
            breakpoint: 768,
            options: {
              maxParticles: 50,
              connectParticles: true
            }
         }, 
         {
            breakpoint: 425,
            options: {
              maxParticles: 25,
              connectParticles: true
            }
          }, 
          {
            breakpoint: 320,
            options: {
              maxParticles: 25,
              connectParticles: true

            }
          }
        ]
      }); 
 
    
      } else {
          particle = "";

          particle = Particles.init({
           selector: '.background', 
           connectParticles: 'true', 
           color: '#FFFFFF',
           responsive: [
         {
            breakpoint: 768,
            options: {
              maxParticles: 50,
              connectParticles: true
            }
         }, 
         {
            breakpoint: 425,
            options: {
              maxParticles: 25,
              connectParticles: true
            }
          }, 
          {
            breakpoint: 320,
            options: {
              maxParticles: 25,
              connectParticles: true

            }
          }
        ]
      }); 
      }

  });
});