import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieCardComponent } from './movie-card.component';
import { moviesMock } from '../../mock/movies-mock';

describe('MovieCardComponent', () => {
  let component: MovieCardComponent;
  let fixture: ComponentFixture<MovieCardComponent>;
  const movieMock = moviesMock[0];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MovieCardComponent);
    component = fixture.componentInstance;

    component.movie = movieMock;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render movie title', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('mat-card-title').textContent).toContain(
      movieMock.title
    );
  });

  it('should emit addFavourite event when addToFavourite is called', () => {
    jest.spyOn(component.addFavourite, 'emit');
    const event = new Event('click');
    component.addToFavourite(event);
    expect(component.addFavourite.emit).toHaveBeenCalledWith(movieMock);
  });

  it('should emit addWatchList event when addToWatchList is called', () => {
    jest.spyOn(component.addWatchList, 'emit');
    const event = new Event('click');
    component.addToWatchList(event);
    expect(component.addWatchList.emit).toHaveBeenCalledWith(movieMock);
  });

  it('should emit viewDetail event when detail is called', () => {
    jest.spyOn(component.viewDetail, 'emit');
    component.detail();
    expect(component.viewDetail.emit).toHaveBeenCalledWith(movieMock.id);
  });

  it('should stop propagation of events', () => {
    const event = { stopPropagation: jest.fn() } as unknown as Event;
    component.addToFavourite(event);
    component.addToWatchList(event);
    expect(event.stopPropagation).toHaveBeenCalledTimes(2);
  });
});
