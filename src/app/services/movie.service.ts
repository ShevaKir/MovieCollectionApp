import { Injectable } from '@angular/core';
import { IMovie } from '../models/movie.model';
import { MovieCollection } from '../enums/movie-collection';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { IMovieResponse } from '../models/movie-response.model';
import { IMovieDetails } from '../models/movie-details.model';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private _apiUrl: string = environment.apiUrl;
  private _favourite: Set<IMovie> = new Set();
  private _watchLater: Set<IMovie> = new Set();

  constructor(private http: HttpClient) {}

  public getMovieList(collection: MovieCollection): Observable<IMovieResponse> {
    return this.http.get<IMovieResponse>(
      `${this._apiUrl}/${collection}?api_key=${environment.apiKey}&page=1`
    );
  }

  public getMovieById(id: number): Observable<IMovieDetails> {
    return this.http.get<IMovieDetails>(
      `${this._apiUrl}/${id}?api_key=${environment.apiKey}`
    );
  }

  public getFavourites(): ReadonlyArray<IMovie> {
    return Array.from(this._favourite);
  }
  public getWatchLaters(): ReadonlyArray<IMovie> {
    return Array.from(this._watchLater);
  }

  public addMovieToFavourite(movie: IMovie) {
    this._favourite.add(movie);
  }
  public addMovieToWatchLater(movie: IMovie) {
    this._watchLater.add(movie);
  }

  public removeMovieFromFavourite(movie: IMovie) {
    this._favourite.delete(movie);
  }

  public removeMovieFromWatchLater(movie: IMovie) {
    this._watchLater.delete(movie);
  }
}

export interface IMovieId {
  id: number;
}
