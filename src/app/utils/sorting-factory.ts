import { ISorter } from '../interfaces/sorting';
import {
  PopularityAscSorting,
  PopularityDescSorting,
  RatingAscSorting,
  RatingDescSorting,
} from './sorting-movies';
import { SortingMoviesOptions } from './sorting-movies-options';

export class SortingMoviesFactory {
  static createSortingStrategy(option: SortingMoviesOptions): ISorter {
    switch (option) {
      case SortingMoviesOptions.PopularityDesc:
        return new PopularityDescSorting();
      case SortingMoviesOptions.PopularityAsc:
        return new PopularityAscSorting();
      case SortingMoviesOptions.RatingDesc:
        return new RatingDescSorting();
      case SortingMoviesOptions.RatingAsc:
        return new RatingAscSorting();
      default:
        throw new Error('Unknown sorting option');
    }
  }
}
