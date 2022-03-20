import * as model from './model';
import PopupView from './Views/popupView';
import HeroView from './Views/heroView';
import AboutView from './Views/aboutView';
import ProjectView from './Views/projectView';
import ContactView from './Views/contactView';
import ThemeView from './Views/themeView';
import MenuView from './Views/menuView';
import GlobalView from './Views/globalView';

const controlTheme = function () {
  ThemeView.setTheme();
};

const init = function () {
  PopupView.render(model.state.popupLinks);
  HeroView.render(model.state.heroData);
  AboutView.render(model.state.aboutData);
  ProjectView.render(model.state.projects);
  ContactView.render(model.state.contact);
  ThemeView.addHandlerRender(controlTheme);
  ThemeView.getTheme();
};

init();
