import { Component } from '@angular/core';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { IMovieCard } from '../../models/IMovieCard';
import { CommonModule } from '@angular/common';

import moviesMockData from '../../../assets/mock-data/movies.json';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [MovieCardComponent, CommonModule],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss'
})
export class MovieListComponent {
  movies: IMovieCard[] = moviesMockData;
  favouriteMovies: Set<IMovieCard> = new Set<IMovieCard>();
  watchLaterMovies: Set<IMovieCard> = new Set<IMovieCard>();

  addMovieToFavourite(movie: IMovieCard) {
    if(this.favouriteMovies.has(movie)) {
      this.favouriteMovies.delete(movie);
    }
    else {
      this.favouriteMovies.add(movie);
    }
  }

  addMovieToWatchLater(movie: IMovieCard) {
    if(this.watchLaterMovies.has(movie)) {
      this.watchLaterMovies.delete(movie);
    }
    else {
      this.watchLaterMovies.add(movie);
    }
  }
}
