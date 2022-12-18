import AbstractView from './abstract.js';

function createMainEmptyTemlate() {
  return `<section class="films-list">
    <h2 class="films-list__title">There are no movies in our database</h2>
</section>`;
}

export default class MainEmpty extends AbstractView {
  constructor() {
    super();
  }

  getTemplate() {
    return createMainEmptyTemlate();
  }
}
