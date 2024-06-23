import { Component } from '@angular/core';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';
import { IMovie } from '../../models/IMovieCard';
import { nowPlayingMovies } from '../../mock-data/mock-data';
import { Router, RouterOutlet } from '@angular/router';
import { SubHeaderComponent } from '../../components/sub-header/sub-header.component';

@Component({
  selector: 'app-now-playing-page',
  standalone: true,
  imports: [
    MovieCardComponent,
    RouterOutlet,
    SubHeaderComponent,
  ],
  templateUrl: './now-playing-page.component.html',
  styleUrl: './now-playing-page.component.scss',
})
export class NowPlayingPageComponent {
  movies: IMovie[] = nowPlayingMovies;

  constructor(private router: Router) {}

  navigateToDetail(id: number) {
    this.router.navigate(['now-playing', id]);
  }

  favouriteIds: number[] = [];
  watchLaterIds: number[] = [];

  addMovieToFavourite(movie: IMovie) {
    const index = this.favouriteIds.indexOf(movie.id);
    if (index > -1) {
      this.favouriteIds.splice(index, 1);
    } else {
      this.favouriteIds.push(movie.id);
    }
    console.log(this.favouriteIds);
  }

  addMovieToWatchLater(movie: IMovie) {
    const index = this.watchLaterIds.indexOf(movie.id);
    if (index > -1) {
      this.watchLaterIds.splice(index, 1);
    } else {
      this.watchLaterIds.push(movie.id);
    }
  }
}
