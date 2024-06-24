import { Component, Injector, OnInit } from '@angular/core';
import { IMovie } from '../models/IMovieCard';
import { ActivatedRoute } from '@angular/router';

@Component({
  template: '',
})
export abstract class BaseMoviesComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    let favouriteId = this.route.snapshot.queryParamMap.get('favourite');
    let watchLaterId = this.route.snapshot.queryParamMap.get('watchLater');

    if(favouriteId !== null) {
      this.favouriteIds.push(+favouriteId);
    }

    if(watchLaterId !== null) {
      this.watchLaterIds.push(+watchLaterId);
    }
  }

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
