const asideMenu = document.querySelector('.js-multilevel-menu');
const asideList = document.querySelector('.js-multilevel-menu .js-multilevel-menu__list');
const btnAsideExit = document.querySelector('.js-multilevel-menu .js-multilevel-menu__mobile-exit ')
const btnAsideMobile = document.querySelector('.js-multilevel-menu .js-multilevel-menu-mobile-btn')
function toggleAsideMenu() {
  document.body.classList.toggle('fixed')
  asideMenu.classList.toggle('active');
}
if (asideList) {
  const asideItem_1 = document.querySelectorAll('.js-multilevel-menu__item-1');
  if (asideItem_1) {
    asideItem_1.forEach(item => {
      item.addEventListener('click', (e) => {
        e.stopPropagation();
        asideItem_1.forEach((asideItem) => {
          if (asideItem !== e.currentTarget) {
            asideItem.classList.remove('active')
          }
        });
        e.currentTarget.classList.toggle('active');

      })

    })
  }
  const asideItem_2 = document.querySelectorAll('.js-multilevel-menu__item-2');
  if (asideItem_2) {
    asideItem_2.forEach(item => {
      item.addEventListener('click', (e) => {
        asideItem_2.forEach((asideItem) => {
          if (asideItem !== e.currentTarget) {
            asideItem.classList.remove('active')
          }
        });
        e.stopPropagation();
        e.currentTarget.classList.toggle('active');
      })
    })
  }

  const asideItem_3 = document.querySelectorAll('.js-multilevel-menu__item-3');
  if (asideItem_3) {
    asideItem_3.forEach(item => {
      item.addEventListener('click', (e) => {
        asideItem_3.forEach((asideItem) => {
          if (asideItem !== e.currentTarget) {
            asideItem.classList.remove('active')
          }
        });
        e.stopPropagation();
        e.currentTarget.classList.toggle('active');
      })

    })
  }
  if (btnAsideMobile) {
    btnAsideMobile.addEventListener('click', (e) => {
      toggleAsideMenu();

    })
  }
  if (btnAsideExit) {
    btnAsideExit.addEventListener('click', (e) => {
      toggleAsideMenu();

    })
  }
}
