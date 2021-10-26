const swiper = new Swiper('.best-seller__slider', {
  // Optional parameters
  direction: 'horizontal',
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,


  // Navigation arrows
  navigation: {
    nextEl: '.best-seller__btn--next',
    prevEl: '.best-seller__btn--prev',
  },


});