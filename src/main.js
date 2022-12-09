import { createMenuTemlate } from './view/menu.js';
import { createFilmCardTemlate } from './view/film-card.js';
import { createUserRankTemlate } from './view/user-rank.js';
import { createPopupTemlate } from './view/popup.js';
import { createSortTemlate } from './view/sort.js';
import { createMainContentTemlate } from './view/main-content.js';
import { createFilmCountTemlate } from './view/film-count.js';
import { generateFilter } from './mock/filter.js';
import { createExtraContainer } from './view/extra.js';

import { generateFilmData } from './mock/film-data.js';

const MOVIE_CARD_COUNT = 5;
const MOVIE_CARD_COUNT_EXTRA = 2;
const dataMovies = new Array(25).fill().map(() => generateFilmData());
const filter = generateFilter(dataMovies);

function render(container, template, place = 'beforeend') {
  container.insertAdjacentHTML(place, template);
}

const header = document.querySelector('.header');
render(header, createUserRankTemlate());

const main = document.querySelector('.main');
render(main, createMenuTemlate(filter));
render(main, createSortTemlate());
render(main, createMainContentTemlate());

//Заполнение карточками поля с основным контентом
const filmListContainer = document.querySelector('.films-list__container');
for (let i = 0; i < MOVIE_CARD_COUNT; i++) {
  render(filmListContainer, createFilmCardTemlate(dataMovies[i]));
}

//Добавление полей Top Rating и Most Commented
const filmsContainer = document.querySelector('.films');
render(filmsContainer, createExtraContainer());

//Заполнение Top Rating
const topListContainer = document.querySelector('#top-rated .films-list__container');
const sortTopMovies = dataMovies.slice().sort((a,b) => {return b.rating - a.rating});
for (let i = 0; i < MOVIE_CARD_COUNT_EXTRA; i++) {
  render(topListContainer, createFilmCardTemlate(sortTopMovies[i]));
}

//Заполнение Most Commented
const mostCommentedListContainer = document.querySelector('#most-commented .films-list__container');
const sortMostCommentedMovies = dataMovies.slice().sort((a,b) => {return b.comments.length - a.comments.length});
for (let i = 0; i < MOVIE_CARD_COUNT_EXTRA; i++) {
  render(mostCommentedListContainer, createFilmCardTemlate(sortMostCommentedMovies[i]));
}

const footerStatistics = document.querySelector('.footer__statistics');
render(footerStatistics, createFilmCountTemlate());

const footer = document.querySelector('.footer');
render(footer, createPopupTemlate(dataMovies[0]), 'afterend');


