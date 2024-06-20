import { Component } from '@angular/core';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';
import { IMovie } from '../../models/IMovieCard';
import { nowPlayingMovies } from '../../mock-data/mock-data';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-now-playing-page',
  standalone: true,
  imports: [MovieCardComponent, RouterOutlet],
  templateUrl: './now-playing-page.component.html',
  styleUrl: './now-playing-page.component.scss',
})
export class NowPlayingPageComponent {
  movies: IMovie[] = nowPlayingMovies;

  constructor(private router: Router) {}

  navigateToDetail(id: number) {
    this.router.navigate(['now-playing', 'detail', id]);
  }
}
