import { Component } from '@angular/core';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';
import { IMovie } from '../../models/IMovieCard';
import { topRatedMovies } from '../../mock-data/mock-data';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { BaseMoviesComponent } from '../../general/base-movies.component';
import { SubHeaderComponent } from '../../components/sub-header/sub-header.component';

@Component({
  selector: 'app-top-rated-page',
  standalone: true,
  imports: [MovieCardComponent, RouterOutlet, SubHeaderComponent],
  templateUrl: './top-rated-page.component.html',
  styleUrl: './top-rated-page.component.scss',
})
export class TopRatedPageComponent extends BaseMoviesComponent {
  movies: IMovie[] = topRatedMovies;

  constructor(private router: Router, route: ActivatedRoute) {
    super(route);
  }

  navigateToDetail(id: number) {
    this.router.navigate(['top-rated', id]);
  }
}
