const swiper = new Swiper('.hero__slider', {
   /*
      autoplay: {
         delay: 1000,
         stopOnLastSlide: false,
         disableOnInteraction: false,
      },
   */
   pagination: {
      el: '.hero__slider--pagination',
      clickable: true,
   },

   grabCursor: true,
   slidesPerView: 1.5,
   //initialSlide: 1,
   watchOverflow: true,
   spaceBetween: 20,
   //centeredSlides: true,
   //loop: true,

   //speed: 800,

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
         slidesPerView: 1.85,
         centeredSlides: false,
      },

      1280: {
         slidesPerView: 2.45,
         centeredSlides: false,
      },

      1366: {
         slidesPerView: 2.7,
         centeredSlides: false,
      },

      1440: {
         slidesPerView: 2.85,
         centeredSlides: false,
      },

      1900: {
         slidesPerView: 3.5,
         centeredSlides: false,
      },
   },

});