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
  public favouriteList: ReadonlyArray<IMovie> = [];
  public watchLaterList: ReadonlyArray<IMovie> = [];
  public selectedSubMovieList: SelectMovieList = SelectMovieList.Favourite;
  public movies!: ReadonlyArray<IMovie>;
  public titleSubList: string = '';
  public selectMovieList = SelectMovieList;
  constructor(private router: Router, protected movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.getMovieList(this.movieCollection).subscribe((movies) => {
      this.movies = movies.results;
    });

    this.movieService.getFavourites().subscribe((movies) => {
      this.favouriteList = movies;
    })

    this.movieService.getWatchLaters().subscribe((movies) => {
      this.watchLaterList = movies;
    })
  }

  addMovieToFavourite(movie: IMovie) {
    this.movieService.addMovieToFavourite(movie);
  }

  addMovieToWatchLater(movie: IMovie) {
    this.movieService.addMovieToWatchLater(movie);
  }

  removeMovieFromFavouriteList(id: number) {
    const movie: IMovie = this.favouriteList.find((m) => m.id === id) as IMovie;
    this.movieService.removeMovieFromFavourite(movie);
  }

  removeMovieFromWatchLaterList(id: number) {
    const movie: IMovie = this.watchLaterList.find((m) => m.id === id) as IMovie;
    this.movieService.removeMovieFromWatchLater(movie);
  }

  navigateToDetail(id: number) {
    this.router.navigate(['movie', id], {
      queryParams: { collection: this.movieCollection },
    });
  }

  selectedMovieList(selectedTab: SelectMovieList) {
    this.selectedSubMovieList = selectedTab;
  }
}
