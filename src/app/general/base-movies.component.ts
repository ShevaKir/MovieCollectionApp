import { Component } from '@angular/core';
import { IMovie } from '../models/movie.model';
import { Router } from '@angular/router';
import { MovieCollection } from '../enums/movie-collection';
import { MovieService } from '../services/movie.service';
import { SelectMovieList } from '../enums/select-movie-list';

@Component({
  template: '',
})
export abstract class BaseMoviesComponent {
  abstract movieCollection: MovieCollection;
  public subMovieList: ReadonlyArray<IMovie> = [];
  public selectedSubMovieList: SelectMovieList = SelectMovieList.Favourite;
  public movies!: ReadonlyArray<IMovie>;
  public titleSubList: string = '';
  constructor(private router: Router, protected movieService: MovieService) {}

  ngOnInit(): void {
    this.updateSubMovieList();
    this.movieService.getMovieList(this.movieCollection).subscribe((movies) => {
      this.movies = movies.results;
    });
  }

  addMovieToFavourite(movie: IMovie) {
    this.movieService.addMovieToFavourite(movie);
    this.updateSubMovieList();
  }

  addMovieToWatchLater(movie: IMovie) {
    this.movieService.addMovieToWatchLater(movie);
    this.updateSubMovieList();
  }

  removeMovie(id: number) {
    const movie: IMovie = this.subMovieList.find((m) => m.id === id) as IMovie;
    switch (this.selectedSubMovieList) {
      case SelectMovieList.Favourite:
        this.movieService.removeMovieFromFavourite(movie);
        break;
      case SelectMovieList.WatchLater:
        this.movieService.removeMovieFromWatchLater(movie);
        break;
    }
    this.updateSubMovieList();
  }

  navigateToDetail(id: number) {
    this.router.navigate(['movie', id], {
      queryParams: { collection: this.movieCollection },
    });
  }

  private updateSubMovieList() {
    switch (this.selectedSubMovieList) {
      case SelectMovieList.Favourite:
        this.titleSubList = 'List of favourite movies';
        this.subMovieList = this.movieService.getFavourites();
        break;
      case SelectMovieList.WatchLater:
        this.titleSubList = 'List of watch later movies';
        this.subMovieList = this.movieService.getWatchLaters();
        break;
    }
  }

  selectedMovieList(selectedTab: SelectMovieList) {
    this.selectedSubMovieList = selectedTab;
    this.updateSubMovieList();
  }
}
