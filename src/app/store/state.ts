import { IMovie } from '../models/movie.model';

export interface MovieState {
  movies: IMovie[] | null;
}

export const initialState: MovieState = {
  movies: null,
};
