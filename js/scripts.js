// mobile-menu
function openMenu() {
   document.getElementById('mobile-menu').classList.toggle('open');
   document.getElementById('body').classList.toggle('active');
   document.getElementById('overlay').classList.toggle('open');
}

// slider
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

// show-hide
function openSectionWatched() {
   document.getElementById('showWatched').classList.toggle('open');
   document.getElementById('showButtonWatched').classList.toggle('close');
   document.getElementById('hideButtonWatched').classList.toggle('open');
   document.getElementById('rotateButtonWatched').classList.toggle('open');
}

function openSectionSale() {
   document.getElementById('showSale').classList.toggle('open');
   document.getElementById('showButtonSale').classList.toggle('close');
   document.getElementById('hideButtonSale').classList.toggle('open');
   document.getElementById('rotateButtonSale').classList.toggle('open');
}

function openSectionTopSales() {
   document.getElementById('showTopSales').classList.toggle('open');
   document.getElementById('showButtonTopSales').classList.toggle('close');
   document.getElementById('hideButtonTopSales').classList.toggle('open');
   document.getElementById('rotateButtonTopSales').classList.toggle('open');
}

function openSectionAbout() {
   document.getElementById('showAbout').classList.toggle('open');
   document.getElementById('showButtonAbout').classList.toggle('close');
   document.getElementById('hideButtonAbout').classList.toggle('open');
   document.getElementById('rotateButtonAbout').classList.toggle('open');
}

// switch
function clickSwitch() {
   document.getElementById('ru').classList.toggle('active');
   document.getElementById('ua').classList.toggle('no-active');
}

// back to top
(function () {
   'use strict';

   function trackScroll() {
      var scrolled = window.pageYOffset;
      var coords = document.documentElement.clientHeight;

      if (scrolled > coords) {
         goTopBtn.classList.add('back_to_top-show');
      }
      if (scrolled < coords) {
         goTopBtn.classList.remove('back_to_top-show');
      }
   }

   function backToTop() {
      if (window.pageYOffset > 0) {
         window.scrollBy(0, -80);
         setTimeout(backToTop, 0);
      }
   }

   var goTopBtn = document.querySelector('.back_to_top');

   window.addEventListener('scroll', trackScroll);
   goTopBtn.addEventListener('click', backToTop);
})();