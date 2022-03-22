import View from './View';

class ContactView extends View {
  _parentElement = document.querySelector('.main');

  _generateMarkup() {
    return `
      <section class="contact" id="contact">
        <div class="wrapper">
          <div class="contact__content u-t-center">
            <h2 class="contact__heading u-fw-bold u-mb-md" data-aos="fade-up" data-aos-delay="400">
            ${this._data.heading}
            <span class="u-c-gc">you.</span>
            </h2>
            <p class="contact__message u-mb-md" data-aos="fade-up" data-aos-delay="600">
              ${this._data.message}
            </p>
            <div class="contact__btn" data-aos="fade-up" data-aos-delay="800">
              <a
              href="${this._data.link}"
              target="_blank"
              class="btn btn--outline btn--sm u-mx-auto">
              Say hello
              </a>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

export default new ContactView();
