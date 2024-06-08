import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MovieCardComponent } from './components/movie-card/movie-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MovieCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
