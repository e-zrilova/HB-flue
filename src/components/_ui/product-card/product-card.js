//заготовка для слайдера, где добавить в корзину
const cardCounter = document.querySelector('.js-header__shopping-cart-count');

const updateCard = () => {
  if (cardCounter) {
    const count = parseInt(cardCounter.textContent);

    cardCounter.textContent = count + 1
  }
}


if (catalogItems) {
  catalogItems.forEach(item => {
    item.addEventListener('click', () => {
      updateCard();
      alert(`Товар с id ${item.getAttribute('data-id')} в корзину`)
    })
  })
}
