import AbstractView from './abstract.js';

function createPopupContainer() {
  return '<section class="film-details"></section>';
}

export default class PopupContainer extends AbstractView {
  constructor() {
    super();
  }

  getTemplate() {
    return createPopupContainer();
  }
}
