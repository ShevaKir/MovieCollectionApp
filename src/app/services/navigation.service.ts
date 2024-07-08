import { Injectable } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';
import { BehaviorSubject, Observable, filter, pairwise } from 'rxjs';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  private previousRoutePath = new BehaviorSubject<string>('');

  constructor(private router: Router, private location: Location) {
    this.previousRoutePath.next(this.location.path());

    this.router.events
      .pipe(
        filter((e) => e instanceof RoutesRecognized),
        pairwise()
      )
      .subscribe((event: any[]) => {
        console.log(event[0].urlAfterRedirects);
        this.previousRoutePath.next(event[0].urlAfterRedirects);
      });
  }

  getPreviousPath(): Observable<string> {
    return this.previousRoutePath;
  }
}
