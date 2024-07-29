import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FavoriteComponent } from './favorite.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { MemoizedSelector } from '@ngrx/store';
import { selectFavoriteMovies } from '../../store/selectors';
import { IMovie } from '../../models/movie.model';
import { removeFromFavorite } from '../../store/actions';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('FavoriteComponent', () => {
  let component: FavoriteComponent;
  let fixture: ComponentFixture<FavoriteComponent>;
  let store: MockStore;
  let mockSelectFavoriteMovies: MemoizedSelector<any, IMovie[]>;

  const mockFavoriteMovies: IMovie[] = [
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
      vote_count: 1000
    }
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoopAnimationsModule, FavoriteComponent],
      providers: [
        provideMockStore()
      ]
    }).compileComponents();

    store = TestBed.inject(MockStore);
    mockSelectFavoriteMovies = store.overrideSelector(selectFavoriteMovies, mockFavoriteMovies);

    fixture = TestBed.createComponent(FavoriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render favorite movies', () => {
    fixture.detectChanges(); // Ensure changes are detected

    const compiled = fixture.nativeElement;
    const movieTitle = compiled.querySelector('.list__item__title');
    
    expect(movieTitle).toBeTruthy(); // Ensure the element exists
    expect(movieTitle.textContent).toContain('Test Movie');
  });

  it('should dispatch removeFromFavorite action when removeMovieFromFavouriteList is called', () => {
    const dispatchSpy = jest.spyOn(store, 'dispatch');
    component.removeMovieFromFavouriteList(1);
    expect(dispatchSpy).toHaveBeenCalledWith(removeFromFavorite({ id: 1 }));
  });
});
