import * as model from './model';
import PopupView from './Views/popupView';
import HeroView from './Views/heroView';
import AboutView from './Views/aboutView';
import ProjectView from './Views/projectView';

const controlPopupLinks = function () {
  PopupView.render(model.state.popupLinks);
};

const controlHero = function () {
  HeroView.render(model.state.heroData);
};

const controlAbout = function () {
  AboutView.render(model.state.aboutData);
};

const controlProjects = function () {
  ProjectView.render(model.state.projects);
};

const init = function () {
  controlPopupLinks();
  controlHero();
  controlAbout();
  controlProjects();
};

init();

// setTimeout(() => {
//   const loader = document.querySelector('.loader');
//   loader.classList.add('hidden');
// }, 1400);
