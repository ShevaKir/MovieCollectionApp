import { movieDetailsMock, moviesMock } from '../mock/movies-mock';
import {
  loadFavoriteMovieFailure,
  loadFavoriteMovieSuccess,
  loadFoundMoviesFailure,
  loadFoundMoviesSuccess,
  loadMovieDetailsByIdFailture,
  loadMovieDetailsByIdSuccess,
  loadMoviesFailure,
  loadMoviesSuccess,
  loadWatchLaterMovieSuccess,
  loadWatchlaterMovieFailure,
  removeFromFavorite,
  removeFromWatchLater,
} from './actions';
import { MovieReducer } from './reducers';
import { initialState } from './state';

describe('Reducers', () => {
  it('should return the initial state', () => {
    const state = MovieReducer(undefined, { type: 'unknown' });
    expect(state).toBe(initialState);
  });
  it('should handle loadMoviesSuccess', () => {
    const movies = moviesMock;
    const expectedState = {
      ...initialState,
      movies: movies,
    };

    const state = MovieReducer(initialState, loadMoviesSuccess({ movies }));
    expect(state).toEqual(expectedState);
  });
  it('should handle loadMoviesFailure', () => {
    const error = 'Some error';
    const expectedState = {
      ...initialState,
      movies: null,
      error: error,
    };

    const state = MovieReducer(initialState, loadMoviesFailure({ error }));
    expect(state).toEqual(expectedState);
  });

  it('should handle loadMovieDetailsByIdSuccess', () => {
    const movieDetails = movieDetailsMock;
    const expectedState = {
      ...initialState,
      currentMovieDetails: movieDetails,
    };

    const state = MovieReducer(
      initialState,
      loadMovieDetailsByIdSuccess({ movieDetails: movieDetails })
    );
    expect(state).toEqual(expectedState);
  });
  it('should handle loadMovieDetailsByIdFailure', () => {
    const error = 'Some error';
    const expectedState = {
      ...initialState,
      currentMovieDetails: null,
      error: error,
    };

    const state = MovieReducer(
      initialState,
      loadMovieDetailsByIdFailture({ error })
    );
    expect(state).toEqual(expectedState);
  });
  it('should handle loadFavoriteMovieSuccess', () => {
    const movie = moviesMock[0];
    const expectedState = {
      ...initialState,
      favoriteMovies: [...initialState.favoriteMovies, movie],
    };

    const state = MovieReducer(
      initialState,
      loadFavoriteMovieSuccess({ movie })
    );
    expect(state).toEqual(expectedState);
  });
  it('should handle loadFavoriteMovieFailure', () => {
    const error = 'Some error';
    const expectedState = {
      ...initialState,
      error: error,
    };

    const state = MovieReducer(
      initialState,
      loadFavoriteMovieFailure({ error })
    );
    expect(state).toEqual(expectedState);
  });
  it('should handle removeFromFavorite', () => {
    const movie = moviesMock[0];
    const stateWithFavorite = {
      ...initialState,
      favoriteMovies: [movie],
    };
    const expectedState = {
      ...initialState,
      favoriteMovies: [],
    };

    const state = MovieReducer(
      stateWithFavorite,
      removeFromFavorite({ id: movie.id })
    );
    expect(state).toEqual(expectedState);
  });
  it('should handle loadWatchLaterMovieSuccess', () => {
    const movie = moviesMock[0];
    const expectedState = {
      ...initialState,
      watchLaterMovies: [...initialState.watchLaterMovies, movie],
    };

    const state = MovieReducer(
      initialState,
      loadWatchLaterMovieSuccess({ movie })
    );
    expect(state).toEqual(expectedState);
  });
  it('should handle loadWatchLaterMovieFailure', () => {
    const error = 'Some error';
    const expectedState = {
      ...initialState,
      error: error,
    };

    const state = MovieReducer(
      initialState,
      loadWatchlaterMovieFailure({ error })
    );
    expect(state).toEqual(expectedState);
  });
  it('should handle removeFromWatchLater', () => {
    const movie = moviesMock[0];
    const stateWithWatchLater = {
      ...initialState,
      watchLaterMovies: [movie],
    };
    const expectedState = {
      ...initialState,
      watchLaterMovies: [],
    };

    const state = MovieReducer(
      stateWithWatchLater,
      removeFromWatchLater({ id: movie.id })
    );
    expect(state).toEqual(expectedState);
  });

  it('should handle loadFoundMoviesSuccess', () => {
    const movies = moviesMock;
    const expectedState = {
      ...initialState,
      foundMovies: movies,
    };

    const state = MovieReducer(
      initialState,
      loadFoundMoviesSuccess({ query: '', movies: movies })
    );
    expect(state).toEqual(expectedState);
  });

  it('should handle loadMoviesFailure', () => {
    const error = 'Some error';
    const expectedState = {
      ...initialState,
      foundMovies: null,
      error: error,
    };

    const state = MovieReducer(initialState, loadFoundMoviesFailure({ error }));
    expect(state).toEqual(expectedState);
  });
});
