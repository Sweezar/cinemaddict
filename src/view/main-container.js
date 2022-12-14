import {createElement } from './utils.js';

function createMainContainerTemlate() {
  return `<section class="films">

  </section>`;
}

export default class MainContainer {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createMainContainerTemlate();
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
