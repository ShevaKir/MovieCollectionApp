import { Component } from '@angular/core';
import { IMovie } from '../models/IMovieCard';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieCollection } from '../enums/MovieCollection';

@Component({
  template: '',
})
export abstract class BaseMoviesComponent {
  abstract movieCollection: MovieCollection;
  favouriteIds: number[] = [];
  watchLaterIds: number[] = [];

  constructor(private router: Router, private route: ActivatedRoute) {}

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

  navigateToDetail(id: number) {
    this.router.navigate(['movie', id], {
      queryParams: { collection: this.movieCollection },
    });
  }
}
