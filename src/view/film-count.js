import AbstractView from './abstract.js';

function createFilmCountTemlate(filmCount) {
  return `<p>${filmCount} movies inside</p>`;
}

export default class FilmCount extends AbstractView {
  constructor(filmCount) {
    super();
    this._filmCount = filmCount;
  }

  getTemplate() {
    return createFilmCountTemlate(this._filmCount);
  }
}
