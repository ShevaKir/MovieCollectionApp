import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  nowPlayingMovies,
  topRatedMovies,
  popularMovies,
  upcomingMovies,
} from '../../mock-data/mock-data';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { IMovie } from '../../models/IMovieCard';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, MatListModule, MatIconModule, UpperCasePipe],
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.scss',
})
export class MovieDetailComponent implements OnInit {
  movie!: IMovie;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id: number = +this.route.snapshot.params['id'];
    const collection: string = this.route.snapshot.url[0].path;

    switch (collection) {
      case 'now-playing':
        this.movie = nowPlayingMovies.find((m) => m.id === id) as IMovie;
        break;
      case 'popular':
        this.movie = popularMovies.find((m) => m.id === id) as IMovie;
        break;
      case 'top-rated':
        this.movie = topRatedMovies.find((m) => m.id === id) as IMovie;
        break;
      case 'upcoming':
        this.movie = upcomingMovies.find((m) => m.id === id) as IMovie;
        break;
    }
  }
}
