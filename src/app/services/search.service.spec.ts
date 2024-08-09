import { TestBed } from '@angular/core/testing';

import { SearchService } from './search.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from '../../environments/environment';
import { IMovie } from '../models/movie.model';
import { moviesMock } from '../mock/movies-mock';

describe('SearchService', () => {
  let service: SearchService;
  let httpMock: HttpTestingController;
  const apiUrl = environment.apiUrl;
  const apiKey = environment.apiKey;

  const mockMovies: IMovie[] = moviesMock;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SearchService],
    });

    service = TestBed.inject(SearchService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should search movie using API', () => {
    const query = 'movie'
    service.searchMovie(query).subscribe((response) => {
      expect(response).toEqual(mockMovies);
    });

    const req = httpMock.expectOne(
      `${apiUrl}/search/movie?query=${query}&api_key=${environment.apiKey}`
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockMovies);
  });
});
