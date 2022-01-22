import noUiSlider from 'nouislider';
import wNumb from 'wnumb';

const rangeSlider = document.querySelector('.js-range-slider');
if (rangeSlider) {
  noUiSlider.create(rangeSlider, {
    start: [500, 999999],
    connect: true,
    step: 1,
    range: {
      min: [500],
      max: [999999],
    },
    format: wNumb({
      decimals: 0,
      thousand: ' ',
    }),
  });
  const input0 = document.querySelector('.js-input-0');
  const input1 = document.querySelector('.js-input-1');
  const inputs = [input0, input1];
  rangeSlider.noUiSlider.on('update', (values, handle) => {
    inputs[handle].value = values[handle];
  });

  const setRangeSlider = (i, value) => {
    const arr = [];
    arr[i] = value;
    rangeSlider.noUiSlider.set(arr);
  };
  inputs.forEach((el, index) => {
    el.addEventListener('change', (e) => {
      setRangeSlider(index, e.currentTarget.value);
    });
  });
}
