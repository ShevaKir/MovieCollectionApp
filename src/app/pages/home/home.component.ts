import { Component, OnInit } from '@angular/core';
import { SearchComponent } from '../../components/search/search.component';
import { Store } from '@ngrx/store';
import { searchMoviesByTitle } from '../../store/actions';
import { selectFoundMovies } from '../../store/selectors';
import { AsyncPipe } from '@angular/common';
import { MovieCardComponent } from "../../components/movie-card/movie-card.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SearchComponent, AsyncPipe, MovieCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  public selectedFoundMovies$ = this.store.select(selectFoundMovies);


  constructor(private store: Store) {}

  ngOnInit(): void {
  }

  handleSearch(query: string) {
    this.store.dispatch(searchMoviesByTitle({ query }));
  }
}
