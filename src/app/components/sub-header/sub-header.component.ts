import { Component, EventEmitter, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import { SelectMovieList } from '../../enums/SelectMovieList';

@Component({
  selector: 'app-sub-header',
  standalone: true,
  imports: [MatToolbarModule, RouterLink, MatButtonModule],
  templateUrl: './sub-header.component.html',
  styleUrl: './sub-header.component.scss',
})
export class SubHeaderComponent {
  @Output() selectedTab = new EventEmitter<SelectMovieList>();
  SelectMovieList = SelectMovieList;

  constructor() {}

  selectTab(tab: SelectMovieList) {
    this.selectedTab.emit(tab);
  }
}
