const cardCounter = document.querySelector('.js-header__shopping-cart-count');
const itemCart = document.querySelectorAll('.product-card__card-btn');
const popupCount = document.querySelector('.js-popup-count')
const popupCountText = document.querySelector('.js-popup-count-text')
const popupBtnClose = document.querySelector('.js-popup-count__btn-close')
console.log(itemCart)
const updateCard = () => {
  if (cardCounter) {
    const count = parseInt(cardCounter.textContent, 10);

    cardCounter.textContent = count + 1;
  }
};

if (itemCart) {
  itemCart.forEach((item) => {
    item.addEventListener('click', () => {
      updateCard();
      popupCount.classList.add('active')
      popupCountText.textContent = `Товар с id ${item.getAttribute('data-id')} добавлен в корзину`
      document.body.classList.add('my-body-noscroll-class')
    });
  });
}
if (popupBtnClose) {
  popupBtnClose.addEventListener('click', () => {
    popupCount.classList.remove('active')
    document.body.classList.remove('my-body-noscroll-class')
  })
}
