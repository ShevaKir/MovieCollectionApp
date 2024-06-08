import { Component } from '@angular/core';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { IMovieCard } from '../../models/IMovieCard';
import { CommonModule } from '@angular/common';

import moviesMockData from '../../../assets/mock-data/movies.json';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [MovieCardComponent, CommonModule],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss'
})
export class MovieListComponent {
  movies: IMovieCard[] = moviesMockData;
}
