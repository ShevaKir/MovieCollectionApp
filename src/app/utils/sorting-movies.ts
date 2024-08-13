import { ISorter } from '../interfaces/sorting';
import { IMovie } from '../models/movie.model';

export class PopularityDescSorting implements ISorter {
  sort(movies: IMovie[]): IMovie[] {
    return [...movies].sort((a, b) => b.popularity - a.popularity);
  }
}

export class PopularityAscSorting implements ISorter {
  sort(movies: IMovie[]): IMovie[] {
    return [...movies].sort((a, b) => a.popularity - b.popularity);
  }
}

export class RatingDescSorting implements ISorter {
  sort(movies: IMovie[]): IMovie[] {
    return [...movies].sort((a, b) => b.vote_average - a.vote_average);
  }
}

export class RatingAscSorting implements ISorter {
  sort(movies: IMovie[]): IMovie[] {
    return [...movies].sort((a, b) => a.vote_average - b.vote_average);
  }
}

export class ReleaseDateDescSorting implements ISorter {
  sort(movies: IMovie[]): IMovie[] {
    return [...movies].sort(
      (a, b) =>
        new Date(b.release_date).getTime() - new Date(a.release_date).getTime()
    );
  }
}

export class ReleaseDateAscSorting implements ISorter {
  sort(movies: IMovie[]): IMovie[] {
    return [...movies].sort(
      (a, b) =>
        new Date(a.release_date).getTime() - new Date(b.release_date).getTime()
    );
  }
}

export class TitleSorting implements ISorter {
  sort(movies: IMovie[]): IMovie[] {
    return [...movies].sort((a, b) => a.title.localeCompare(b.title));
  }
}
