import { IMovie } from './IMovieCard';

export class Movies {
  private _movies: IMovie[] = [];
  private _favorite: Set<IMovie> = new Set();
  private _watchLater: Set<IMovie> = new Set();

  constructor(movies: IMovie[]) {
    this._movies = movies;
  }

  getMovieList(): ReadonlyArray<IMovie> {
    return this._movies;
  }

  getFavoriteList(): ReadonlyArray<IMovie> {
    return Array.from(this._favorite);
  }

  getWatchLaterList(): ReadonlyArray<IMovie> {
    return Array.from(this._watchLater);
  }

  addFavorite(movie: IMovie) {
    this._favorite.add(movie);
  }
  removeFavorite(movie: IMovie) {
    this._favorite.delete(movie);
  }
  addWatchLater(movie: IMovie) {
    this._watchLater.add(movie);
  }
  removeWatchLater(movie: IMovie) {
    this._watchLater.delete(movie);
  }
}
