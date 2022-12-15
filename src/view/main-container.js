import AbstractView from './abstract.js';

function createMainContainerTemlate() {
  return `<section class="films">

  </section>`;
}

export default class MainContainer extends AbstractView {
  constructor() {
    super();
  }

  getTemplate() {
    return createMainContainerTemlate();
  }
}
