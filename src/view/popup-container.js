import { createElement } from './utils.js';

function createPopupContainer() {
  return '<section class="film-details"></section>';
}

export default class PopupContainer {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createPopupContainer();
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }
    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
