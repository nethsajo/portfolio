import View from './View';

class HeroView extends View {
  _parentElement = document.querySelector('.main');

  constructor() {
    super();
    this._addHandlerScrollCTA();
  }

  _addHandlerScrollCTA() {
    this._parentElement.addEventListener('click', function (e) {
      const btnCTA = e.target.closest('.btn__cta');

      if (btnCTA) {
        e.preventDefault();
        const id = btnCTA.getAttribute('href');
        document.querySelector(id).scrollIntoView({
          behavior: 'smooth',
        });
      }
    });
  }

  _generateMarkup() {
    return `
      <section class="hero">
        <div class="hero__content wrapper">
          <div class="hero__textbox u-mb-md">
            <span class="hero__greet u-mb-xxs" data-aos="fade-up" data-aos-delay="100">👋 ${
              this._data.greetings
            }</span>
            <h1 class="heading__primary u-mb-xs u-o-hidden" data-aos="fade-up" data-aos-delay="200">${
              this._data.name
            }</h1>
            <h2 class="hero__secondary u-mb-sm" data-aos="fade-up" data-aos-delay="400">
              ${this._data.position}
            </h2>
            <p class="hero__message" data-aos="fade-up" data-aos-delay="600">
              ${this._data.description}
            </p>
          </div>
          <div class="hero__buttons" data-aos="fade-up" data-aos-delay="700">
            <a href="#contact" class="btn btn--primary btn--sm btn__cta">Let's talk</a>
            <a href="#" class="btn btn--outline btn--sm">Resume</a>
          </div>
          <div class="hero__floating">
            ${this._data.floatingLinks
              .map((links, i) => this._generateFloatingIconsMarkup(links, i))
              .join('')}
          </div>
        </div>
      </section>
    `;
  }

  _generateFloatingIconsMarkup(links, i) {
    const { icon, link, id } = links;
    const svg = this.renderSVG(icon, 'floating__icon');

    return `
      <a
        href="${link}"
        aria-label="${id}"
        target="_blank"
        class="floating floating__item--${i + 1}" 
        data-aos="zoom-in-up" 
        data-aos-delay="${(i + 1) * 500}"
      >
        <span class="floating__item">
          ${svg}
        </span>
      </a>
    `;
  }
}

export default new HeroView();
