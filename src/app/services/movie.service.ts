import { Injectable } from '@angular/core';
import { IMovie } from '../models/IMovieCard';
import {
  nowPlayingMovies,
  popularMovies,
  topRatedMovies,
  upcomingMovies,
} from '../mock-data/mock-data';
import { MovieCollection } from '../enums/MovieCollection';
import { Movies } from '../models/Movies';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private _movies: { [key: string]: Movies } = {
    [MovieCollection.NowPlaying]: new Movies(nowPlayingMovies),
    [MovieCollection.Popular]: new Movies(popularMovies),
    [MovieCollection.TopRated]: new Movies(topRatedMovies),
    [MovieCollection.Upcoming]: new Movies(upcomingMovies),
  };

  constructor() {}

  public getNowPlayingMovies(): ReadonlyArray<IMovie> {
    return this._movies[MovieCollection.NowPlaying].getMovieList();
  }
  public getPopularMovies(): ReadonlyArray<IMovie> {
    return this._movies[MovieCollection.Popular].getMovieList();
  }
  public getTopRatedMovies(): ReadonlyArray<IMovie> {
    return this._movies[MovieCollection.TopRated].getMovieList();
  }
  public getUpcomingMovies(): ReadonlyArray<IMovie> {
    return this._movies[MovieCollection.Upcoming].getMovieList();
  }

  public getMovieById(id: number, collection: MovieCollection): IMovie {
    return this._movies[collection].getMovieById(id);
  }

  public getFavorites(collection: MovieCollection): ReadonlyArray<IMovie> {
    return this._movies[collection].getFavoriteList();
  }
  public getWatchLaters(collection: MovieCollection): ReadonlyArray<IMovie> {
    return this._movies[collection].getWatchLaterList();
  }

  public addMovieToFavorite(movie: IMovie, collection: MovieCollection) {
    this._movies[collection].addFavorite(movie);
  }
  public addMovieToWatchLater(movie: IMovie, collection: MovieCollection) {
    this._movies[collection].addWatchLater(movie);
  }
}
