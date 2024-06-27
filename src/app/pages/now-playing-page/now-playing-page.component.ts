import { Component, OnInit } from '@angular/core';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';
import { IMovie } from '../../models/IMovieCard';
import { RouterOutlet } from '@angular/router';
import { SubHeaderComponent } from '../../components/sub-header/sub-header.component';
import { BaseMoviesComponent } from '../../general/base-movies.component';
import { MovieCollection } from '../../enums/MovieCollection';

@Component({
  selector: 'app-now-playing-page',
  standalone: true,
  imports: [MovieCardComponent, RouterOutlet, SubHeaderComponent],
  templateUrl: './now-playing-page.component.html',
  styleUrl: './now-playing-page.component.scss',
})
export class NowPlayingPageComponent
  extends BaseMoviesComponent
  implements OnInit
{
  override movieCollection: MovieCollection = MovieCollection.NowPlaying;
  movies!: ReadonlyArray<IMovie>;

  ngOnInit(): void {
    this.movies = this.movieService.getNowPlayingMovies();
  }
}
