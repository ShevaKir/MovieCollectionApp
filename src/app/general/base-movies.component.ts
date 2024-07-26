import { Component, OnInit } from '@angular/core';
import { IMovie } from '../models/movie.model';
import { Router } from '@angular/router';
import { MovieCollection } from '../enums/movie-collection';
import { MovieService } from '../services/movie.service';
import { SelectMovieList } from '../enums/select-movie-list';
import { Store } from '@ngrx/store';
import {
  addToFavorite,
  addToWatchLater,
  loadMovies,
  removeFromFavorite,
  removeFromWatchLater,
} from '../store/actions';
import {
  selectFavoriteMovies,
  selectMovies,
  selectWatchLaterMovies,
} from '../store/selectors';

@Component({
  template: '',
})
export abstract class BaseMoviesComponent implements OnInit {
  abstract movieCollection: MovieCollection;
  public selectedSubMovieList: SelectMovieList = SelectMovieList.Favourite;
  public selectMovieList = SelectMovieList;
  public selectedMovies$ = this.store.select(selectMovies);
  public selectedFavoriteMovies$ = this.store.select(selectFavoriteMovies);
  public selectedWatchLaterMovies$ = this.store.select(selectWatchLaterMovies);

  constructor(
    private router: Router,
    protected movieService: MovieService,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.store.dispatch(loadMovies({ category: this.movieCollection }));
  }

  addMovieToFavourite(movie: IMovie) {
    this.store.dispatch(addToFavorite({ id: movie.id }));
  }

  addMovieToWatchLater(movie: IMovie) {
    this.store.dispatch(addToWatchLater({ id: movie.id }));
  }

  removeMovieFromFavouriteList(id: number) {
    this.store.dispatch(removeFromFavorite({ id }));
  }

  removeMovieFromWatchLaterList(id: number) {
    this.store.dispatch(removeFromWatchLater({ id }));
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
