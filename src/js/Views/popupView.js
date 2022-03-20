import View from './View';

class PopupView extends View {
  _parentElement = document.querySelector('.popup__list');
  _window = document.querySelector('.popup');
  _btnPopup = document.querySelector('.navigation__connect');

  constructor() {
    super();
    this._addShowPopup();
    this._addHandlerPopup();
  }

  _togglePopup() {
    this._window.classList.toggle('active');
  }

  _addShowPopup() {
    this._btnPopup.addEventListener('click', this._togglePopup.bind(this));
  }

  _addHandlerPopup() {
    this._parentElement.addEventListener('click', function (e) {
      e.stopImmediatePropagation();
      document.querySelector('.popup').classList.toggle('active');
    });
  }

  _generateMarkup() {
    return this._data.map(links => this._generatePopupLinks(links)).join('');
  }

  _generatePopupLinks(links) {
    const { title, link, icon } = links;
    const svg = this.renderSVG(icon, 'popup__icon');

    return `
      <li class="popup__item">
        <a
          href="${link}"
          class="popup__link"
          target="_blank"
        >
          ${svg}
          <span class="popup__title">${title}</span>
        </a>
      </li>
    `;
  }
}

export default new PopupView();
