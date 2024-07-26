import { AsyncPipe, CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { selectFavoriteMovies } from '../../store/selectors';
import { Store } from '@ngrx/store';
import { removeFromFavorite } from '../../store/actions';

@Component({
  selector: 'app-favorite',
  standalone: true,
  imports: [
    AsyncPipe,
    CommonModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './favorite.component.html',
  styleUrl: './favorite.component.scss',
})
export class FavoriteComponent {
  public selectedFavoriteMovies$ = this.store.select(selectFavoriteMovies);
  constructor(private store: Store) {}

  removeMovieFromFavouriteList(id: number) {
    this.store.dispatch(removeFromFavorite({ id }));
  }
}
