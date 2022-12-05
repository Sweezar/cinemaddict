import { createMenuTemlate } from './view/menu.js';
import { createFilmCardTemlate } from './view/film-card.js';
import { createUserRankTemlate } from './view/user-rank.js';
import { createPopupTemlate } from './view/popup.js';
import { createSortTemlate } from './view/sort.js';
import { createMainContentTemlate } from './view/main-content.js';
import { createFilmCountTemlate } from './view/film-count.js';

const MOVIE_CARD_COUNT = 5;
const MOVIE_CARD_COUNT_EXTRA = 2;

function render(container, template, place = 'beforeend') {
  container.insertAdjacentHTML(place, template);
}

const header = document.querySelector('.header');
render(header, createUserRankTemlate());

const main = document.querySelector('.main');
render(main, createMenuTemlate());
render(main, createSortTemlate());
render(main, createMainContentTemlate());

const filmListContainer = document.querySelectorAll('.films-list__container');
filmListContainer.forEach((container) => {
  container.innerHTML = '';
  if (!container.parentNode.matches('.films-list--extra')) {
    for (let i = 1; i <= MOVIE_CARD_COUNT; i++) {
      render(container, createFilmCardTemlate());
    }
  } else {
    for (let i = 1; i <= MOVIE_CARD_COUNT_EXTRA; i++) {
      render(container, createFilmCardTemlate());
    }
  }
});

const footerStatistics = document.querySelector('.footer__statistics');
render(footerStatistics, createFilmCountTemlate());

const footer = document.querySelector('.footer');
render(footer, createPopupTemlate(), 'afterend');

