import View from './View';

class HeroView extends View {
  _parentElement = document.querySelector('.main');

  constructor() {
    super();
  }

  _generateMarkup() {
    console.log(this._data);

    return `
      <section class="hero">
        <div class="hero__wrapper">
          <div class="hero__textbox u-mb-md">
            <span class="hero__greet u-mb-xs">👋 ${this._data.greetings}</span>
            <h1 class="heading__primary u-mb-sm">${this._data.name}</h1>
            <h2 class="heading__secondary u-mb-sm u-fw-light">
              ${this._data.position}
            </h2>
            <p class="hero__message">
              ${this._data.description}
            </p>
          </div>
          <div class="hero__buttons">
            <a href="#" class="btn btn--outline btn--sm">Contact me</a>
            <a href="#" class="btn btn--outline btn--sm">Resume</a>
          </div>
        </div>
        ${this._data.floatingLinks
          .map((links, i) => this._generateFloatingIconsMarkup(links, i))
          .join('')}
      </section>
    `;
  }

  _generateFloatingIconsMarkup(links, i) {
    const { icon, link } = links;
    const svg = this.renderSVG(icon, 'floating__icon');

    return `
      <a
        href="${link}"
        aria-label="github"
        target="_blank"
        class="floating floating__item--${i + 1}"
      >
        <span class="floating__item">
          ${svg}
        </span>
      </a>
    `;
  }
}

export default new HeroView();
