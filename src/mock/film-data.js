import {getRandomArrayElement, randomNumber, shuffle} from '../view/utils.js';
export {generateFilmData};

const TITLES = [
  'The Dance of Life',
  'Sagebrush Trail',
  'The Man with the Golden Arm',
  'Santa Claus Conquers the Martians',
  'Popeye the Sailor Meets Sindbad the Sailor',
  'The Great Flamarion',
  'Made for Each Other'];

const POSTERS = [
  'the-dance-of-life.jpg',
  'sagebrush-trail.jpg',
  'the-man-with-the-golden-arm.jpg',
  'santa-claus-conquers-the-martians.jpg',
  'popeye-meets-sinbad.png',
  'the-great-flamarion.jpg',
  'made-for-each-other.png',
];

const DESCRIPTIONS = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'Cras aliquet varius magna, non porta ligula feugiat eget.',
  'Fusce tristique felis at fermentum pharetra.',
  'Aliquam id orci ut lectus varius viverra.',
  'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.',
  'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.',
  'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.',
  'Sed sed nisi sed augue convallis suscipit in sed felis.',
  'Aliquam erat volutpat.',
  'Nunc fermentum tortor ac porta dapibus.',
  'In rutrum ac purus sit amet tempus.',
];

const GENRES = [
  'Musical',
  'Western',
  'Drama',
  'Comedy',
  'Cartoon',
  'Mystery',
  'Film-Noir',
];

const COMMENTS = [
  {
    id: 1,
    text: 'Отличный фильм',
    date: '',
    author: '',
    emotion: '',
  },
  {
    id: 2,
    text: 'Страшно',
    date: '',
    author: '',
    emotion: '',
  },
  {
    id: 3,
    text: 'Очень смешно',
    date: '',
    author: '',
    emotion: '',
  },
  {
    id: 4,
    text: 'Я плакал',
    date: '',
    author: '',
    emotion: '',
  },
  {
    id: 5,
    text: 'Фильм на один раз',
    date: '',
    author: '',
    emotion: '',
  },
  {
    id: 6,
    text: 'Ничего не понял, но очень интересно',
    date: '',
    author: '',
    emotion: '',
  },
];

function generateDescription() {
  let descriptionCount = randomNumber(1,5);
  let description = '';
  while (descriptionCount > 0) {
    description = description + getRandomArrayElement(DESCRIPTIONS);
    descriptionCount--;
  }
  return description;
}

function generateFilmData() {
  return {
    title: `${getRandomArrayElement(TITLES)}`,
    poster: `./images/posters/${getRandomArrayElement(POSTERS)}`,
    description: generateDescription(),
    rating: randomNumber(0,10),
    genre: `${getRandomArrayElement(GENRES)}`,
    comments: shuffle(COMMENTS.slice(0, randomNumber(0,5))),
    isAddWatchlist: Boolean(randomNumber(0, 1)),
    isWatched: Boolean(randomNumber(0, 1)),
    isFavorite: Boolean(randomNumber(0, 1)),

    director: 'Anthony Mann',
    writers: 'Anne Wigton, Heinz Herald, Richard Weil',
    actors: 'Erich von Stroheim, Mary Beth Hughes, Dan Duryea',
    releaseDate: '1945-03-30',
    runtime: '1h 18m',
    country: 'USA',
  };
}
