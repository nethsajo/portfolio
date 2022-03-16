class MenuView {
  _btnMenu = document.querySelector('.btn__menu');
  _mobileMenu = document.querySelector('.navigation__mobile-menu');

  constructor() {
    this._addHandlerShowMenu();
  }

  toggleMenu() {
    this._btnMenu.classList.toggle('active');
    this._mobileMenu.classList.toggle('active');
  }

  _addHandlerShowMenu() {
    this._btnMenu.addEventListener('click', this.toggleMenu.bind(this));
  }
}

export default new MenuView();
