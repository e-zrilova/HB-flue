import Choices from 'choices.js';

const multiDefault = () => {
  const elements = document.querySelectorAll('.multi-default');
  elements.forEach(el => {
    const choices = new Choices(el, {
      searchEnabled: false
    });
  });

}

multiDefault();

const filterBtn = document.querySelector('.js-cladding-filter-mobile_btn')
const filterPanel = document.querySelector('.js-cladding-grid')
const filterBtnExit = document.querySelector('.js-cladding__mobile-exit')
if (filterBtn && filterPanel) {
  filterBtn.addEventListener('click', () => {
    filterPanel.classList.toggle('active')
    document.body.classList.toggle('fixed')
  })
}
if (filterBtnExit) {
  filterBtnExit.addEventListener('click', () => {
    filterPanel.classList.toggle('active')
    document.body.classList.toggle('fixed')
  })
}
