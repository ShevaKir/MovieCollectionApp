import { Routes } from '@angular/router';
import { NowPlayingPageComponent } from './pages/now-playing-page/now-playing-page.component';
import { PopularPageComponent } from './pages/popular-page/popular-page.component';
import { TopRatedPageComponent } from './pages/top-rated-page/top-rated-page.component';
import { UpcomingPageComponent } from './pages/upcoming-page/upcoming-page.component';

export const routes: Routes = [
  { path: '', component: NowPlayingPageComponent },
  { path: 'popular', component: PopularPageComponent },
  { path: 'top-rated', component: TopRatedPageComponent },
  { path: 'upcoming', component: UpcomingPageComponent },
];
