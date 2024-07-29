import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FavoriteComponent } from './favorite.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { MemoizedSelector } from '@ngrx/store';
import { selectFavoriteMovies } from '../../store/selectors';
import { IMovie } from '../../models/movie.model';
import { removeFromFavorite } from '../../store/actions';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { moviesMock } from '../../mock/movies-mock';

describe('FavoriteComponent', () => {
  let component: FavoriteComponent;
  let fixture: ComponentFixture<FavoriteComponent>;
  let store: MockStore;
  let mockSelectFavoriteMovies: MemoizedSelector<any, IMovie[]>;

  const mockFavoriteMovies: IMovie[] = moviesMock;

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
    expect(movieTitle.textContent).toEqual('Test Movie 1');
  });

  it('should dispatch removeFromFavorite action when removeMovieFromFavouriteList is called', () => {
    const dispatchSpy = jest.spyOn(store, 'dispatch');
    component.removeMovieFromFavouriteList(1);
    expect(dispatchSpy).toHaveBeenCalledWith(removeFromFavorite({ id: 1 }));
  });
});
