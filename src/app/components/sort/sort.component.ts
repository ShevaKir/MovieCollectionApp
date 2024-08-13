import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-sort',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule],
  templateUrl: './sort.component.html',
  styleUrl: './sort.component.scss',
})
export class SortComponent {
  @Input() title: string = '';
  @Input() options!: Array<{ value: any; label: string }>;
  @Output() selectionChange = new EventEmitter<any>();

  onSelectionChange(event: any): void {
    this.selectionChange.emit(event.value);
  }
}
