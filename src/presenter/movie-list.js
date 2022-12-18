import SortView from '../view/sort';
import MainContainerView from '../view/main-container';
import MainContentView from '../view/main-content';
import ShowMoreBtnView from '../view/show-more-btn';
import TopRatedView from '../view/top-rated';
import MostCommentedView from '../view/most-commented';
import MainEmptyView from '../view/main-list-empty';
import FilterMenuView from '../view/menu';
import { render, RenderPosition } from '../utils/render';
import { generateFilter } from '../mock/filter';
import MoviePresenter from './movie';

export default class MovieList {
  constructor(container) {
    this._movieListContainer = container;

    this._MOVIE_CARD_COUNT = 5;
    this._MOVIE_CARD_COUNT_EXTRA = 2;
    this._RENDERED_CARD = 5;
    this._itterationCount = 0;
    this._sortContainer = new SortView();
    this._mainContainer = new MainContainerView();
    this._mainContent = new MainContentView();
    this._showMoreBtn = new ShowMoreBtnView();
    this._topRated = new TopRatedView();
    this._mostCommented = new MostCommentedView();
    this._mainEmpty = new MainEmptyView();
    this._filmListContainer = this._mainContent.getElement().querySelector('.films-list__container');
  }

  init(moviesData) {
    this._moviesData = moviesData.slice();
    this._filter = generateFilter(moviesData);
    this._renderFilterMenu();
    this._renderSort();

    this._renderList();
  }

  _renderFilterMenu() {
    this._filterMenu = new FilterMenuView(this._filter);
    render(this._movieListContainer, this._filterMenu, RenderPosition.BEFOREEND);
  }

  _renderSort() {
    render(this._movieListContainer, this._sortContainer, RenderPosition.BEFOREEND);
  }

  _renderMainEmpty() {
    render(this._movieListContainer, this._mainEmpty, RenderPosition.BEFOREEND);
    this._sortContainer.getElement().style.display = 'none';
  }

  _renderMainContainer() {
    render(this._movieListContainer, this._mainContainer, RenderPosition.BEFOREEND);
  }

  _renderMainList() {
    render(this._mainContainer, this._mainContent, RenderPosition.BEFOREEND);
    this._renderMovies(0, this._RENDERED_CARD);
  }

  _renderFilmCard(cardListElement, card) {
    const moviePresenter = new MoviePresenter(cardListElement);
    moviePresenter.init(card);
  }

  _renderMovies(from, to) {
    this._moviesData
      .slice(from, to)
      .forEach((movie) => {this._renderFilmCard(this._filmListContainer, movie);});
  }

  _showMoreHandler() {
    this._renderMovies(this._RENDERED_CARD, this._RENDERED_CARD + this._MOVIE_CARD_COUNT);
    this._RENDERED_CARD += this._MOVIE_CARD_COUNT;
    if (this._RENDERED_CARD >= this._moviesData.length) {
      this._RENDERED_CARD = this._moviesData.length;
      this._showMoreBtn.getElement().remove();
    }
  }

  _renderShowMoreBtn() {
    render(this._mainContent, this._showMoreBtn, RenderPosition.BEFOREEND);
    this._showMoreBtn.setClickHandler(() => this._showMoreHandler());
  }

  _renderTopRated() {
    render(this._mainContainer, this._topRated, RenderPosition.BEFOREEND);
    const topListContainer = document.querySelector(
      '#top-rated .films-list__container',
    );
    const sortTopMovies = this._moviesData.slice().sort((a, b) => {
      return b.rating - a.rating;
    });
    for (let i = 0; i < this._MOVIE_CARD_COUNT_EXTRA; i++) {
      this._renderFilmCard(topListContainer, sortTopMovies[i]);
    }
  }

  _renderMostCommented() {
    render(this._mainContainer, this._mostCommented, RenderPosition.BEFOREEND);
    const mostCommentedListContainer = document.querySelector(
      '#most-commented .films-list__container',
    );
    const sortMostCommentedMovies = this._moviesData.slice().sort((a, b) => {
      return b.comments.length - a.comments.length;
    });
    for (let i = 0; i < this._MOVIE_CARD_COUNT_EXTRA; i++) {
      this._renderFilmCard(mostCommentedListContainer, sortMostCommentedMovies[i]);
    }
  }

  _renderList() {
    this._renderMainContainer();
    if (!this._moviesData.length) {
      this._renderMainEmpty();
    }
    this._renderMainList();
    this._renderShowMoreBtn();
    this._renderTopRated();
    this._renderMostCommented();
  }
}
