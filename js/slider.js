const swiper = new Swiper('.hero__slider', {

   autoplay: {
      delay: 1000,
      stopOnLastSlide: false,
      disableOnInteraction: false,
   },

   pagination: {
      el: '.hero__slider--pagination',
      clickable: true,
   },

   grabCursor: true,
   slidesPerView: 1.5,
   //initialSlide: 1,
   watchOverflow: true,
   spaceBetween: 20,
   centeredSlides: true,
   loop: true,
   speed: 800,

   preloadImages: false,
   lazy: {
      loadOnTransitionStart: false,
      loadPrevNext: false,
   },

   watchSlidesProgres: true,
   watchSlidesVisibility: true,

   breakpoints: {
      768: {
         slidesPerView: 2,
         centeredSlides: false,
      },
      1024: {
         slidesPerView: 2,
         centeredSlides: false,
      },
      1200: {
         slidesPerView: 2.5,
         centeredSlides: false,
      },
      1350: {
         slidesPerView: 3,
         centeredSlides: false,
      },
      1550: {
         slidesPerView: 3.5,
         centeredSlides: false,
      },
   },

});