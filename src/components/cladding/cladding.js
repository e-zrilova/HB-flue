const asideList = document.querySelector('.js-sidebar-menu');
if (asideList) {
  const asideItem_1 = document.querySelectorAll('.sidebar-menu__item-1');

  if (asideItem_1) {
    asideItem_1.forEach(item => {
      item.addEventListener('click', () => {
        item.classList.add('active');

      })

    })
  }
  const asideItem_2 = document.querySelectorAll('.sidebar-menu__item-2');
  if (asideItem_2) {
    asideItem_2.forEach(item => {
      item.addEventListener('click', () => {
        item.classList.add('active');

      })

    })
  }

  const asideItem_3 = document.querySelectorAll('.sidebar-menu__item-3');
  if (asideItem_3) {
    asideItem_3.forEach(item => {
      item.addEventListener('click', () => {
        item.classList.add('active');
      })

    })
  }
}
