import noUiSlider from 'nouislider';
import wNumb from 'wnumb';

const asideList = document.querySelector('.js-sidebar-menu');
if (asideList) {
  const asideItem_1 = document.querySelectorAll('.sidebar-menu__item-1');

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
  const asideItem_2 = document.querySelectorAll('.sidebar-menu__item-2');
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

  const asideItem_3 = document.querySelectorAll('.sidebar-menu__item-3');
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
}

const rangeSlider = document.getElementById('range-slider');

if (rangeSlider) {
  noUiSlider.create(rangeSlider, {
    start: [500, 999999],
    connect: true,
    step: 1,
    range: {
      'min': [500],
      'max': [999999]
    },
    format: wNumb({
      decimals: 0,
      thousand: ' '
    })
  });

  const input0 = document.getElementById('input-0');
  const input1 = document.getElementById('input-1');
  const inputs = [input0, input1];

  rangeSlider.noUiSlider.on('update', function (values, handle) {
    inputs[handle].value = values[handle];
  });

  const setRangeSlider = (i, value) => {
    let arr = [null, null];
    arr[i] = value;

    rangeSlider.noUiSlider.set(arr);
  };
  inputs.forEach((el, index) => {
    el.addEventListener('change', (e) => {
      setRangeSlider(index, e.currentTarget.value);
    });
  });
}
