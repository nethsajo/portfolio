import * as model from './model';
import PopupView from './Views/popupView';
import HeroView from './Views/heroView';
import AboutView from './Views/aboutView';

const controlPopupLinks = function () {
  PopupView.render(model.state.popupLinks);
};

const controlHero = function () {
  HeroView.render(model.state.heroData);
};

const controlAbout = function () {
  AboutView.render(model.state.aboutData);
};

const init = function () {
  controlPopupLinks();
  controlHero();
  controlAbout();
};

init();
