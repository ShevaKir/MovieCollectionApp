import { Component, OnInit } from '@angular/core';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';
import { IMovie } from '../../models/IMovieCard';
import { RouterOutlet } from '@angular/router';
import { BaseMoviesComponent } from '../../general/base-movies.component';
import { SubHeaderComponent } from '../../components/sub-header/sub-header.component';
import { MovieCollection } from '../../enums/MovieCollection';
import { SubListComponent } from '../../components/sub-list/sub-list.component';

@Component({
  selector: 'app-upcoming-page',
  standalone: true,
  imports: [
    MovieCardComponent,
    RouterOutlet,
    SubHeaderComponent,
    SubListComponent,
  ],
  templateUrl: './upcoming-page.component.html',
  styleUrl: './upcoming-page.component.scss',
})
export class UpcomingPageComponent
  extends BaseMoviesComponent
  implements OnInit
{
  override movieCollection: MovieCollection = MovieCollection.Upcoming;
  movies!: ReadonlyArray<IMovie>;

  ngOnInit(): void {
    this.movies = this.movieService.getUpcomingMovies();
  }
}
