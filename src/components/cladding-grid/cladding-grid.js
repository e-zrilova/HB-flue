import Choices from 'choices.js';

const multiDefault = () => {
  const elements = document.querySelectorAll('.js-multi-default');
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
function togglePanel() {
  filterPanel.classList.toggle('active')
  document.body.classList.toggle('fixed')
}
if (filterBtn && filterPanel) {
  filterBtn.addEventListener('click', () => {
    togglePanel()
  })
}
if (filterBtnExit) {
  filterBtnExit.addEventListener('click', () => {
    togglePanel()
  })
}
