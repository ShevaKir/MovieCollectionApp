import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, switchMap, throwError } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _apiUrl: string = environment.apiUrl;
  private _apiKey: string = environment.apiKey;
  private _username = environment.user_name;
  private _password = environment.password;

  constructor(private http: HttpClient) {}

  // Get the request token
  private getRequestToken(): Observable<string> {
    const url = `${this._apiUrl}/authentication/token/new?api_key=${this._apiKey}`;
    return this.http.get<any>(url).pipe(
      map((response) => response.request_token),
      catchError(this.handleError)
    );
  }

  private validateRequestToken(requestToken: string): Observable<void> {
    const url = `${this._apiUrl}/authentication/token/validate_with_login?api_key=${this._apiKey}`;
    const body = {
      username: this._username,
      password: this._password,
      request_token: requestToken,
    };
    console.log(body);

    // const headers = new HttpHeaders({
    //   Authorization: `Bearer ${environment.accessToken}`,
    // });

    return this.http.post<any>(url, body).pipe(
      map(() => {}),
      catchError(this.handleError)
    );
  }

  private createSession(requestToken: string): Observable<string> {
    const url = `${this._apiUrl}/authentication/session/new?api_key=${this._apiKey}`;
    const body = { request_token: requestToken };
    return this.http.post<any>(url, body).pipe(
      map((response) => response.session_id),
      catchError(this.handleError)
    );
  }

  private getAccountId(sessionId: string): Observable<number> {
    const url = `${this._apiUrl}/account?api_key=${this._apiKey}&session_id=${sessionId}`;
    return this.http.get<any>(url).pipe(
      map((response) => response.id),
      catchError(this.handleError)
    );
  }

  public authenticateAndGetAccountId(): Observable<number> {
    return this.getRequestToken().pipe(
      switchMap((requestToken) => {
        console.log(requestToken);
        return this.validateRequestToken(requestToken).pipe(
          switchMap(() => this.createSession(requestToken)),
          switchMap((sessionId) => this.getAccountId(sessionId))
        );
      })
    );
  }

  private handleError(error: any) {
    console.error('An error occurred:', error);
    return throwError(error);
  }
}
