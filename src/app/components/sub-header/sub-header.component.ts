import { Component, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-sub-header',
  standalone: true,
  imports: [MatToolbarModule, RouterLink, MatButtonModule],
  templateUrl: './sub-header.component.html',
  styleUrl: './sub-header.component.scss',
})
export class SubHeaderComponent implements OnInit {
  @Input() favouriteMovieIds: number[] = [];
  @Input() watchLaterMovieIds: number[] = [];
  collection: string = '';

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.collection = this.route.snapshot.url[0].path;
  }

  navigateToEmpty() {
    this.router.navigate([{ outlets: { list: ['empty'] } }])
  }

  navigateWithMovies(path: string, movieIds: number[]) {
    debugger
    const data = JSON.stringify(movieIds);

    this.router.navigate([{ outlets: { list: [path] } }], {
      queryParams: { ids: data, collection: this.collection },
    });
  }
}
