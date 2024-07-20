import { createAction, props } from '@ngrx/store';
import { IMovie } from '../models/movie.model';
import { MovieCollection } from '../enums/movie-collection';

//All movies
export const loadMovies = createAction(
  '[Movie] Load Movies',
  props<{ category: MovieCollection }>()
);

export const loadMoviesSuccess = createAction(
  '[Movie] Load Movies Success',
  props<{ movies: IMovie[] | null }>()
);

export const loadMoviesFailure = createAction(
  '[Movie] Load Movies Failure',
  props<{ error: any }>()
);

//Favorite Movies
export const addToFavorite = createAction(
  '[Favorite Movie] Add To Favorite',
  props<{ id: number }>()
);

export const removeFromFavorite = createAction(
  '[Favorite Movie] Remove movie',
  props<{ id: number }>()
);

export const loadFavoriteMovieSuccess = createAction(
  '[Movie] Load Favorite Movie Success',
  props<{ movie: IMovie }>()
);
export const loadFavoriteMovieFailure = createAction(
  '[Movie] Load Favorite Movie Failure',
  props<{ error: any }>()
);

//Watch Later Movies
export const addToWatchLater = createAction(
  '[Watch Later Movie] Add movie',
  props<{ id: number }>()
);

export const removeFromWatchLater = createAction(
  '[Watch Later Movie] Remove movie',
  props<{ id: number }>()
);

export const loadWatchLaterMovieSuccess = createAction(
  '[Watch Later Movie] Load Watch Later Movie Success',
  props<{ movie: IMovie }>()
);
export const loadWatchlaterMovieFailure = createAction(
  '[Watch Later Movie] Load Watch Later Movie Failure',
  props<{ error: any }>()
);
