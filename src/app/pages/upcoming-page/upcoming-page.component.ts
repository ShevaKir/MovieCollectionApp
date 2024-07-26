import { Component } from '@angular/core';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';
import { RouterOutlet } from '@angular/router';
import { BaseMoviesComponent } from '../../general/base-movies.component';
import { MovieCollection } from '../../enums/movie-collection';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-upcoming-page',
  standalone: true,
  imports: [
    MovieCardComponent,
    RouterOutlet,
    AsyncPipe
  ],
  templateUrl: './upcoming-page.component.html',
  styleUrl: './upcoming-page.component.scss',
})
export class UpcomingPageComponent extends BaseMoviesComponent {
  override movieCollection: MovieCollection = MovieCollection.Upcoming;
}
