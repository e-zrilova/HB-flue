const asideMenu = document.querySelector('.js-multilevel-menu');
const asideList = document.querySelector('.js-multilevel-menu .js-multilevel-menu__list');
const btnAsideExit = document.querySelector('.js-multilevel-menu .js-multilevel-menu__mobile-exit ');
const btnAsideMobile = document.querySelector('.js-multilevel-menu-mobile-btn');
const fixedFooter = document.querySelector('.js-footer')

function toggleAsideMenu() {
  document.body.classList.toggle('fixed');
  asideMenu.classList.toggle('active');
  fixedFooter.classList.toggle('footer-fixed');
}

if (asideList) {
  const asideItemFirst = document.querySelectorAll('.js-multilevel-menu .js-multilevel-menu__item-1');
  if (asideItemFirst) {
    asideItemFirst.forEach((item) => {
      item.addEventListener('click', (e) => {
        e.stopPropagation();
        asideItemFirst.forEach((asideItem) => {
          if (asideItem !== e.currentTarget) {
            asideItem.classList.remove('active');
          }
        });
        e.currentTarget.classList.toggle('active');
      });
    });
  }
  const asideItemSecondary = document.querySelectorAll('.js-multilevel-menu .js-multilevel-menu__item-2');
  if (asideItemSecondary) {
    asideItemSecondary.forEach((item) => {
      item.addEventListener('click', (e) => {
        asideItemSecondary.forEach((asideItem) => {
          if (asideItem !== e.currentTarget) {
            asideItem.classList.remove('active');
          }
        });
        e.stopPropagation();
        e.currentTarget.classList.toggle('active');
      });
    });
  }

  const asideItemThird = document.querySelectorAll('.js-multilevel-menu .js-multilevel-menu__item-3');
  if (asideItemThird) {
    asideItemThird.forEach((item) => {
      item.addEventListener('click', (e) => {
        asideItemThird.forEach((asideItem) => {
          if (asideItem !== e.currentTarget) {
            asideItem.classList.remove('active');
          }
        });
        e.stopPropagation();
        e.currentTarget.classList.toggle('active');
      });
    });
  }
  if (btnAsideMobile) {
    btnAsideMobile.addEventListener('click', () => {
      toggleAsideMenu();
    });
  }
  if (btnAsideExit) {
    btnAsideExit.addEventListener('click', () => {
      toggleAsideMenu();
    });
  }
}
