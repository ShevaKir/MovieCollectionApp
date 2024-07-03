import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { IMovie } from '../../models/movie.model';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-sub-list',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatListModule, MatIconModule, MatButtonModule],
  templateUrl: './sub-list.component.html',
  styleUrl: './sub-list.component.scss',
})
export class SubListComponent {
  @Input() titleEmpty: string = '';
  @Input() movies!: ReadonlyArray<IMovie>;

  @Output() removeMovie = new EventEmitter<number>();

  remove(id: number): void {
    this.removeMovie.emit(id);
  }
}
