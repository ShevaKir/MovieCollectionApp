import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IMovie } from '../../models/IMovieCard';
import { DurationPipe } from '../../pipes/duration/duration.pipe';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [
    DurationPipe,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
  ],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss',
})
export class MovieCardComponent {
  @Input() movie!: IMovie;

  @Output() addFavourite = new EventEmitter<any>();
  @Output() addWatchList = new EventEmitter<any>();
  @Output() viewDetail = new EventEmitter<number>();

  addToFavourite() {
    this.addFavourite.emit(this.movie);
  }

  addToWatchList() {
    this.addWatchList.emit(this.movie);
  }

  detail() {
    this.viewDetail.emit(this.movie.id);
  }
}
