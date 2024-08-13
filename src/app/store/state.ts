import { IMovieDetails } from '../models/movie-details.model';
import { IMovie } from '../models/movie.model';
import { SortingMovies } from '../utils/sorting-movies-options';

export interface MovieState {
  movies: IMovie[] | null;
  favoriteMovies: IMovie[];
  watchLaterMovies: IMovie[];
  currentMovieDetails: IMovieDetails | null;
  searchQuery: string;
  foundMovies: IMovie[] | null;
  sortMoviesBy: SortingMovies;
}

export const initialState: MovieState = {
  movies: null,
  favoriteMovies: [],
  watchLaterMovies: [],
  currentMovieDetails: null,
  searchQuery: '',
  foundMovies: null,
  sortMoviesBy: SortingMovies.None,
};
