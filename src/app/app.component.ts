import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuSidebarComponent } from './components/menu-sidebar/menu-sidebar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HeaderComponent } from './components/header/header.component';
import { AuthService } from './services/auth.service';
import { NavigationService } from './services/navigation.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MenuSidebarComponent,
    MatSidenavModule,
    HeaderComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {

  constructor() {
  }

  isViewMenu: boolean = true;
  toggleSidebar(isViewMenu: boolean) {
    this.isViewMenu = isViewMenu;
  }

  sum(a: number, b: number) {
    return a + b;
  }
}
