import { Component } from '@angular/core';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';
import { RouterOutlet } from '@angular/router';
import { BaseMoviesComponent } from '../../general/base-movies.component';
import { MovieCollection } from '../../enums/movie-collection';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-popular-page',
  standalone: true,
  imports: [
    MovieCardComponent,
    RouterOutlet,
    AsyncPipe
  ],
  templateUrl: './popular-page.component.html',
  styleUrl: './popular-page.component.scss',
})
export class PopularPageComponent extends BaseMoviesComponent {
  override movieCollection: MovieCollection = MovieCollection.Popular;
}
