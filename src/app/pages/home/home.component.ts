import { Component, OnInit } from '@angular/core';
import { SearchComponent } from '../../components/search/search.component';
import { Store } from '@ngrx/store';
import { searchMoviesByTitle } from '../../store/actions';
import { selectFoundMovies } from '../../store/selectors';
import { AsyncPipe } from '@angular/common';
import { MovieCardComponent } from "../../components/movie-card/movie-card.component";
import { SortComponent } from "../../components/sort/sort.component";
import { SortingMoviesOptions } from '../../utils/sorting-movies-options';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SearchComponent, AsyncPipe, MovieCardComponent, SortComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  public selectedFoundMovies$ = this.store.select(selectFoundMovies);
  sortingMoviesOptions = SortingMoviesOptions;

  constructor(private store: Store) {}

  ngOnInit(): void {
  }

  handleSortSelection(selectedOption: string): void {
    console.log('Selected sort option:', selectedOption);
  }

  handleSearch(query: string) {
    this.store.dispatch(searchMoviesByTitle({ query }));
  }
}
