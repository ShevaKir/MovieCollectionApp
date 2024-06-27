import { Component, OnInit } from '@angular/core';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';
import { IMovie } from '../../models/IMovieCard';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { BaseMoviesComponent } from '../../general/base-movies.component';
import { SubHeaderComponent } from '../../components/sub-header/sub-header.component';
import { MovieService } from '../../services/movie.service';
import { MovieCollection } from '../../enums/MovieCollection';

@Component({
  selector: 'app-top-rated-page',
  standalone: true,
  imports: [MovieCardComponent, RouterOutlet, SubHeaderComponent],
  templateUrl: './top-rated-page.component.html',
  styleUrl: './top-rated-page.component.scss',
})
export class TopRatedPageComponent extends BaseMoviesComponent implements OnInit {
  override movieCollection: MovieCollection = MovieCollection.TopRated;
  movies!: ReadonlyArray<IMovie>;

  constructor(
    router: Router,
    route: ActivatedRoute,
    private movieService: MovieService
  ) {
    super(router, route);
  }

  ngOnInit(): void {
    this.movies = this.movieService.getTopRatedMovies();
  }
}
