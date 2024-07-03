import { Injectable } from '@angular/core';
import { IMovie } from '../models/movie.model';
import {
  nowPlayingMovies,
  popularMovies,
  topRatedMovies,
  upcomingMovies,
} from '../mock-data/mock-data';
import { MovieCollection } from '../enums/MovieCollection';
import { Movies } from '../models/Movies';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { IMovieResponse } from '../models/movie-response.model';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private _apiUrl: string = environment.apiUrl;
  private _accessToken: string = environment.accessToken;
  private _movies: { [key: string]: Movies } = {
    [MovieCollection.NowPlaying]: new Movies(nowPlayingMovies),
    [MovieCollection.Popular]: new Movies(popularMovies),
    [MovieCollection.TopRated]: new Movies(topRatedMovies),
    [MovieCollection.Upcoming]: new Movies(upcomingMovies),
  };

  constructor(private http: HttpClient) {}

  public getMovieList(collection: MovieCollection): Observable<IMovieResponse> {
    const headers = new HttpHeaders({
      accept: 'application/json',
      Authorization: `Bearer ${this._accessToken}`,
    });
    return this.http.get<IMovieResponse>(`${this._apiUrl}/${collection}`, { headers });
  }

  public getMovieById(id: number, collection: MovieCollection): IMovie {
    return this._movies[collection].getMovieById(id);
  }

  public getFavourites(collection: MovieCollection): ReadonlyArray<IMovie> {
    return this._movies[collection].getFavouriteList();
  }
  public getWatchLaters(collection: MovieCollection): ReadonlyArray<IMovie> {
    return this._movies[collection].getWatchLaterList();
  }

  public addMovieToFavourite(movie: IMovie, collection: MovieCollection) {
    this._movies[collection].addFavourite(movie);
  }
  public addMovieToWatchLater(movie: IMovie, collection: MovieCollection) {
    this._movies[collection].addWatchLater(movie);
  }

  public removeMovieFromFavourite(movie: IMovie, collection: MovieCollection) {
    this._movies[collection].removeFavourite(movie);
  }

  public removeMovieFromWatchLater(movie: IMovie, collection: MovieCollection) {
    this._movies[collection].removeWatchLater(movie);
  }
}
