import { Component, OnInit } from '@angular/core';
import { SearchComponent } from '../../components/search/search.component';
import { Store } from '@ngrx/store';
import { searchMoviesByTitle, sortMoviesBy } from '../../store/actions';
import { selectFoundMovies } from '../../store/selectors';
import { AsyncPipe } from '@angular/common';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';
import { SortComponent } from '../../components/sort/sort.component';
import {
  SortingMovies,
  sortingMoviesOptions,
} from '../../utils/sorting-movies-options';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SearchComponent, AsyncPipe, MovieCardComponent, SortComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  public selectedFoundMovies$ = this.store.select(selectFoundMovies);
  sortingMovies: any = sortingMoviesOptions;

  constructor(private store: Store) {}

  ngOnInit(): void {}

  handleSortSelection(selectedOption: SortingMovies): void {
    this.store.dispatch(sortMoviesBy({ option: selectedOption }));
  }

  handleSearch(query: string) {
    this.store.dispatch(searchMoviesByTitle({ query }));
  }
}
