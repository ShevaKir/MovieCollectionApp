import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchLaterComponent } from './watch-later.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { MemoizedSelector } from '@ngrx/store';
import { IMovie } from '../../models/movie.model';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { selectWatchLaterMovies } from '../../store/selectors';
import { removeFromWatchLater } from '../../store/actions';
import { moviesMock } from '../../mock/movies-mock';

describe('WatchLaterComponent', () => {
  let component: WatchLaterComponent;
  let fixture: ComponentFixture<WatchLaterComponent>;
  let store: MockStore;
  let mockSelectWatchLaterMovies: MemoizedSelector<any, IMovie[]>;

  const mockWatchLaterMovies: IMovie[] = moviesMock;

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
    expect(movieTitle.textContent).toEqual('Test Movie 1');
  });

  it('should dispatch removeFromWatchLater action when removeMovieFromWatchLaterList is called', () => {
    const dispatchSpy = jest.spyOn(store, 'dispatch');
    component.removeMovieFromWatchLaterList(1);
    expect(dispatchSpy).toHaveBeenCalledWith(removeFromWatchLater({id: 1}))
  })
});
