import { Component } from '@angular/core';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';
import { IMovie } from '../../models/IMovieCard';
import { nowPlayingMovies } from '../../mock-data/mock-data';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { SubHeaderComponent } from '../../components/sub-header/sub-header.component';
import { BaseMoviesComponent } from '../../general/base-movies.component';

@Component({
  selector: 'app-now-playing-page',
  standalone: true,
  imports: [MovieCardComponent, RouterOutlet, SubHeaderComponent],
  templateUrl: './now-playing-page.component.html',
  styleUrl: './now-playing-page.component.scss',
})
export class NowPlayingPageComponent extends BaseMoviesComponent {
  override movieCollection: string = 'now-playing';
  movies: IMovie[] = nowPlayingMovies;

  constructor(router: Router, route: ActivatedRoute) {
    super(router, route);
  }
}
