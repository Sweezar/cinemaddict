import AbstractView from './abstract.js';

function createTopRatedContainer() {
  return `<section class="films-list films-list--extra" id="top-rated">
    <h2 class="films-list__title">Top rated</h2>

    <div class="films-list__container">

    </div>
  </section>`;
}

export default class TopRated extends AbstractView {
  constructor() {
    super();
  }

  getTemplate() {
    return createTopRatedContainer();
  }
}
