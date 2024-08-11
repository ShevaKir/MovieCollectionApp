import { IMovie } from '../models/movie.model';

export interface ISorting {
  sort(movies: IMovie[]): IMovie[];
}
