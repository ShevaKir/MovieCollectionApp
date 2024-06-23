import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, RouterLink, MatButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  public path: string = '';
  isViewMenu: boolean = true;
  @Output() toggleMenu = new EventEmitter<boolean>();

  constructor( private router: Router) {}

  toggleMenuButton() {
    this.isViewMenu = !this.isViewMenu;
    this.toggleMenu.emit(this.isViewMenu);
  }
}
