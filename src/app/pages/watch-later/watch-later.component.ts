import { Component } from '@angular/core';
import { selectWatchLaterMovies } from '../../store/selectors';
import { Store } from '@ngrx/store';
import { removeFromWatchLater } from '../../store/actions';
import { AsyncPipe, CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-watch-later',
  standalone: true,
  imports: [
    AsyncPipe,
    CommonModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './watch-later.component.html',
  styleUrl: './watch-later.component.scss',
})
export class WatchLaterComponent {
  public selectedWatchLaterMovies$ = this.store.select(selectWatchLaterMovies);

  constructor(private store: Store) {}

  removeMovieFromWatchLaterList(id: number) {
    this.store.dispatch(removeFromWatchLater({ id }));
  }
}
