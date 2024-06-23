import { Component, Injector } from '@angular/core';
import { IMovie } from '../models/IMovieCard';

@Component({
  template: '',
})
export abstract class BaseMoviesComponent {
    favouriteIds: number[] = [];
    watchLaterIds: number[] = [];
  
    addMovieToFavourite(movie: IMovie) {
      const index = this.favouriteIds.indexOf(movie.id);
      if (index > -1) {
        this.favouriteIds.splice(index, 1);
      } else {
        this.favouriteIds.push(movie.id);
      }
    }
  
    addMovieToWatchLater(movie: IMovie) {
      const index = this.watchLaterIds.indexOf(movie.id);
      if (index > -1) {
        this.watchLaterIds.splice(index, 1);
      } else {
        this.watchLaterIds.push(movie.id);
      }
    }
}
