import { IMovieDetails } from '../models/movie-details.model';
import { IMovie } from '../models/movie.model';

export interface MovieState {
  movies: IMovie[] | null;
  favoriteMovies: IMovie[];
  watchLaterMovies: IMovie[];
  currentMovieDetails: IMovieDetails | null;
}

export const initialState: MovieState = {
  movies: null,
  favoriteMovies: [],
  watchLaterMovies: [],
  currentMovieDetails: null
};
