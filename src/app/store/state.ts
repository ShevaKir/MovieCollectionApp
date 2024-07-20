import { IMovie } from '../models/movie.model';

export interface MovieState {
  movies: IMovie[] | null;
  favoriteMovies: IMovie[];
  watchLaterMovies: IMovie[];
}

export const initialState: MovieState = {
  movies: null,
  favoriteMovies: [],
  watchLaterMovies: [],
};
