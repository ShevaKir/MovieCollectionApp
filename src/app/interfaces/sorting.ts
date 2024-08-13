import { IMovie } from '../models/movie.model';

export interface ISorter {
  sort(movies: IMovie[]): IMovie[];
}
