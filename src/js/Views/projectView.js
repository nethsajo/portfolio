import View from './View';
import icon from 'url:../../icons/icons.svg';

class ProjectView extends View {
  _parentElement = document.querySelector('.main');
  _projectBox;

  constructor() {
    super();
    this._addShowProjectImage();
    this._addHideProjectImage();
  }

  _showProjectImage(e) {
    const btn = e.target.closest('.projects__maximize-btn');
    if (!btn) return;
    const { id } = btn.dataset;
    const { images } = this._data.find(image => image.id === +id);

    this._projectBox = e.target.closest('.projects__container');
    const markup = this._generateProjectImage(images);
    this._projectBox.insertAdjacentHTML('afterbegin', markup);
  }

  _hideProjectImage(e) {
    const btnClose = e.target.closest('.btn__close-window');
    if (!btnClose) return;
    this._projectBox.removeChild(this._projectBox.firstElementChild);
  }

  _addShowProjectImage() {
    this._parentElement.addEventListener(
      'click',
      this._showProjectImage.bind(this)
    );
  }

  _addHideProjectImage() {
    this._parentElement.addEventListener(
      'click',
      this._hideProjectImage.bind(this)
    );
  }

  _generateMarkup() {
    return `
      <section class="projects" id="projects">
        <div class="wrapper">
          <h2 class="heading__secondary u-fw-bold u-mb-lg" data-aos="fade-up" data-aos-delay="400">Projects.</h2>
          <div class="projects__grid">
            ${this._data
              .map((project, i) => this._generateMarkupProjects(project, i))
              .join('')}
          </div>
        </div>
      </section>
    `;
  }

  _generateMarkupProjects(project, i) {
    return `
      <div class="projects__container">
        <div data-aos="zoom-in-up" data-aos-delay="${(i + 1) * 250}">
          <div class="projects__box">
            <figure class="projects__img-box">
              <picture class="project__picture">
                <img
                  srcset="${project.images.img640} 640w, ${
      project.images.img828
    } 828w, ${project.images.img1200} 1200w, ${project.images.img1920} 1920w, ${
      project.images.img2048
    } 2048w, ${
      project.images.img3840
    } 3840w" sizes="(max-width: 50em) 45vw, (max-width: 62em) 40vw, (max-width: 75em) 35vw, (min-width: 112.5em) 30vw"
                  src="${project.images.img1920}"
                  alt="${project.name} Photo"
                  class="projects__image"
                />
              </picture>
              <figcaption class="projects__caption">
                <button class="projects__maximize-btn" data-id="${project.id}">
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
                <a href="${project.links.live}" target="_blank" aria-label="${
      project.name
    } live link">
                  <div class="icon">
                    <svg class="icon__svg">
                      <use
                        xlink:href="${icon}#icon-arrow-right"
                      ></use>
                    </svg>
                  </div>
                </a>
                <a href="${project.links.github}" target="_blank" aria-label="${
      project.name
    } repo link">
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
        </div>
      </div>
    `;
  }

  _generateProjectImage(images) {
    return `
      <div class="projects__window">
        <div class="projects__window-content">
          <button class="projects__window-close btn__close-window">
            <svg class="projects__window-icon">
              <use
                xlink:href="${icon}#icon-close"
              ></use>
            </svg>
          </button>
          <div class="projects__window-box">
            <picture class="projects__window-picture">
              <img
                srcset="${images.img640} 640w, ${images.img828} 828w, ${images.img1200} 1200w, ${images.img1920} 1920w, ${images.img2048} 2048w, ${images.img3840} 3840w" sizes="(max-width: 50em) 45vw, (max-width: 62em) 40vw, (max-width: 75em) 35vw, (min-width: 112.5em) 30vw"
                src="${images.img1920}"
                class="projects__window-image"
              />
            </picture>
          </div>
        </div>
      </div>
    `;
  }
}

export default new ProjectView();
