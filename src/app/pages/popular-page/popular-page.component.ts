import { Component } from '@angular/core';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';
import { popularMovies } from '../../mock-data/mock-data';
import { IMovie } from '../../models/IMovieCard';

@Component({
  selector: 'app-popular-page',
  standalone: true,
  imports: [MovieCardComponent],
  templateUrl: './popular-page.component.html',
  styleUrl: './popular-page.component.scss',
})
export class PopularPageComponent {
  movies: IMovie[] = popularMovies;
}
