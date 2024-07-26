import { Component, OnInit } from '@angular/core';
import { IMovie } from '../models/movie.model';
import { Router } from '@angular/router';
import { MovieCollection } from '../enums/movie-collection';
import { MovieService } from '../services/movie.service';
import { SelectMovieList } from '../enums/select-movie-list';
import { Store } from '@ngrx/store';
import { addToFavorite, addToWatchLater, loadMovies } from '../store/actions';
import { selectMovies } from '../store/selectors';

@Component({
  template: '',
})
export abstract class BaseMoviesComponent implements OnInit {
  abstract movieCollection: MovieCollection;
  public selectedSubMovieList: SelectMovieList = SelectMovieList.Favourite;
  public selectMovieList = SelectMovieList;
  public selectedMovies$ = this.store.select(selectMovies);

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

  navigateToDetail(id: number) {
    this.router.navigate(['movie', id], {
      queryParams: { collection: this.movieCollection },
    });
  }

  selectedMovieList(selectedTab: SelectMovieList) {
    this.selectedSubMovieList = selectedTab;
  }
}
