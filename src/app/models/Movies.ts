import { IMovie } from './IMovieCard';

export class Movies {
  private _movies: IMovie[] = [];
  private _favourite: Set<IMovie> = new Set();
  private _watchLater: Set<IMovie> = new Set();

  constructor(movies: IMovie[]) {
    this._movies = movies;
  }

  getMovieList(): ReadonlyArray<IMovie> {
    return this._movies;
  }

  getFavouriteList(): ReadonlyArray<IMovie> {
    return Array.from(this._favourite);
  }

  getWatchLaterList(): ReadonlyArray<IMovie> {
    return Array.from(this._watchLater);
  }

  getMovieById(id: number): IMovie {
    return this._movies.find((m) => m.id === id) as IMovie;
  }

  addFavourite(movie: IMovie) {
    this._favourite.add(movie);
  }
  removeFavourite(movie: IMovie) {
    this._favourite.delete(movie);
  }
  addWatchLater(movie: IMovie) {
    this._watchLater.add(movie);
  }
  removeWatchLater(movie: IMovie) {
    this._watchLater.delete(movie);
  }
}
