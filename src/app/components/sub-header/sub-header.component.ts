import { Component, Input } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-sub-header',
  standalone: true,
  imports: [MatToolbarModule, RouterLink],
  templateUrl: './sub-header.component.html',
  styleUrl: './sub-header.component.scss',
})
export class SubHeaderComponent {
  @Input() favouriteMovieIds: number[] = [];
  @Input() watchLaterMovieIds: number[] = [];

  constructor(private router: Router, private route: ActivatedRoute) {}

  navigateWithMovies(path: string, movieIds: number[]) {
    const data = JSON.stringify(movieIds);
    const collection = this.route.snapshot.url[0].path;

    this.router.navigate([{ outlets: { list: [path] } }], {
      queryParams: { ids: data, collection: collection },
    });
  }
}
