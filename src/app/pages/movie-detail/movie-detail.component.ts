import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { AsyncPipe, CommonModule, UpperCasePipe } from '@angular/common';
import { MovieService } from '../../services/movie.service';
import { NavigationService } from '../../services/navigation.service';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import {
  addToFavorite,
  addToWatchLater,
  loadMovieDetailsById,
} from '../../store/actions';
import { selectCurrentMovieDetails } from '../../store/selectors';

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    UpperCasePipe,
    RouterLink,
    AsyncPipe,
  ],
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.scss',
})
export class MovieDetailComponent implements OnInit, OnDestroy {
  backPath: string = '';
  id: number = 0;
  selectedMovieById$ = this.store.select(selectCurrentMovieDetails);

  private subscriptions: Subscription = new Subscription();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private movieService: MovieService,
    private navigationService: NavigationService,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.params['id'];
    this.store.dispatch(loadMovieDetailsById({ id: this.id }));

    const navigationSub = this.navigationService
      .getPreviousPath()
      .subscribe((path) => {
        this.backPath = path;
      });

    this.subscriptions.add(navigationSub);
  }

  addFavourite() {
    this.store.dispatch(addToFavorite({ id: this.id }));
  }

  addWatchLater() {
    this.store.dispatch(addToWatchLater({ id: this.id }));
  }

  navigateBack() {
    this.router.navigate([this.backPath]);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
