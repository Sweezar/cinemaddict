import { createElement } from './utils';

function createMostCommentedContainer() {
  return `<section class="films-list films-list--extra" id="most-commented">
    <h2 class="films-list__title">Most commented</h2>

    <div class="films-list__container">
      
    </div>
  </section>`;
}

export default class MostCommented {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createMostCommentedContainer();
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