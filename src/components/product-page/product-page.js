import Swiper, {
  Thumbs,
  Pagination,
} from 'swiper';
import { Fancybox } from '@fancyapps/ui';

Swiper.use([Thumbs, Pagination]);

const sliderThumbs = new Swiper('.js-slider__thumbs .js-swiper-container', {
  direction: 'vertical',
  slidesPerView: 5,
  spaceBetween: 8,
  breakpoints: {
    320: {
      slidesPerView: 2,
    },
    480: {
      slidesPerView: 3,
    },
    640: {
      slidesPerView: 4,
    },
    1248: {
      slidesPerView: 5,
    },
  },
});

new Swiper('.js-slider__images .js-swiper-container', {
  slidesPerView: 1,
  spaceBetween: 8,
  mousewheel: true,
  grabCursor: true,
  direction: 'vertical',
  thumbs: {
    swiper: sliderThumbs,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
      },
    },

  },

});
Fancybox.bind('[data-fancybox]', {
  Image: {
    zoom: false,
    baseScale: 1.5,
  },
});

const buttonCountPlus = document.querySelector('.js-buttonCountPlus');
const buttonCountMinus = document.querySelector('.js-buttonCountMinus');
const count = document.querySelector('.js-buttonCountNumber');
let number = 1;
if (buttonCountPlus) {
  buttonCountPlus.addEventListener('click', () => {
    if (number <= 999) {
      number += 1;
      count.textContent = number;
    }
  });
}

if (buttonCountMinus) {
  buttonCountMinus.addEventListener('click', () => {
    if (number >= 2) {
      number -= 1;
      count.textContent = number;
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelector('.js-tabs');
  const tabsBtn = document.querySelectorAll('.js-tabs__btn');
  const tabsContent = document.querySelectorAll('.tabs__content');

  if (tabs) {
    const tabsHandler = (path) => {
      tabsContent.forEach((el) => { el.classList.remove('tabs__content--active'); });
      document.querySelector(`[data-tabs-target="${path}"]`).classList.add('tabs__content--active');
    };
    tabs.addEventListener('click', (e) => {
      if (e.target.classList.contains('tabs__btn')) {
        const { tabsPath } = e.target.dataset;
        tabsBtn.forEach((el) => { el.classList.remove('tabs__btn--active'); });
        document.querySelector(`[data-tabs-path="${tabsPath}"]`).classList.add('tabs__btn--active');
        tabsHandler(tabsPath);
      }

      if (e.target.classList.contains('tabs__arrow--prev')) {
        const activeBtn = document.querySelector('.tabs__btn--active');
        const activeParent = activeBtn.closest('.tabs__item');
        const previousParent = activeParent.previousElementSibling;

        if (previousParent) {
          const prevActive = previousParent.querySelector('.tabs__btn');
          tabsBtn.forEach((el) => { el.classList.remove('tabs__btn--active'); });
          prevActive.classList.add('tabs__btn--active');

          const path = prevActive.dataset.tabsPath;
          tabsHandler(path);
        }
      }

      if (e.target.classList.contains('tabs__arrow--next')) {
        const activeBtn = document.querySelector('.tabs__btn--active');
        const activeParent = activeBtn.closest('.tabs__item');
        const nextParent = activeParent.nextElementSibling;

        if (nextParent) {
          const nextActive = nextParent.querySelector('.tabs__btn');
          tabsBtn.forEach((el) => { el.classList.remove('tabs__btn--active'); });
          nextActive.classList.add('tabs__btn--active');

          const path = nextActive.dataset.tabsPath;
          tabsHandler(path);
        }
      }
    });
  }
});
const realFileBtn = document.querySelector('.js-real-file');
const customBtn = document.querySelector('.js-custom-button');
const customTxt = document.querySelector('.custom-text');
const lkProfileAvatar = document.querySelector('#file');

customBtn?.addEventListener('click', () => {
  realFileBtn.click();
});

realFileBtn?.addEventListener('change', () => {
  if (realFileBtn.value) {
    customTxt.textContent = realFileBtn.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
  }
});
lkProfileAvatar?.addEventListener('change', (e) => {
  let img = e.target.files[0].size / 1024 / 1024;
  if (img > 5) {
    customTxt.innerHTML = 'Ошибка: слишком большая фотография!';
    customTxt.style.color = 'red';
  } else {
    img = e.target.files[0];
    const imageURL = URL.createObjectURL(img);
    document.querySelector('.img').style.backgroundImage = ` url("${imageURL}")`;
    customBtn.classList.add('imgLoad');
    customTxt.style.color = '#763f97';
  }
});

const tooltipProduct = document.querySelector('.tooltip');
const btnHeart = document.querySelector('.js-product-btn-heart');
const btnBalance = document.querySelector('.js-product-btn-balance');
const tooltipCount = document.querySelector('.tooltip-count');
if (btnHeart) {
  btnHeart.addEventListener('click', () => {
    btnHeart.classList.toggle('active');
  });
}
if (btnBalance) {
  btnBalance.addEventListener('click', () => {
    btnBalance.classList.toggle('active');
    tooltipProduct.classList.toggle('active');
    tooltipCount.classList.toggle('active');
  });
}
