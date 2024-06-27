import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { IMovie } from '../../models/IMovieCard';
import { UpperCasePipe } from '@angular/common';
import { MovieService } from '../../services/movie.service';
import { MovieCollection } from '../../enums/MovieCollection';

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
  collection: MovieCollection = MovieCollection.None;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {}

  ngOnInit(): void {
    const id: number = +this.route.snapshot.params['id'];
    this.collection = this.route.snapshot.queryParamMap.get(
      'collection'
    ) as MovieCollection;

    this.movie = this.movieService.getMovieById(id, this.collection);
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
    let queryParams: any = {};
    if (this.favourite !== 0) {
      queryParams.favourite = this.favourite;
    }
    if (this.watchLater !== 0) {
      queryParams.watchLater = this.watchLater;
    }

    this.router.navigate([this.collection], {
      queryParams: queryParams,
    });
  }
}
