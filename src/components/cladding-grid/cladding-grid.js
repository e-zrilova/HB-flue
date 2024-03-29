import Choices from 'choices.js';

const multiDefault = () => {
  const elements = document.querySelectorAll('.js-multi-default');
  elements.forEach((el) => {
    new Choices(el, {
      searchEnabled: false,
    });
  });
};

multiDefault();

const filterBtn = document.querySelector('.js-cladding-filter-mobile_btn');
const filterPanel = document.querySelector('.js-cladding-grid');
const filterBtnExit = document.querySelector('.js-cladding__mobile-exit');
const fixedFooter = document.querySelector('.js-footer')
function togglePanel() {
  filterPanel.classList.toggle('active');
  document.body.classList.toggle('fixed');
  fixedFooter.classList.toggle('footer-fixed');
}
if (filterBtn && filterPanel) {
  filterBtn.addEventListener('click', () => {
    togglePanel();
  });
}
if (filterBtnExit) {
  filterBtnExit.addEventListener('click', () => {
    togglePanel();
  });
}
