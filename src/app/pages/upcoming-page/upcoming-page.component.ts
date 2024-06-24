import { Component } from '@angular/core';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';
import { IMovie } from '../../models/IMovieCard';
import { upcomingMovies } from '../../mock-data/mock-data';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { BaseMoviesComponent } from '../../general/base-movies.component';
import { SubHeaderComponent } from '../../components/sub-header/sub-header.component';

@Component({
  selector: 'app-upcoming-page',
  standalone: true,
  imports: [MovieCardComponent, RouterOutlet, SubHeaderComponent],
  templateUrl: './upcoming-page.component.html',
  styleUrl: './upcoming-page.component.scss',
})
export class UpcomingPageComponent extends BaseMoviesComponent {
  movies: IMovie[] = upcomingMovies;

  constructor(private router: Router, route: ActivatedRoute) {
    super(route);
  }

  navigateToDetail(id: number) {
    this.router.navigate(['upcoming', id]);
  }
}
