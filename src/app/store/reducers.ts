import { createReducer, on } from '@ngrx/store';
import { initialState } from './state';
import * as MovieActions from './actions';

export const MovieReducer = createReducer(
  initialState,
  on(MovieActions.loadMoviesSuccess, (state, { movies }) => {
    return {
      ...state,
      movies: movies,
    };
  }),
  on(MovieActions.loadMoviesFailure, (state, { error }) => {
    return {
      ...state,
      movies: null,
      error: error,
    };
  }),
  on(MovieActions.loadFavoriteMovieSuccess, (state, { movie }) => {
    debugger
    if (!state.favoriteMovies.some((m) => m.id === movie.id)) {
      return {
        ...state,
        favoriteMovies: [...state.favoriteMovies, movie],
      };
    }
    return state;
  }),
  on(MovieActions.loadFavoriteMovieFailure, (state, { error }) => {
    return {
      ...state,
      error: error,
    };
  }),
  on(MovieActions.removeFromFavorite, (state, { id }) => {
    return {
      ...state,
      favoriteMovies: state.favoriteMovies.filter((movie) => movie.id !== id),
    };
  }),
  on(MovieActions.loadWatchLaterMovieSuccess, (state, { movie }) => {
    debugger
    if (!state.watchLaterMovies.some((m) => m.id === movie.id)) {
      return {
        ...state,
        watchLaterMovies: [...state.watchLaterMovies, movie],
      };
    }
    return state;
  }),
  on(MovieActions.loadWatchlaterMovieFailure, (state, { error }) => {
    return {
      ...state,
      error: error,
    };
  }),
  on(MovieActions.removeFromWatchLater, (state, { id }) => {
    return {
      ...state,
      watchLaterMovies: state.watchLaterMovies.filter(
        (movie) => movie.id !== id
      ),
    };
  })
);
