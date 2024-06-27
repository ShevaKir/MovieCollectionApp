import { Component } from '@angular/core';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';
import { popularMovies } from '../../mock-data/mock-data';
import { IMovie } from '../../models/IMovieCard';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { BaseMoviesComponent } from '../../general/base-movies.component';
import { SubHeaderComponent } from '../../components/sub-header/sub-header.component';

@Component({
  selector: 'app-popular-page',
  standalone: true,
  imports: [MovieCardComponent, RouterOutlet, SubHeaderComponent],
  templateUrl: './popular-page.component.html',
  styleUrl: './popular-page.component.scss',
})
export class PopularPageComponent extends BaseMoviesComponent {
  override movieCollection: string = 'popular';
  movies: IMovie[] = popularMovies;

  constructor(router: Router, route: ActivatedRoute) {
    super(router, route);
  }
}
