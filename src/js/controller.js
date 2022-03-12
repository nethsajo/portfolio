import * as model from './model';
import PopupView from './Views/popupView';
import HeroView from './Views/heroView';
import AboutView from './Views/aboutView';
import ProjectView from './Views/projectView';
import ContactView from './Views/contactView';

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

const controlContact = function () {
  ContactView.render(model.state.contact);
};

const init = function () {
  controlPopupLinks();
  controlHero();
  controlAbout();
  controlProjects();
  controlContact();
};

init();

// window.addEventListener('load', function () {
//   document.body.style.overflow = 'visible';
// });

// setTimeout(() => {
//   const loader = document.querySelector('.loader');
//   loader.classList.remove('hidden');
// }, 1400);
