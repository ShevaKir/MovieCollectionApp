import { Injectable } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as MovieActions  from './actions';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class MovieEffects {
  constructor(private movieService: MovieService, private actions$: Actions) {}

  loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MovieActions.loadMovies),
      mergeMap((props) => {
        return this.movieService.getMovieList(props.category).pipe(
          map((movies) => MovieActions.loadMoviesSuccess({ movies: movies.results })),
          catchError((error) => of(MovieActions.loadMoviesFailure({ error })))
        );
      })
    )
  );
}
