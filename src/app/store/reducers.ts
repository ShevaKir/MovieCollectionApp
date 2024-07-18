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
  on(MovieActions.addMovieToFavorite, (state, { id }) => {
    return {
      ...state,
      favoriteMovies: [...state.favoriteMovies, id],
    };
  }),
  on(MovieActions.removeMovieFromFavorite, (state, { id }) => {
    return {
      ...state,
      favoriteMovies: state.favoriteMovies.filter((movieId) => movieId !== id),
    };
  })
);
