import FilmCardView from '../view/film-card';
import PopupView from '../view/popup';
import { render, RenderPosition } from '../utils/render';
import PopupContainerView from '../view/popup-container';

export default class Movie {
  constructor(container) {
    this._container = container;
    this._popupContainer = new PopupContainerView();
    this._cardCompanent = null;
    this._popup = null;

    this._closePopup = this._closePopup.bind(this);
    this._escKeydownHandler = this._escKeydownHandler.bind(this);
  }

  init(card) {
    const footer = document.querySelector('.footer');
    this._card = card;
    this._cardCompanent = new FilmCardView(this._card);
    this._popup = new PopupView(this._card);

    this._cardCompanent
      .setPopupClickHandler(() => {
        render(footer, this._popupContainer, RenderPosition.AFTEREND);
        render(this._popupContainer, this._popup, RenderPosition.AFTERBEGIN);
        this._popup.setCloseHandler(() => this._closePopup());
        window.addEventListener('keydown', (e) => this._escKeydownHandler(e));
      });
    render(this._container, this._cardCompanent, RenderPosition.BEFOREEND);
  }

  _closePopup() {
    this._popupContainer.getElement().remove();
    window.removeEventListener('keydown', this._escKeydownHandler);
  }

  _escKeydownHandler(e) {
    if (e.key === 'Escape') {
      e.preventDefault();
      this._closePopup();
    }
  }
}
