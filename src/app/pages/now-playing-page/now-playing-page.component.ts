import { Component } from '@angular/core';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';
import { IMovie } from '../../models/IMovieCard';
import { nowPlayingMovies } from '../../mock-data/mock-data';

@Component({
  selector: 'app-now-playing-page',
  standalone: true,
  imports: [MovieCardComponent],
  templateUrl: './now-playing-page.component.html',
  styleUrl: './now-playing-page.component.scss',
})
export class NowPlayingPageComponent {
  movies: IMovie[] = nowPlayingMovies;
}
