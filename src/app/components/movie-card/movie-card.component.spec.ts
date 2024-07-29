import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieCardComponent } from './movie-card.component';
import { IMovie } from '../../models/movie.model';

describe('MovieCardComponent', () => {
  let component: MovieCardComponent;
  let fixture: ComponentFixture<MovieCardComponent>;

  const mockMovie: IMovie = {
    adult: false,
    backdrop_path: '/path/to/backdrop.jpg',
    genre_ids: [28, 12, 16],
    id: 1,
    original_language: 'en',
    original_title: 'Original Title',
    overview: 'This is a test overview.',
    popularity: 8.5,
    poster_path: '/path/to/poster.jpg',
    release_date: '2024-07-27',
    title: 'Test Movie',
    video: false,
    vote_average: 7.5,
    vote_count: 1000,
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MovieCardComponent);
    component = fixture.componentInstance;

    component.movie = mockMovie;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render movie title', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('mat-card-title').textContent).toContain(mockMovie.title);
  });

  it('should emit addFavourite event when addToFavourite is called', () => {
    jest.spyOn(component.addFavourite, 'emit');
    const event = new Event('click');
    component.addToFavourite(event);
    expect(component.addFavourite.emit).toHaveBeenCalledWith(mockMovie);
  });

  it('should emit addWatchList event when addToWatchList is called', () => {
    jest.spyOn(component.addWatchList, 'emit');
    const event = new Event('click');
    component.addToWatchList(event);
    expect(component.addWatchList.emit).toHaveBeenCalledWith(mockMovie);
  });

  it('should emit viewDetail event when detail is called', () => {
    jest.spyOn(component.viewDetail, 'emit');
    component.detail();
    expect(component.viewDetail.emit).toHaveBeenCalledWith(mockMovie.id);
  });

  it('should stop propagation of events', () => {
    const event = { stopPropagation: jest.fn() } as unknown as Event;
    component.addToFavourite(event);
    component.addToWatchList(event);
    expect(event.stopPropagation).toHaveBeenCalledTimes(2);
  });
});
