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
export const addMovieToFavorite = createAction(
  '[Favorite Movie] Add movie',
  props<{ id: number }>()
);

export const removeMovieFromFavorite = createAction(
  '[Favorite Movie] Remove movie',
  props<{ id: number }>()
);
