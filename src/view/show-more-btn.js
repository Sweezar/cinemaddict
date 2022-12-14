import {createElement } from './utils.js';

function createShowMoreBtnTemlate() {
  return '<button class="films-list__show-more">Show more</button>';
}

export default class ShowMoreBtn {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createShowMoreBtnTemlate();
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
