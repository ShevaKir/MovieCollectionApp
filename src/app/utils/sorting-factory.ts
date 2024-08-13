import { ISorter } from '../interfaces/sorting';
import {
  PopularityAscSorting,
  PopularityDescSorting,
  RatingAscSorting,
  RatingDescSorting,
} from './sorting-movies';
import { SortingMovies } from './sorting-movies-options';

export class SortingMoviesFactory {
  static createSortingStrategy(option: SortingMovies): ISorter {
    switch (option) {
      case SortingMovies.PopularityDesc:
        return new PopularityDescSorting();
      case SortingMovies.PopularityAsc:
        return new PopularityAscSorting();
      case SortingMovies.RatingDesc:
        return new RatingDescSorting();
      case SortingMovies.RatingAsc:
        return new RatingAscSorting();
      default:
        throw new Error('Unknown sorting option');
    }
  }
}
