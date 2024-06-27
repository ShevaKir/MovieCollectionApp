import { Component, OnInit } from '@angular/core';
import { IMovie } from '../../models/IMovieCard';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { nowPlayingMovies, popularMovies, topRatedMovies, upcomingMovies } from '../../mock-data/mock-data';

@Component({
  selector: 'app-favourite-movies',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatListModule],
  templateUrl: './favourite-movies.component.html',
  styleUrl: './favourite-movies.component.scss',
})
export class FavouriteMoviesComponent implements OnInit {

  favouriteMovies!: IMovie[];
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const collection = this.route.snapshot.queryParamMap.get('collection');
    const ids = this.route.snapshot.queryParamMap.get('ids');
    const movieIds: number[] = ids ? JSON.parse(ids) : [];

    let allMovies: IMovie[] = [];

    switch (collection) {
      case 'now-playing':
        allMovies = nowPlayingMovies;
        break;
      case 'popular':
        allMovies = popularMovies;
        break;
      case 'top-rated':
        allMovies = topRatedMovies;
        break;
      case 'upcoming':
        allMovies = upcomingMovies;
        break;
      default:
        return;
    }

    this.favouriteMovies = allMovies.filter(movie => movieIds.includes(movie.id));
  }

}
