import View from './View';

class PopupView extends View {
  _parentElement = document.querySelector('.popup');
  _navigationList = document.querySelector('.navigation__list');

  constructor() {
    super();
    this._addShowHidePopup();
  }

  _togglePopup(e) {
    const click = e.target.closest('.navigation__connect');
    if (!click) return;
    this._parentElement.classList.toggle('active');
  }

  _addShowHidePopup() {
    this._navigationList.addEventListener(
      'click',
      this._togglePopup.bind(this)
    );
  }

  _generateMarkup() {
    return `
      <ul class="popup__list">
        ${this._data.map(links => this._generatePopupLinks(links)).join('')}
      </ul>
    `;
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
