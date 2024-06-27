import { Component, OnInit } from '@angular/core';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';
import { IMovie } from '../../models/IMovieCard';
import { RouterOutlet } from '@angular/router';
import { BaseMoviesComponent } from '../../general/base-movies.component';
import { SubHeaderComponent } from '../../components/sub-header/sub-header.component';
import { MovieCollection } from '../../enums/MovieCollection';

@Component({
  selector: 'app-popular-page',
  standalone: true,
  imports: [MovieCardComponent, RouterOutlet, SubHeaderComponent],
  templateUrl: './popular-page.component.html',
  styleUrl: './popular-page.component.scss',
})
export class PopularPageComponent
  extends BaseMoviesComponent
  implements OnInit
{
  override movieCollection: MovieCollection = MovieCollection.Popular;
  movies!: ReadonlyArray<IMovie>;

  ngOnInit(): void {
    this.movies = this.movieService.getPopularMovies();
  }
}
