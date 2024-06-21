import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, RouterLink, MatButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit{
  public path: string = '';
  isViewMenu: boolean = true;
  @Output() toggleMenu = new EventEmitter<boolean>();

  constructor( private router: Router) {}
  ngOnInit(): void {  
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      console.log(event.url)
      this.path = '/' + event.url.split('/')[1];
    });
  }

  toggleMenuButton() {
    this.isViewMenu = !this.isViewMenu;
    console.log(this.isViewMenu);
    this.toggleMenu.emit(this.isViewMenu);
  }
}
