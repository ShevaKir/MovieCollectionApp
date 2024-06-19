import { Component } from '@angular/core';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';
import { IMovie } from '../../models/IMovieCard';
import { topRatedMovies } from '../../mock-data/mock-data';

@Component({
  selector: 'app-top-rated-page',
  standalone: true,
  imports: [MovieCardComponent],
  templateUrl: './top-rated-page.component.html',
  styleUrl: './top-rated-page.component.scss',
})
export class TopRatedPageComponent {
  movies: IMovie[] = topRatedMovies;
}
