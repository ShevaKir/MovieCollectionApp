import { movieDetailsMock, moviesMock } from '../mock/movies-mock';
import { selectCurrentMovieDetails, selectFavoriteMovies, selectMovieState, selectMovies, selectWatchLaterMovies } from './selectors';
import { MovieState } from './state';

describe('Selectors', () => {
  const initialState: MovieState = {
    movies: moviesMock,
    favoriteMovies: moviesMock,
    watchLaterMovies: moviesMock,
    currentMovieDetails: movieDetailsMock,
  };

  it('should select the feature state', () => {
    expect(selectMovieState.projector(initialState)).toEqual(initialState);
  });
  it('should select the movies from the state', () => {
    expect(selectMovies.projector(initialState)).toEqual(initialState.movies);
  });

  it('should select the favorite movies from the state', () => {
    expect(selectFavoriteMovies.projector(initialState)).toEqual(
      initialState.favoriteMovies
    );
  });

  it('should select the watch later movies from the state', () => {
    expect(selectWatchLaterMovies.projector(initialState)).toEqual(
      initialState.watchLaterMovies
    );
  });

  it('should select the current movie details from the state', () => {
    expect(selectCurrentMovieDetails.projector(initialState)).toEqual(
      initialState.currentMovieDetails
    );
  });
});
