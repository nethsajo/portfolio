import View from './View';

class ContactView extends View {
  _parentElement = document.querySelector('.main');

  _generateMarkup() {
    return `
      <section class="contact" id="contact">
        <div class="wrapper u-t-center">
          <h2 class="contact__heading heading__secondary u-fw-bold u-mb-md">
            ${this._data.heading}
            <span class="u-c-gc">you.</span>
          </h2>
          <p class="contact__message u-mb-md">
            ${this._data.message}
          </p>
          <a
            href="${this._data.link}"
            target="_blank"
            class="btn btn--outline btn--sm"
            >Say hello</a
          >
        </div>
      </section>
    `;
  }
}

export default new ContactView();
