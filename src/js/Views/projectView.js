import View from './View';
import icon from 'url:../../icons/icons.svg';

class ProjectView extends View {
  _parentElement = document.querySelector('.main');

  _generateMarkup() {
    return `
      <section class="projects">
        <div class="wrapper">
          <h2 class="heading__secondary u-fw-bold u-mb-lg">Projects.</h2>
          <div class="projects__container">
            ${this._data
              .map(project => this._generateMarkupProjects(project))
              .join('')}
          </div>
        </div>
      </section>
    `;
  }

  _generateMarkupProjects(project) {
    return `
      <div class="projects__box">
        <figure class="projects__img-box">
          <img
            src="${project.image}"
            alt="${project.name} Photo"
            class="projects__image"
          />
          <figcaption class="projects__caption">
            <button class="projects__maximize-btn">
              <svg class="projects__icon">
                <use
                  xlink:href="${icon}#icon-maximize"
                ></use>
              </svg>
            </button>
            <div class="projects__caption-content">
              <h3 class="projects__caption-title u-mb-xxs">
                ${project.name}
              </h3>
              <p class="projects__caption-description u-mb-xxs">
                ${project.description}
              </p>
              <div class="projects__language">${project.languages.join(
                ', '
              )}</div>
            </div>
          </figcaption>
        </figure>
        <div class="projects__header">
          <h2 class="projects__title">${project.name}</h2>
          <div class="projects__link">
            <a href="${project.links.live}" target="_blank">
              <div class="icon">
                <svg class="icon__svg">
                  <use
                    xlink:href="${icon}#icon-arrow-right"
                  ></use>
                </svg>
              </div>
            </a>
            <a href="${project.links.github}" target="_blank">
              <div class="icon">
                <svg class="icon__svg icon--no-transform">
                  <use
                    xlink:href="${icon}#icon-github"
                  ></use>
                </svg>
              </div>
            </a>
          </div>
        </div>
        <p class="projects__type">${project.type}</p>
      </div>
    `;
  }
}

export default new ProjectView();
