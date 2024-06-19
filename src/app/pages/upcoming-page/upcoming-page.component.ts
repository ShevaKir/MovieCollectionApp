import { Component } from '@angular/core';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';
import { IMovie } from '../../models/IMovieCard';
import { upcomingMovies } from '../../mock-data/mock-data';

@Component({
  selector: 'app-upcoming-page',
  standalone: true,
  imports: [MovieCardComponent],
  templateUrl: './upcoming-page.component.html',
  styleUrl: './upcoming-page.component.scss'
})
export class UpcomingPageComponent {
  movies: IMovie[] = upcomingMovies;

}
