/* eslint-disable no-undef */
import { limitStr } from '../utils/utils.js';
import AbstractView from './abstract.js';

function createFilmCardTemlate(data) {
  const {
    title,
    poster,
    description,
    rating,
    ReleaseDate,
    genres,
    runtime,
    comments,
    isFavorite,
    isWatched,
    isAddWatchlist,
  } = data;

  const dayjs = require('dayjs');

  function isActive(item) {
    return item ? 'film-card__controls-item--active' : '';
  }

  return `<article class="film-card">
    <h3 class="film-card__title">${title}</h3>
    <p class="film-card__rating">${rating}</p>
    <p class="film-card__info">
      <span class="film-card__year">${dayjs(ReleaseDate).format('YYYY')}</span>
      <span class="film-card__duration">${runtime}</span>
      <span class="film-card__genre">${genres[0]}</span>
    </p>
    <img src="${poster}" alt="" class="film-card__poster">
    <p class="film-card__description">${limitStr(description, 140)}</p>
    <a class="film-card__comments">${comments.length} comments</a>
    <div class="film-card__controls">
      <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist ${isActive(
    isAddWatchlist,
  )}" type="button">Add to watchlist</button>
      <button class="film-card__controls-item button film-card__controls-item--mark-as-watched ${isActive(
    isWatched,
  )}" type="button">Mark as watched</button>
      <button class="film-card__controls-item button film-card__controls-item--favorite ${isActive(
    isFavorite,
  )}" type="button">Mark as favorite</button>
    </div>
  </article>`;
}

export default class FilmCard extends AbstractView {
  constructor(data) {
    super();
    this._data = data;
    this._clickHandler = this._clickHandler.bind(this);
  }

  getTemplate() {
    return createFilmCardTemlate(this._data);
  }

  _clickHandler(evt) {
    evt.preventDefault();
    this._callback.click();
  }

  setPopupClickHandler(callback) {
    this._callback.click = callback;
    this.getElement().querySelector('.film-card__poster').addEventListener('click', this._clickHandler);
  }
}
