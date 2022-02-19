const scroll = document.querySelector('.button-to-up')
window.addEventListener('scroll', () => {
  scroll.classList.toggle('active', window.scrollY > 500)
})
scroll.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
})
