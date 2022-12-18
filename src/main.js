import UserRankView from './view/user-rank.js';
import FilmCountView from './view/film-count.js';
import { render, RenderPosition } from './utils/render.js';
import { generateFilmData } from './mock/film-data.js';
import MovieListPresenter from './presenter/movie-list.js';

const dataMovies = new Array(22).fill().map(() => generateFilmData());

const header = document.querySelector('.header');
render(header, new UserRankView(), RenderPosition.BEFOREEND);

const main = document.querySelector('.main');
const movieListView = new MovieListPresenter(main);
movieListView.init(dataMovies);

const footerStatistics = document.querySelector('.footer__statistics');
render(footerStatistics, new FilmCountView(dataMovies.length), RenderPosition.BEFOREEND);
