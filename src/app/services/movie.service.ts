import { Injectable } from '@angular/core';
import { IMovie } from '../models/movie.model';
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

  constructor(private http: HttpClient) {}

  public getMovieList(collection: MovieCollection): Observable<IMovieResponse> {
    const headers = new HttpHeaders({
      accept: 'application/json',
      Authorization: `Bearer ${this._accessToken}`,
    });
    return this.http.get<IMovieResponse>(`${this._apiUrl}/${collection}`, {
      headers,
    });
  }

  public getMovieById(id: number, collection: MovieCollection): IMovie {
    throw new Error();
  }

  public getFavourites(collection: MovieCollection): ReadonlyArray<IMovie> {
    throw new Error();
  }
  public getWatchLaters(collection: MovieCollection): ReadonlyArray<IMovie> {
    throw new Error();
  }

  public addMovieToFavourite(movie: IMovie, collection: MovieCollection) {
    throw new Error();
  }
  public addMovieToWatchLater(movie: IMovie, collection: MovieCollection) {
    throw new Error();
  }

  public removeMovieFromFavourite(movie: IMovie, collection: MovieCollection) {
    throw new Error();
  }

  public removeMovieFromWatchLater(movie: IMovie, collection: MovieCollection) {
    throw new Error();
  }
}
