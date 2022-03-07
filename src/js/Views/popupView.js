import View from './View';
import { renderIconDefinitionToSVGElement } from '@ant-design/icons-svg/es/helpers';

class PopupView extends View {
  _parentElement = document.querySelector('.popup');

  _generateMarkup() {
    return `
      <ul class="popup__list">
        ${this._data.map(this._generatePopupLinks).join('')}
      </ul>
    `;
  }

  _generatePopupLinks(links) {
    const { title, link, icon } = links;
    const svg = renderIconDefinitionToSVGElement(icon, {
      extraSVGAttrs: {
        width: '24px',
        height: '24px',
        fill: 'currentColor',
        class: 'popup__icon',
      },
    });

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
