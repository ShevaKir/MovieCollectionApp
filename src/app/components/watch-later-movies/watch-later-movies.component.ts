import { Component } from '@angular/core';
import { IMovie } from '../../models/IMovieCard';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-watch-later-movies',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatListModule],
  templateUrl: './watch-later-movies.component.html',
  styleUrl: './watch-later-movies.component.scss',
})
export class WatchLaterMoviesComponent {
  watchLaterMovies!: IMovie[];
}
