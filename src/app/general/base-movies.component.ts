import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { IMovie } from '../models/movie.model';
import { Router } from '@angular/router';
import { MovieCollection } from '../enums/movie-collection';
import { MovieService } from '../services/movie.service';
import { SelectMovieList } from '../enums/select-movie-list';
import { Observable, Subscription } from 'rxjs';
import { NavigationService } from '../services/navigation.service';

@Component({
  template: '',
})
export abstract class BaseMoviesComponent implements OnInit, OnDestroy {
  abstract movieCollection: MovieCollection;
  public favouriteList: ReadonlyArray<IMovie> = [];
  public watchLaterList: ReadonlyArray<IMovie> = [];
  public selectedSubMovieList: SelectMovieList = SelectMovieList.Favourite;
  public movies!: ReadonlyArray<IMovie>;
  public titleSubList: string = '';
  public selectMovieList = SelectMovieList;

  private subscriptions: Subscription = new Subscription();

  constructor(
    private router: Router,
    protected movieService: MovieService,
    private navigationService: NavigationService
  ) {}

  ngOnInit(): void {
    const movieListSub = this.movieService
      .getMovieList(this.movieCollection)
      .subscribe((movies) => {
        this.movies = movies.results;
      });

    const favouriteListSub = this.movieService
      .getFavourites()
      .subscribe((movies) => {
        this.favouriteList = movies;
      });

    const watchLaterSub = this.movieService
      .getWatchLaters()
      .subscribe((movies) => {
        this.watchLaterList = movies;
      });

    this.subscriptions.add(movieListSub);
    this.subscriptions.add(favouriteListSub);
    this.subscriptions.add(watchLaterSub);
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
    const movie: IMovie = this.watchLaterList.find(
      (m) => m.id === id
    ) as IMovie;
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

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
