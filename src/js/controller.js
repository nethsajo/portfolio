import * as model from './model';
import PopupView from './Views/popupView';
import HeroView from './Views/heroView';

const controlPopupLinks = function () {
  PopupView.render(model.state.popupLinks);
};

const controlHero = function () {
  HeroView.render(model.state.heroData);
};

const init = function () {
  controlPopupLinks();
  controlHero();
};

init();
