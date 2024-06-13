import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IMovieCard } from '../../models/IMovieCard';
import { DurationPipe } from '../../pipes/duration/duration.pipe';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [ DurationPipe ],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss'
})
export class MovieCardComponent {
  @Input() movie!: IMovieCard;

  @Output() addFavourite = new EventEmitter<any>();
  @Output() addWatchList = new EventEmitter<any>();

  addToFavourite() {
    this.addFavourite.emit(this.movie);
  }

  addToWatchList() {
    this.addWatchList.emit(this.movie);
  }
}
