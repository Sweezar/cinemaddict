import { limitStr } from './utils.js';
export function createFilmCardTemlate(data) {
  const {title, poster, description, rating, ReleaseDate, genre, runtime, comments, isFavorite, isWatched, isAddWatchlist} = data;
  // eslint-disable-next-line no-undef
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
    <span class="film-card__genre">${genre}</span>
  </p>
  <img src="${poster}" alt="" class="film-card__poster">
  <p class="film-card__description">${limitStr(description, 140)}</p>
  <a class="film-card__comments">${comments.length} comments</a>
  <div class="film-card__controls">
    <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist ${isActive(isAddWatchlist)}" type="button">Add to watchlist</button>
    <button class="film-card__controls-item button film-card__controls-item--mark-as-watched ${isActive(isWatched)}" type="button">Mark as watched</button>
    <button class="film-card__controls-item button film-card__controls-item--favorite ${isActive(isFavorite)}" type="button">Mark as favorite</button>
  </div>
</article>`;
}
