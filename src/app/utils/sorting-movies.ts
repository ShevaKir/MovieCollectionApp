import { ISorting } from '../interfaces/sorting';
import { IMovie } from '../models/movie.model';

export class PopularityDescSorting implements ISorting {
  sort(movies: IMovie[]): IMovie[] {
    return movies.sort((a, b) => b.popularity - a.popularity);
  }
}

export class PopularityAscSorting implements ISorting {
  sort(movies: IMovie[]): IMovie[] {
    return movies.sort((a, b) => a.popularity - b.popularity);
  }
}

export class RatingDescSorting implements ISorting {
  sort(movies: IMovie[]): IMovie[] {
    return movies.sort((a, b) => b.vote_average - a.vote_average);
  }
}

export class RatingAscSorting implements ISorting {
  sort(movies: IMovie[]): IMovie[] {
    return movies.sort((a, b) => a.vote_average - b.vote_average);
  }
}
