import AbstractView from './abstract.js';

function createShowMoreBtnTemlate() {
  return '<button class="films-list__show-more">Show more</button>';
}

export default class ShowMoreBtn extends AbstractView {
  constructor() {
    super();
  }

  getTemplate() {
    return createShowMoreBtnTemlate();
  }
}
