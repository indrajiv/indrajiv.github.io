$(document).ready(function () {
    $('.img-container').slick({
        dots: true,
        infinite: true,
        autoplaySpeed: 5000,
        fade: true,
        cssEase: 'linear',
        autoplay:true,
        arrows:false
      });

      $("#lightgallery").lightGallery({
        thumbnail: true,
        selector: 'a',
      }
         ); 
});
