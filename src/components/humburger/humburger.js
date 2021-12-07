(function () {
  const menuToggle = document.querySelector('.js-menu-toggle')
  const menuContent = document.querySelector('.js-menu-content')
  console.log(menuContent);

  if (menuToggle && menuContent) {
    function openMenu() {
      menuToggle.classList.add('active')
      menuContent.classList.add('active')
      document.body.classList.add('fixed')
    }

    function closeMenu() {
      menuToggle.classList.remove('active')
      menuContent.classList.remove('active')
      document.body.classList.remove('fixed')
    }

    function toggleMenu() {
      if (menuToggle.classList.contains('active')) {
        closeMenu()
      } else {
        openMenu()
      }
    }
  }
  menuToggle.addEventListener('click', toggleMenu)
}
)

  ();
