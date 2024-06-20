import { Component, EventEmitter, Output } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, RouterLink, MatButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isViewMenu: boolean = true;
  @Output() toogleMenu = new EventEmitter<boolean>();

  toogleMenuButton() {
    this.isViewMenu = !this.isViewMenu;
    console.log(this.isViewMenu);
    this.toogleMenu.emit(this.isViewMenu);
  }
}
