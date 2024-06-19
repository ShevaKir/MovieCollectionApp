import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuSidebarComponent } from './components/menu-sidebar/menu-sidebar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuSidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
