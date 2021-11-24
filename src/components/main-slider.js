import Swiper, {
  Navigation,
  Keyboard
} from 'swiper';

Swiper.use([Navigation, Keyboard]);

new Swiper('.best-seller__slider', {
  direction: 'horizontal',
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,

  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  navigation: {
    nextEl: '.best-seller__btn--next',
    prevEl: '.best-seller__btn--prev',
  },
});

new Swiper('.work__slider', {
  direction: 'horizontal',
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,


  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  navigation: {
    nextEl: '.work__slider-btn--next',
    prevEl: '.work__slider-btn--prev',
  },


});

new Swiper(".reviews__slider", {
  direction: 'horizontal',
  slidesPerView: 3,
  spaceBetween: 22,
  loop: true,
  centeredSlides: true,

  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },

  navigation: {
    nextEl: '.reviews__slider-btn--next',
    prevEl: '.reviews__slider-btn--prev',
  },
});
