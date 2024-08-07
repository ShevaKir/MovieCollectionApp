import { Routes } from '@angular/router';
import { NowPlayingPageComponent } from './pages/now-playing-page/now-playing-page.component';
import { PopularPageComponent } from './pages/popular-page/popular-page.component';
import { TopRatedPageComponent } from './pages/top-rated-page/top-rated-page.component';
import { UpcomingPageComponent } from './pages/upcoming-page/upcoming-page.component';
import { HomeComponent } from './pages/home/home.component';
import { MovieDetailComponent } from './pages/movie-detail/movie-detail.component';
import { MovieDetailsResolver } from './resolvers/movie-delails.resolver';
import { FavoriteComponent } from './pages/favorite/favorite.component';
import { WatchLaterComponent } from './pages/watch-later/watch-later.component';

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
    path: 'favorite',
    component: FavoriteComponent
  },
  {
    path: 'watch-later',
    component: WatchLaterComponent
  },
  {
    path: 'movie/:id',
    component: MovieDetailComponent,
    resolve: { data: MovieDetailsResolver },
  },
];
