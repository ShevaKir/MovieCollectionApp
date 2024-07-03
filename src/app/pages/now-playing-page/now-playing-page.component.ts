import { Component } from '@angular/core';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';
import { RouterOutlet } from '@angular/router';
import { SubHeaderComponent } from '../../components/sub-header/sub-header.component';
import { BaseMoviesComponent } from '../../general/base-movies.component';
import { MovieCollection } from '../../enums/MovieCollection';
import { SubListComponent } from '../../components/sub-list/sub-list.component';

@Component({
  selector: 'app-now-playing-page',
  standalone: true,
  imports: [
    MovieCardComponent,
    RouterOutlet,
    SubHeaderComponent,
    SubListComponent,
  ],
  templateUrl: './now-playing-page.component.html',
  styleUrl: './now-playing-page.component.scss',
})
export class NowPlayingPageComponent extends BaseMoviesComponent {
  override movieCollection: MovieCollection = MovieCollection.NowPlaying;
}
