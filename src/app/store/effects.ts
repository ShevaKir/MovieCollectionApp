import { Injectable } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as MovieActions from './actions';
import { catchError, map, mergeMap, of, switchMap } from 'rxjs';
import { SearchService } from '../services/search.service';

@Injectable()
export class MovieEffects {
  constructor(
    private movieService: MovieService,
    private searchService: SearchService,
    private actions$: Actions
  ) {}

  loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MovieActions.loadMovies),
      mergeMap((props) => {
        return this.movieService.getMovieList(props.category).pipe(
          map((movies) =>
            MovieActions.loadMoviesSuccess({ movies: movies.results })
          ),
          catchError((error) => of(MovieActions.loadMoviesFailure({ error })))
        );
      })
    )
  );

  loadMovieDetailsById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MovieActions.loadMovieDetailsById),
      mergeMap((props) => {
        return this.movieService.getMovieById(props.id).pipe(
          map((movie) =>
            MovieActions.loadMovieDetailsByIdSuccess({ movieDetails: movie })
          ),
          catchError((error) =>
            of(MovieActions.loadMovieDetailsByIdFailture({ error }))
          )
        );
      })
    )
  );

  addToFavorite$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MovieActions.addToFavorite),
      mergeMap((props) => {
        return this.movieService.getMovieById(props.id).pipe(
          map((movie) =>
            MovieActions.loadFavoriteMovieSuccess({ movie: movie })
          ),
          catchError((error) =>
            of(MovieActions.loadFavoriteMovieFailure({ error }))
          )
        );
      })
    )
  );

  addToWatchLater$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MovieActions.addToWatchLater),
      mergeMap((props) => {
        return this.movieService.getMovieById(props.id).pipe(
          map((movie) =>
            MovieActions.loadWatchLaterMovieSuccess({ movie: movie })
          ),
          catchError((error) =>
            of(MovieActions.loadWatchlaterMovieFailure({ error }))
          )
        );
      })
    )
  );

  searchMovieByTitle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MovieActions.searchMoviesByTitle),
      switchMap((props) => {
        return this.searchService.searchMovie(props.query).pipe(
          map((movies) =>
            MovieActions.loadFoundMoviesSuccess({
              query: props.query,
              movies: movies,
            })
          ),
          catchError((error) =>
            of(MovieActions.loadFoundMoviesFailure({ error }))
          )
        );
      })
    )
  );
}
