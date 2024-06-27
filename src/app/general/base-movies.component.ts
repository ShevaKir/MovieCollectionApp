import { Component } from '@angular/core';
import { IMovie } from '../models/IMovieCard';
import { Router } from '@angular/router';
import { MovieCollection } from '../enums/MovieCollection';
import { MovieService } from '../services/movie.service';
import { SelectMovieList } from '../enums/SelectMovieList';

@Component({
  template: '',
})
export abstract class BaseMoviesComponent {
  abstract movieCollection: MovieCollection;
  public subMovieList: ReadonlyArray<IMovie> = [];
  public selectedSubMovieList: SelectMovieList = SelectMovieList.Empty;
  constructor(private router: Router, protected movieService: MovieService) {}

  addMovieToFavourite(movie: IMovie) {
    this.movieService.addMovieToFavorite(movie, this.movieCollection);
    this.updateSubMovieList();
  }

  addMovieToWatchLater(movie: IMovie) {
    this.movieService.addMovieToWatchLater(movie, this.movieCollection);
    this.updateSubMovieList();
  }

  navigateToDetail(id: number) {
    this.router.navigate(['movie', id], {
      queryParams: { collection: this.movieCollection },
    });
  }

  private updateSubMovieList() {
    switch (this.selectedSubMovieList) {
      case SelectMovieList.Empty:
        this.subMovieList = [];
        break;
      case SelectMovieList.Favorite:
        this.subMovieList = this.movieService.getFavorites(
          this.movieCollection
        );
        break;
      case SelectMovieList.WatchLater:
        this.subMovieList = this.movieService.getWatchLaters(
          this.movieCollection
        );
        break;
    }
  }

  selectedMovieList(selectedTab: SelectMovieList) {
    this.selectedSubMovieList = selectedTab;
    this.updateSubMovieList();
  }
}
