import { Injectable } from '@angular/core';
import { IMovie } from '../models/movie.model';
import { MovieCollection } from '../enums/movie-collection';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
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
  private _favouriteSubject: BehaviorSubject<IMovie[]> = new BehaviorSubject<IMovie[]>([]);
  private _watchLaterSubject: BehaviorSubject<IMovie[]> = new BehaviorSubject<IMovie[]>([]);


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

  public getFavourites(): Observable<IMovie[]> {
    return this._favouriteSubject;
  }
  public getWatchLaters(): Observable<IMovie[]> {
    return this._watchLaterSubject;
  }

  public addMovieToFavourite(movie: IMovie) {
    this._favourite.add(movie);
    this._favouriteSubject.next(Array.from(this._favourite));
  }
  public addMovieToWatchLater(movie: IMovie) {
    this._watchLater.add(movie);
    this._watchLaterSubject.next(Array.from(this._watchLater))
  }

  public removeMovieFromFavourite(movie: IMovie) {
    this._favourite.delete(movie);
    this._favouriteSubject.next(Array.from(this._favourite));
  }

  public removeMovieFromWatchLater(movie: IMovie) {
    this._watchLater.delete(movie);
    this._watchLaterSubject.next(Array.from(this._watchLater))
  }
}
