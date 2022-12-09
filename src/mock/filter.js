const movieToFilterMap = {
  all: (movies) => movies.length,
  watchlist: (movies) => movies.filter((movie) => movie.isAddWatchlist == true).length,
  history: (movies) => movies.filter((movie) => movie.isWatched == true).length,
  favorites: (movies) => movies.filter((movie) => movie.isFavorite == true).length,
};

export function generateFilter(movies) {
  return Object.entries(movieToFilterMap).map(([filterName, countMovies]) => {
    return {
      name: filterName,
      count: countMovies(movies),
    };
  });
}
