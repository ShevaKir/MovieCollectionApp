import { Routes } from '@angular/router';
import { NowPlayingPageComponent } from './pages/now-playing-page/now-playing-page.component';
import { PopularPageComponent } from './pages/popular-page/popular-page.component';
import { TopRatedPageComponent } from './pages/top-rated-page/top-rated-page.component';
import { UpcomingPageComponent } from './pages/upcoming-page/upcoming-page.component';
import { HomeComponent } from './pages/home/home.component';
import { MovieDetailComponent } from './pages/movie-detail/movie-detail.component';
import { FavouriteMoviesComponent } from './components/favourite-movies/favourite-movies.component';
import { WatchLaterMoviesComponent } from './components/watch-later-movies/watch-later-movies.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'now-playing',
    component: NowPlayingPageComponent,
  },
  {
    path: 'popular',
    component: PopularPageComponent,
  },
  {
    path: 'top-rated',
    component: TopRatedPageComponent,
  },
  {
    path: 'upcoming',
    component: UpcomingPageComponent,
  },
  {
    path: 'now-playing/:id',
    component: MovieDetailComponent,
  },
  {
    path: 'popular/:id',
    component: MovieDetailComponent,
  },
  {
    path: 'top-rated/:id',
    component: MovieDetailComponent,
  },
  {
    path: 'upcoming/:id',
    component: MovieDetailComponent,
  },
  {
    path: 'favourite',
    component: FavouriteMoviesComponent,
    outlet: 'list'
  },
  {
    path: 'watch-later',
    component: WatchLaterMoviesComponent,
    outlet: 'list'
  }
];
