import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { HomeComponent } from './home.component';
import { searchMoviesByTitle } from '../../store/actions';
import { selectFoundMovies } from '../../store/selectors';
import { moviesMock } from '../../mock/movies-mock';
import { IMovie } from '../../models/movie.model';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let store: MockStore;

  const initialState = {
    movies: {
      foundMovies: []
    }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoopAnimationsModule, HomeComponent],
      providers: [
        provideMockStore({ initialState }),
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeComponent);
    store = TestBed.inject(Store) as MockStore;
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch searchMoviesByTitle action when handleSearch is called', () => {
    const query = 'Inception';
    const dispatchSpy = jest.spyOn(store, 'dispatch');

    component.handleSearch(query);

    expect(dispatchSpy).toHaveBeenCalledWith(searchMoviesByTitle({ query }));
  });

  it('should select found movies from the store', (done) => {
    const movies: IMovie[] = moviesMock;
    store.overrideSelector(selectFoundMovies, movies);

    component.selectedFoundMovies$.subscribe((selectedMovies) => {
      expect(selectedMovies).toEqual(moviesMock);
      done();
    });

    store.refreshState();
  });
});
