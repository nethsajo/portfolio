class MenuView {
  _btnMenu = document.querySelector('.btn__menu');
  _mobileMenu = document.querySelector('.navigation__mobile-menu');
  _navigationList = document.querySelector('.navigation__list');
  _navigationMobileList = document.querySelector('.navigation__mobile-list');

  constructor() {
    this._addHandlerShowMenu();
    this._addHandlerScrollIntoView();
  }

  toggleMenu() {
    this._btnMenu.classList.toggle('active');
    this._mobileMenu.classList.toggle('active');
  }

  _addHandlerShowMenu() {
    this._btnMenu.addEventListener('click', this.toggleMenu.bind(this));
  }

  scrollIntoSection(e) {
    e.preventDefault();

    const link = e.target.classList.contains('navigation__link');
    const mobileLink = e.target.classList.contains('navigation__mobile-link');

    if (link || mobileLink) {
      const id = e.target.getAttribute('href');
      document.querySelector(id).scrollIntoView({
        behavior: 'smooth',
      });

      if (this._mobileMenu.classList.contains('active')) this.toggleMenu();
    }
  }

  _addHandlerScrollIntoView() {
    [this._navigationList, this._navigationMobileList].forEach(list =>
      list.addEventListener('click', this.scrollIntoSection.bind(this))
    );
  }
}

export default new MenuView();
