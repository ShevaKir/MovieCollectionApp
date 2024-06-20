import { Component } from '@angular/core';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';
import { IMovie } from '../../models/IMovieCard';
import { upcomingMovies } from '../../mock-data/mock-data';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-upcoming-page',
  standalone: true,
  imports: [MovieCardComponent, RouterOutlet],
  templateUrl: './upcoming-page.component.html',
  styleUrl: './upcoming-page.component.scss',
})
export class UpcomingPageComponent {
  movies: IMovie[] = upcomingMovies;

  constructor(private router: Router) {}

  navigateToDetail(id: number) {
    this.router.navigate(['upcoming', 'detail', id]);
  }
}
