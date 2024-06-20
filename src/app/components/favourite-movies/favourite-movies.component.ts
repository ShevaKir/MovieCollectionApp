import { Component } from '@angular/core';
import { IMovie } from '../../models/IMovieCard';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-favourite-movies',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatListModule],
  templateUrl: './favourite-movies.component.html',
  styleUrl: './favourite-movies.component.scss',
})
export class FavouriteMoviesComponent {
  favouriteMovies!: IMovie[];
}
