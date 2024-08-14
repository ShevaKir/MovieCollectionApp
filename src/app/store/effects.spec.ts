import { ReplaySubject, of } from 'rxjs';
import { MovieEffects } from './effects';
import { MovieService } from '../services/movie.service';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { IMovie } from '../models/movie.model';
import { movieDetailsMock, moviesMock } from '../mock/movies-mock';
import {
  addToFavorite,
  addToWatchLater,
  loadFavoriteMovieSuccess,
  loadFoundMoviesSuccess,
  loadMovieDetailsById,
  loadMovieDetailsByIdSuccess,
  loadMovies,
  loadMoviesSuccess,
  loadWatchLaterMovieSuccess,
  searchMoviesByTitle,
} from './actions';
import { MovieCollection } from '../enums/movie-collection';
import { IMovieDetails } from '../models/movie-details.model';
import { SearchService } from '../services/search.service';

describe('Effects', () => {
  let effects: MovieEffects;
  let actions$: ReplaySubject<any>;
  let movieService: MovieService;
  let searchService: SearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MovieEffects,
        provideMockActions(() => actions$),
        provideMockStore(),
        {
          provide: MovieService,
          useValue: {
            getMovieList: jest.fn(),
            getMovieById: jest.fn(),
            searchMovie: jest.fn(),
          },
        },
        {
          provide: SearchService,
          useValue: {
            searchMovie: jest.fn(),
          },
        },
      ],
    });

    effects = TestBed.inject(MovieEffects);
    movieService = TestBed.inject(MovieService);
    searchService = TestBed.inject(SearchService);
    actions$ = new ReplaySubject(1);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  it('should return loadMoviesSuccess on success', (done) => {
    const mockMoviesResponse = { results: moviesMock };

    actions$.next(loadMovies({ category: MovieCollection.NowPlaying }));
    (movieService.getMovieList as jest.Mock).mockReturnValue(
      of(mockMoviesResponse)
    );

    effects.loadMovies$.subscribe((result) => {
      expect(result).toEqual(loadMoviesSuccess({ movies: moviesMock }));
      done();
    });
  });

  it('should return loadMovieDetailsByIdSuccess on success', (done) => {
    const movieDetails: IMovieDetails = movieDetailsMock;
    const movieId = 1;

    actions$.next(loadMovieDetailsById({ id: movieId }));
    (movieService.getMovieById as jest.Mock).mockReturnValue(of(movieDetails));

    effects.loadMovieDetailsById$.subscribe((result) => {
      expect(result).toEqual(loadMovieDetailsByIdSuccess({ movieDetails }));
      done();
    });
  });

  it('should return loadFavoriteMovieSuccess on success', (done) => {
    const movie: IMovie = moviesMock[0];
    const movieId = 1;

    actions$.next(addToFavorite({ id: movieId }));
    (movieService.getMovieById as jest.Mock).mockReturnValue(of(movie));

    effects.addToFavorite$.subscribe((result) => {
      expect(result).toEqual(loadFavoriteMovieSuccess({ movie }));
      done();
    });
  });

  it('should return loadWatchLaterMovieSuccess on success', (done) => {
    const movie: IMovie = moviesMock[0];
    const movieId = 1;

    actions$.next(addToWatchLater({ id: movieId }));
    (movieService.getMovieById as jest.Mock).mockReturnValue(of(movie));

    effects.addToWatchLater$.subscribe((result) => {
      expect(result).toEqual(loadWatchLaterMovieSuccess({ movie }));
      done();
    });
  });
  it('should return searchMovieByTitle on success', (done) => {
    const mockMovies = moviesMock;

    actions$.next(searchMoviesByTitle({ query: 'movie' }));
    (searchService.searchMovie as jest.Mock).mockReturnValue(
      of(mockMovies)
    );

    effects.searchMovieByTitle$.subscribe((result) => {
      expect(result).toEqual(loadFoundMoviesSuccess({ query: 'movie', movies: mockMovies }));
      done();
    });
  });
});
