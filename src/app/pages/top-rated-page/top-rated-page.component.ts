import { Component } from '@angular/core';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';
import { RouterOutlet } from '@angular/router';
import { BaseMoviesComponent } from '../../general/base-movies.component';
import { SubHeaderComponent } from '../../components/sub-header/sub-header.component';
import { MovieCollection } from '../../enums/movie-collection';
import { SubListComponent } from '../../components/sub-list/sub-list.component';

@Component({
  selector: 'app-top-rated-page',
  standalone: true,
  imports: [
    MovieCardComponent,
    RouterOutlet,
    SubHeaderComponent,
    SubListComponent,
  ],
  templateUrl: './top-rated-page.component.html',
  styleUrl: './top-rated-page.component.scss',
})
export class TopRatedPageComponent extends BaseMoviesComponent {
  override movieCollection: MovieCollection = MovieCollection.TopRated;
}
