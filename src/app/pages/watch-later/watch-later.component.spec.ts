import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchLaterComponent } from './watch-later.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { MemoizedSelector } from '@ngrx/store';
import { IMovie } from '../../models/movie.model';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { selectWatchLaterMovies } from '../../store/selectors';
import { removeFromWatchLater } from '../../store/actions';

describe('WatchLaterComponent', () => {
  let component: WatchLaterComponent;
  let fixture: ComponentFixture<WatchLaterComponent>;
  let store: MockStore;
  let mockSelectWatchLaterMovies: MemoizedSelector<any, IMovie[]>;

  const mockWatchLaterMovies: IMovie[] = [
    {
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
    },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WatchLaterComponent, NoopAnimationsModule],
      providers: [provideMockStore()],
    }).compileComponents();

    store = TestBed.inject(MockStore);
    mockSelectWatchLaterMovies = store.overrideSelector(
      selectWatchLaterMovies,
      mockWatchLaterMovies
    );

    fixture = TestBed.createComponent(WatchLaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render watch later movies', () => {
    const compiled = fixture.nativeElement;
    const movieTitle = compiled.querySelector('.list__item__title');

    expect(movieTitle).toBeTruthy();
    expect(movieTitle.textContent).toEqual('Test Movie');
  });

  it('should dispatch removeFromWatchLater action when removeMovieFromWatchLaterList is called', () => {
    const dispatchSpy = jest.spyOn(store, 'dispatch');
    component.removeMovieFromWatchLaterList(1);
    expect(dispatchSpy).toHaveBeenCalledWith(removeFromWatchLater({id: 1}))
  })
});
