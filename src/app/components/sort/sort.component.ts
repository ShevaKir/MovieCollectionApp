import { Component, EventEmitter, Input, Output, input } from '@angular/core';
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
  @Input() options!: Record<string, string>;
  @Output() selectionChange = new EventEmitter<string>();

  getOptionKeys(): string[] {
    return Object.keys(this.options);
  }

  getOptionValue(key: string): string {
    return this.options[key];
  }

  onSelectionChange(event: any): void {
    this.selectionChange.emit(event.value);
  }
}
