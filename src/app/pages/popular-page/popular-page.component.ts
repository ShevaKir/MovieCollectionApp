import { Component } from '@angular/core';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';
import { popularMovies } from '../../mock-data/mock-data';
import { IMovie } from '../../models/IMovieCard';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-popular-page',
  standalone: true,
  imports: [MovieCardComponent, RouterOutlet],
  templateUrl: './popular-page.component.html',
  styleUrl: './popular-page.component.scss',
})
export class PopularPageComponent {
  movies: IMovie[] = popularMovies;

  constructor(private router: Router) {}

  navigateToDetail(id: number) {
    this.router.navigate(['popular', id]);
  }
}
