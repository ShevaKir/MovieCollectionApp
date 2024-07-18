import { IMovie } from '../models/movie.model';

export interface MovieState {
  movies: IMovie[] | null;
  favoriteMovies: number[];
}

export const initialState: MovieState = {
  movies: null,
  favoriteMovies: [],
};
