import FilterMenuView from './view/menu.js';
import FilmCardView from './view/film-card.js';
import UserRankView from './view/user-rank.js';
import PopupContainerView from './view/popup-container.js';
import PopupView from './view/popup.js';
import SortView from './view/sort.js';
import MainContentView from './view/main-content.js';
import FilmCountView from './view/film-count.js';
import { generateFilter } from './mock/filter.js';
import TopRatedView from './view/top-rated.js';
import MostCommentedView from './view/most-commented.js';
import { render, RenderPosition } from './view/utils';
import { generateFilmData } from './mock/film-data.js';

const MOVIE_CARD_COUNT_EXTRA = 2;
const dataMovies = new Array(20).fill().map(() => generateFilmData());
const filter = generateFilter(dataMovies);

const header = document.querySelector('.header');
render(header, new UserRankView().getElement(), RenderPosition.BEFOREEND);

const main = document.querySelector('.main');
render(main, new FilterMenuView(filter).getElement(), RenderPosition.BEFOREEND);
document.querySelector('.main-navigation__item').classList.add('main-navigation__item--active');
render(main, new SortView().getElement(), RenderPosition.BEFOREEND);
render(main, new MainContentView().getElement(), RenderPosition.BEFOREEND);

//Заполнение карточками поля с основным контентом
const filmListContainer = document.querySelector('.films-list__container');
let MOVIE_CARD_COUNT = 5;
let itterationCount = 0;
generateFilmList();
const showMoreBtn = document.querySelector('.films-list__show-more'); //Кнопка Show More
showMoreBtn.addEventListener('click', generateFilmList);

function renderFilmCard(cardListElement, card) {
  const cardCompanent = new FilmCardView(card);
  const footer = document.querySelector('.footer');
  const popupContainer = new PopupContainerView();
  const popup = new PopupView(card);

  cardCompanent.getElement().querySelector('.film-card__poster').addEventListener('click', () => {
    render(footer, popupContainer.getElement(), RenderPosition.AFTEREND);
    render(popupContainer.getElement(), popup.getElement(), RenderPosition.AFTERBEGIN);
    popup.getElement().querySelector('.film-details__close-btn').addEventListener('click', closePopup);
    window.addEventListener('keydown', escKeydownHandler);
  });
  render(cardListElement, cardCompanent.getElement(), RenderPosition.BEFOREEND);

  function closePopup() {
    popupContainer.getElement().remove();
    window.removeEventListener('keydown', escKeydownHandler);
  }
  function escKeydownHandler(e) {
    if (e.key === 'Escape') {
      e.preventDefault();
      closePopup();
    }
  }
}

function generateFilmList() {
  while (itterationCount < MOVIE_CARD_COUNT && itterationCount < dataMovies.length) {
    renderFilmCard(filmListContainer, dataMovies[itterationCount]);
    itterationCount++;
  }
  if (MOVIE_CARD_COUNT >= dataMovies.length) {
    showMoreBtn.classList.add('visually-hidden');
  }
  MOVIE_CARD_COUNT += 5;
}

//Добавление полей Top Rating и Most Commented
const filmsContainer = document.querySelector('.films');
render(filmsContainer, new TopRatedView().getElement(), RenderPosition.BEFOREEND);
render(filmsContainer, new MostCommentedView().getElement(), RenderPosition.BEFOREEND);

//Заполнение Top Rating
const topListContainer = document.querySelector('#top-rated .films-list__container');
const sortTopMovies = dataMovies.slice().sort((a,b) => {return b.rating - a.rating;});
for (let i = 0; i < MOVIE_CARD_COUNT_EXTRA; i++) {
  renderFilmCard(topListContainer, sortTopMovies[i]);
}

//Заполнение Most Commented
const mostCommentedListContainer = document.querySelector('#most-commented .films-list__container');
const sortMostCommentedMovies = dataMovies.slice().sort((a,b) => {return b.comments.length - a.comments.length;});
for (let i = 0; i < MOVIE_CARD_COUNT_EXTRA; i++) {
  renderFilmCard(mostCommentedListContainer, sortMostCommentedMovies[i]);
}

const footerStatistics = document.querySelector('.footer__statistics');
render(footerStatistics, new FilmCountView(dataMovies.length).getElement(), RenderPosition.BEFOREEND);

