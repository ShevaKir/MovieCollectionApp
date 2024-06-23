import { Component } from '@angular/core';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';
import { popularMovies } from '../../mock-data/mock-data';
import { IMovie } from '../../models/IMovieCard';
import { Router, RouterOutlet } from '@angular/router';
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
  movies: IMovie[] = popularMovies;

  constructor(private router: Router) {
    super();
  }

  navigateToDetail(id: number) {
    this.router.navigate(['popular', id]);
  }
}
