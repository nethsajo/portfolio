import { renderIconDefinitionToSVGElement } from '@ant-design/icons-svg/es/helpers';

export default class View {
  _data;

  render(data) {
    this._data = data;
    const markup = this._generateMarkup();
    // this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  _clear() {
    this._parentElement.innerHTML = '';
  }

  renderSVG(icon, className = '') {
    return renderIconDefinitionToSVGElement(icon, {
      extraSVGAttrs: {
        fill: 'currentColor',
        class: className,
      },
    });
  }
}
