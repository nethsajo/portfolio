import AOS from 'aos';

class GlobalView {
  constructor() {
    this._addHandlerLoader();
    this._addHandlerAnimateScroll();
    this._addHandlerNav();
  }

  _addHandlerAnimateScroll() {
    window.addEventListener('load', function () {
      AOS.init({
        disable: false,
        initClassName: 'aos-init',
        animatedClassName: 'aos-animate',
        debounceDelay: 50,
        throttleDelay: 99,
        offset: 80,
        delay: 0,
        duration: 1000,
        easing: 'ease-out-cubic',
        once: true,
        mirror: false,
      });
    });
  }

  _addHandlerLoader() {
    window.addEventListener('load', function () {
      const loader = document.querySelector('.loader');
      loader.classList.add('hidden');
      document.body.style.overflow = 'visible';
    });
  }

  _addHandlerNav() {
    let prevScrollpos = window.pageYOffset;
    window.addEventListener('scroll', function () {
      let currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.querySelector('.header').style.top = '0';
      } else {
        document.querySelector('.header').style.top = '-8rem';
      }
      prevScrollpos = currentScrollPos;
    });
  }
}

export default new GlobalView();
