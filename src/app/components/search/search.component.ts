import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Store } from '@ngrx/store';
import { selectSearchQuery } from '../../store/selectors';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent implements OnInit {
  @Input() searchName: string = '';
  @Output() queryEvent = new EventEmitter<string>();
  public query: string = '';

  constructor(private store: Store) {}
  ngOnInit(): void {
    this.store
      .select(selectSearchQuery)
      .subscribe((query) => (this.query = query));
  }

  clearField(): void {
    this.query = '';
    this.queryEvent.emit(this.query);
  }

  search(): void {
    this.queryEvent.emit(this.query);
  }
}
