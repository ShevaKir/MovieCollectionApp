import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { IMovie } from '../../models/IMovieCard';

@Component({
  selector: 'app-sub-list',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatListModule],
  templateUrl: './sub-list.component.html',
  styleUrl: './sub-list.component.scss',
})
export class SubListComponent {
  @Input() titleEmpty: string = '';
  @Input() movies!: ReadonlyArray<IMovie>;
}
