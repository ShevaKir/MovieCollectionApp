import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  imports: [
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    UpperCasePipe,
  ],
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.scss',
})
export class MovieDetailComponent implements OnInit {
  movie!: IMovie;
  favourite: number = 0;
  watchLater: number = 0;

  constructor(private router: Router, private route: ActivatedRoute) {}

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

  addFavourite(id: number) {
    if (this.favourite === 0) {
      this.favourite = id;
    } else {
      this.favourite = 0;
    }
  }

  addWatchLater(id: number) {
    if (this.watchLater === 0) {
      this.watchLater = id;
    } else {
      this.watchLater = 0;
    }
  }

  navigateBack() {
    const urlSegments = this.route.snapshot.url;

    let queryParams: any = {};
    if (this.favourite !== 0) {
      queryParams.favourite = this.favourite;
    }
    if (this.watchLater !== 0) {
      queryParams.watchLater = this.watchLater;
    }
  
    if (urlSegments.length > 0) {
      const newUrl = urlSegments
        .slice(0, -1)
        .map((segment) => segment.path)
        .join('/');
      this.router.navigate([`/${newUrl}`], {
        queryParams: queryParams,
      });
    } else {
      this.router.navigate(['/']);
    }
  }
}
