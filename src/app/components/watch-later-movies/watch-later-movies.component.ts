import { Component } from '@angular/core';
import { IMovie } from '../../models/IMovieCard';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { nowPlayingMovies, popularMovies, topRatedMovies, upcomingMovies } from '../../mock-data/mock-data';

@Component({
  selector: 'app-watch-later-movies',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatListModule],
  templateUrl: './watch-later-movies.component.html',
  styleUrl: './watch-later-movies.component.scss',
})
export class WatchLaterMoviesComponent {
  watchLaterMovies!: IMovie[];

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

    this.watchLaterMovies = allMovies.filter(movie => movieIds.includes(movie.id));
  }
}
