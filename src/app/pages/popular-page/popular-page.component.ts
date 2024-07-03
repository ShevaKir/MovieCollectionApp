import { Component, OnInit } from '@angular/core';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';
import { IMovie } from '../../models/movie.model';
import { RouterOutlet } from '@angular/router';
import { BaseMoviesComponent } from '../../general/base-movies.component';
import { SubHeaderComponent } from '../../components/sub-header/sub-header.component';
import { MovieCollection } from '../../enums/MovieCollection';
import { SubListComponent } from '../../components/sub-list/sub-list.component';

@Component({
  selector: 'app-popular-page',
  standalone: true,
  imports: [
    MovieCardComponent,
    RouterOutlet,
    SubHeaderComponent,
    SubListComponent,
  ],
  templateUrl: './popular-page.component.html',
  styleUrl: './popular-page.component.scss',
})
export class PopularPageComponent extends BaseMoviesComponent {
  override movieCollection: MovieCollection = MovieCollection.Popular;
}
