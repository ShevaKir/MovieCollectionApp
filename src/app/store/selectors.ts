import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MovieState } from './state';

export const selectMovieState = createFeatureSelector<MovieState>('movieState');
export const selectMovies = createSelector(
  selectMovieState,
  (state) => state.movies
);
export const selectFavoriteMovies = createSelector(
  selectMovieState,
  (state) => state.favoriteMovies
);
export const selectWatchLaterMovies = createSelector(
  selectMovieState,
  (state) => state.watchLaterMovies
);
