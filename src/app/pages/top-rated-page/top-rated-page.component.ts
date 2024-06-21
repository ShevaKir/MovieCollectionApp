import { Component } from '@angular/core';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';
import { IMovie } from '../../models/IMovieCard';
import { topRatedMovies } from '../../mock-data/mock-data';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-top-rated-page',
  standalone: true,
  imports: [MovieCardComponent, RouterOutlet],
  templateUrl: './top-rated-page.component.html',
  styleUrl: './top-rated-page.component.scss',
})
export class TopRatedPageComponent {
  movies: IMovie[] = topRatedMovies;

  constructor(private router: Router) {}

  navigateToDetail(id: number) {
    this.router.navigate(['top-rated', id]);
  }
}
