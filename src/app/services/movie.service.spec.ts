import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MovieService } from './movie.service';
import { environment } from '../../environments/environment';
import { IMovie } from '../models/movie.model';
import { IMovieResponse } from '../models/movie-response.model';
import { IMovieDetails } from '../models/movie-details.model';
import { MovieCollection } from '../enums/movie-collection';
import { movieDetailsMock, moviesMock } from '../mock/movies-mock';

describe('MovieService', () => {
  let service: MovieService;
  let httpMock: HttpTestingController;

  const mockMoviesResponse: IMovieResponse = {
    results: moviesMock,
    page: 0
  };

  const mockMovieDetails: IMovieDetails = movieDetailsMock;

  const apiUrl = environment.apiUrl;
  const apiKey = environment.apiKey;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MovieService],
    });

    service = TestBed.inject(MovieService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get movie list from API', () => {
    service.getMovieList(MovieCollection.NowPlaying).subscribe((response) => {
      expect(response).toEqual(mockMoviesResponse);
    });

    const req = httpMock.expectOne(
      `${apiUrl}/movie/${MovieCollection.NowPlaying}?api_key=${apiKey}&page=1`
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockMoviesResponse);
  });

  it('should get movie details by ID from API', () => {
    const movieId = 1;

    service.getMovieById(movieId).subscribe((details) => {
      expect(details).toEqual(mockMovieDetails);
    });

    const req = httpMock.expectOne(
      `${apiUrl}/movie/${movieId}?api_key=${apiKey}`
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockMovieDetails);
  });

  it('should add movie to favourites and update the subject', () => {
    const movie: IMovie = { id: 1, title: 'Movie 1' } as IMovie;

    service.addMovieToFavourite(movie);

    service.getFavourites().subscribe((favourites) => {
      expect(favourites).toContain(movie);
    });
  });

  it('should add movie to watch later and update the subject', () => {
    const movie: IMovie = { id: 1, title: 'Movie 1' } as IMovie;

    service.addMovieToWatchLater(movie);

    service.getWatchLaters().subscribe((watchLaters) => {
      expect(watchLaters).toContain(movie);
    });
  });

  it('should remove movie from favourites and update the subject', () => {
    const movie: IMovie = { id: 1, title: 'Movie 1' } as IMovie;
    service.addMovieToFavourite(movie);

    service.removeMovieFromFavourite(movie);

    service.getFavourites().subscribe((favourites) => {
      expect(favourites).not.toContain(movie);
    });
  });

  it('should remove movie from watch later and update the subject', () => {
    const movie: IMovie = { id: 1, title: 'Movie 1' } as IMovie;
    service.addMovieToWatchLater(movie);

    service.removeMovieFromWatchLater(movie);

    service.getWatchLaters().subscribe((watchLaters) => {
      expect(watchLaters).not.toContain(movie);
    });
  });
});
