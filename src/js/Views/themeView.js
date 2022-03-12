import icons from 'url:../../icons/icons.svg';

class ThemeView {
  _body = document.querySelector('body');
  _themeBtn = document.querySelector('.btn__theme');
  _themeIconContainer = document.querySelector('.navigation__icon-container');
  _themeColor = 'dark';
  _themeIcon = 'icon-sun';

  addHandlerRender(handler) {
    this._themeBtn.addEventListener('click', handler);
  }

  _getCurrentTheme() {
    const theme = document.body.classList.contains(this._themeColor)
      ? 'light'
      : 'dark';
    const use = this._themeIconContainer
      .querySelector('use')
      .getAttribute('xlink:href');
    const icon = use.slice(use.indexOf('#') + 1);
    return { icon, theme };
  }

  getTheme() {
    const theme = localStorage.getItem('theme');
    const icon = localStorage.getItem('icon');

    if (theme) {
      document.body.classList[theme === 'dark' ? 'add' : 'remove'](
        this._themeColor
      );
      this._themeIconContainer
        .querySelector('use')
        .setAttribute(
          'xlink:href',
          `${icons}#icon-${this._themeIcon === icon ? 'moon' : 'sun'}`
        );
    }
  }

  setTheme() {
    const { icon, theme } = this._getCurrentTheme();
    document.body.classList.toggle(this._themeColor);
    this._themeIconContainer
      .querySelector('use')
      .setAttribute(
        'xlink:href',
        `${icons}#icon-${this._themeIcon === icon ? 'moon' : 'sun'}`
      );

    localStorage.setItem('theme', theme);
    localStorage.setItem('icon', icon);
  }
}

export default new ThemeView();
