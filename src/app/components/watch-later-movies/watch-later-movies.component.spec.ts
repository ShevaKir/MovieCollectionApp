import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchLaterMoviesComponent } from './watch-later-movies.component';

describe('WatchLaterMoviesComponent', () => {
  let component: WatchLaterMoviesComponent;
  let fixture: ComponentFixture<WatchLaterMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WatchLaterMoviesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WatchLaterMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
