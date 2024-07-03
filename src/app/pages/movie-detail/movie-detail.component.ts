import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { UpperCasePipe } from '@angular/common';
import { MovieService } from '../../services/movie.service';
import { MovieCollection } from '../../enums/MovieCollection';
import { IMovieDetails } from '../../models/movie-details.model';

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
  movie!: IMovieDetails;
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

    this.movieService.getMovieById(id).subscribe((movie) => {
      this.movie = movie;
    });
  }

  addFavourite() {
    //this.movieService.addMovieToFavourite(this.movie, this.collection);
  }

  addWatchLater() {
    //this.movieService.addMovieToWatchLater(this.movie, this.collection);
  }

  navigateBack() {
    this.router.navigate([this.collection]);
  }
}
