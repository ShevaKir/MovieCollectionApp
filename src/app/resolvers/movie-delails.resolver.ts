import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Store } from '@ngrx/store';
import { loadMovieDetailsById } from '../store/actions';

@Injectable({
  providedIn: 'root',
})
export class MovieDetailsResolver implements Resolve<Boolean> {
  constructor(private store: Store) {}

  resolve(route: ActivatedRouteSnapshot): boolean {
    const id = +route.params['id'];
    this.store.dispatch(loadMovieDetailsById({ id }));

    return true;
  }
}
