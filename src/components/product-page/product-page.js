import Swiper, {
  Thumbs,
  Pagination
} from 'swiper';
import { Fancybox } from "@fancyapps/ui";
Swiper.use([Thumbs, Pagination]);

const sliderThumbs = new Swiper('.slider__thumbs .swiper-container', {
  direction: 'vertical',
  slidesPerView: 5,
  spaceBetween: 8,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 4,
    },
    1248: {
      slidesPerView: 5,
    }
  }
});

const sliderImages = new Swiper('.slider__images .swiper-container', {
  slidesPerView: 1,
  spaceBetween: 8,
  mousewheel: true,
  grabCursor: true,
  thumbs: {
    swiper: sliderThumbs
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
    },

  }

});
Fancybox.bind("[data-fancybox]", {
  Image: {
    zoom: false,
    baseScale: 1.5
  }
});

const buttonCountPlus = document.getElementById("buttonCountPlus");
const buttonCountMinus = document.getElementById("buttonCountMinus");
const count = document.getElementById("buttonCountNumber");
const count2 = document.getElementById("num");
let number = 1;
if (buttonCountPlus) {
  buttonCountPlus.addEventListener('click', () => {
    if (number <= 999) {
      number++;
      count.innerHTML = number;
    }
  });
}

if (buttonCountMinus) {
  buttonCountMinus.addEventListener('click', () => {
    if (number >= 2) {
      number--;
      count.innerHTML = number;
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelector('.tabs');
  const tabsBtn = document.querySelectorAll('.tabs__btn');
  const tabsContent = document.querySelectorAll('.tabs__content');

  if (tabs) {
    tabs.addEventListener('click', (e) => {
      if (e.target.classList.contains('tabs__btn')) {
        const tabsPath = e.target.dataset.tabsPath;
        tabsBtn.forEach(el => { el.classList.remove('tabs__btn--active') });
        document.querySelector(`[data-tabs-path="${tabsPath}"]`).classList.add('tabs__btn--active');
        tabsHandler(tabsPath);
      }

      if (e.target.classList.contains('tabs__arrow--prev')) {
        let activeBtn = document.querySelector('.tabs__btn--active');
        let activeParent = activeBtn.closest('.tabs__item');
        let previousParent = activeParent.previousElementSibling;

        if (previousParent) {
          let prevActive = previousParent.querySelector('.tabs__btn')
          tabsBtn.forEach(el => { el.classList.remove('tabs__btn--active') });
          prevActive.classList.add('tabs__btn--active');

          let path = prevActive.dataset.tabsPath;
          tabsHandler(path);
        }
      }

      if (e.target.classList.contains('tabs__arrow--next')) {
        let activeBtn = document.querySelector('.tabs__btn--active');
        let activeParent = activeBtn.closest('.tabs__item');
        let nextParent = activeParent.nextElementSibling;

        if (nextParent) {
          let nextActive = nextParent.querySelector('.tabs__btn');
          tabsBtn.forEach(el => { el.classList.remove('tabs__btn--active') });
          nextActive.classList.add('tabs__btn--active');

          let path = nextActive.dataset.tabsPath;
          tabsHandler(path);
        }
      }
    });
  }

  const tabsHandler = (path) => {
    tabsContent.forEach(el => { el.classList.remove('tabs__content--active') });
    document.querySelector(`[data-tabs-target="${path}"]`).classList.add('tabs__content--active');
  };
});
const realFileBtn = document.querySelector(".real-file");
const customBtn = document.querySelector(".custom-button");
const customTxt = document.querySelector(".custom-text");
const lkProfileAvatar = document.querySelector("#file");

customBtn?.addEventListener("click", function () {
  realFileBtn.click();
});

realFileBtn?.addEventListener("change", function () {
  if (realFileBtn.value) {
    customTxt.textContent = realFileBtn.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
  }
});
lkProfileAvatar?.addEventListener("change", (e) => {
  const img = e.target.files[0].size / 1024 / 1024;
  if (img > 5) {
    customTxt.innerHTML = "Ошибка: слишком большая фотография!";
    customTxt.style.color = "red";
  } else {
    const img = e.target.files[0];
    const imageURL = URL.createObjectURL(img);
    document.querySelector(".img").style.backgroundImage = ` url("${imageURL}")`;
    customBtn.classList.add("imgLoad");
    customTxt.style.color = "#763f97";
  }
});

const tooltipProduct = document.querySelector('.tooltip')
const btnHeart = document.querySelector('.js-product-btn-heart')
const btnBalance = document.querySelector('.js-product-btn-balance')
const tooltipCount = document.querySelector('.tooltip-count')
if (btnHeart) {
  btnHeart.addEventListener('click', () => {
    btnHeart.classList.toggle('active')
  })
}
if (btnBalance) {
  btnBalance.addEventListener('click', () => {
    btnBalance.classList.toggle('active')
    tooltipProduct.classList.toggle('active')
    tooltipCount.classList.toggle('active')
  })
}

