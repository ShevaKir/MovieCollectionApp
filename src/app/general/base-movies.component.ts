import { Component } from '@angular/core';
import { IMovie } from '../models/IMovieCard';
import { Router } from '@angular/router';
import { MovieCollection } from '../enums/MovieCollection';
import { MovieService } from '../services/movie.service';

@Component({
  template: '',
})
export abstract class BaseMoviesComponent {
  abstract movieCollection: MovieCollection;

  constructor(
    private router: Router,
    protected movieService: MovieService
  ) {}

  addMovieToFavourite(movie: IMovie) {
    this.movieService.addMovieToFavorite(movie, this.movieCollection);
  }

  addMovieToWatchLater(movie: IMovie) {
    this.movieService.addMovieToWatchLater(movie, this.movieCollection);
  }

  navigateToDetail(id: number) {
    this.router.navigate(['movie', id], {
      queryParams: { collection: this.movieCollection },
    });
  }
}
