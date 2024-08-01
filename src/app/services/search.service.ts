import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMovie } from '../models/movie.model';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private _accessToken = environment.accessToken;
  private _apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  searchMovie(title: string): Observable<IMovie[]> {
    return this.http.get<IMovie[]>(
      `${this._apiUrl}/search/movie?query=${title}&api_key=${environment.apiKey}`
    );
  }
}
