import View from './View';

class AboutView extends View {
  _parentElement = document.querySelector('.main');

  _generateMarkup() {
    return `
      <section class="about">
        <div class="wrapper">
          <h2 class="heading__secondary u-c-pd u-fw-bold u-mb-lg">About.</h2>
          <div class="about__content u-mb-lg">
            <div class="about__image">
              <img
                src="${this._data.image}"
                alt="${this._data.name}"
                class="about__photo"
              />
            </div>
            <div class="about__info">
              <h2 class="about__name u-mb-xs u-t-uppercase">${
                this._data.name
              }</h2>
              <span class="about__position u-mb-sm">${
                this._data.position
              }</span>
              <p class="about__description">
                Hello! My friends call me Neth. I am a degree holder of Bachelor
                of Science in Information Technology, graduated from Lyceum of
                Alabang. My main focus are to enhance my web development skills
                and building interactive websites.
              </p>
              <p class="about__description">
                I am a passionate and pursuing web development. I have fond of
                creating beautiful and responsive layouts. I'm also interested
                in designing and photography.
              </p>
              <p class="about__description">
                Currently, I mostly work on personal projects and focuses more
                on modern web technologies. I'm always open to opportunities
                that could help myself grow.
              </p>
            </div>
          </div>
          <div class="skills">
            <h3 class="heading__normal u-t-uppercase u-t-center u-mb-xs">
              Skills
            </h3>
            <p class="skills__description u-t-center">
              Here are the technologies that I use for my projects. I
              continually learn modern web technologies.
            </p>
            <ul class="skills__list u-mt-lg">
              ${this._data.techStacks
                .map(tech => this._generateMarkupSkills(tech))
                .join('')}
              
            </ul>
          </div>
        </div>
      </section>
    `;
  }

  _generateMarkupSkills(tech) {
    const { name, icon } = tech;
    return `
      <li class="skills__box">
        ${icon}
        <span class="skills__title">${name.toUpperCase()}</span>
      </li>
    `;
  }
}

export default new AboutView();