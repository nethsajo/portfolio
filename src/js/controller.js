import * as model from './model';
import PopupView from './Views/popupView';

const controlPopupLinks = function () {
  PopupView.render(model.state.popupLinks);
};

const init = function () {
  controlPopupLinks();
};

init();
