import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { BaseMoviesComponent } from './base-movies.component';
import { MovieService } from '../services/movie.service';
import { addToFavorite, addToWatchLater, loadMovies } from '../store/actions';
import { selectMovies } from '../store/selectors';
import { MovieCollection } from '../enums/movie-collection';
import { SelectMovieList } from '../enums/select-movie-list';
import { IMovie } from '../models/movie.model';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { moviesMock } from '../mock/movies-mock';

class MockRouter {
  navigate = jest.fn();
}

@Component({
  selector: 'app-test-base-movies',
  template: ''
})
export class TestBaseMoviesComponent extends BaseMoviesComponent {
  movieCollection = MovieCollection.NowPlaying;
}

describe('BaseMoviesComponent', () => {
  let component: TestBaseMoviesComponent;
  let fixture: ComponentFixture<TestBaseMoviesComponent>;
  let store: MockStore;
  let router: MockRouter;
  let movieService: MovieService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [TestBaseMoviesComponent],
      providers: [
        { provide: Router, useClass: MockRouter },
        provideMockStore(),
        MovieService,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TestBaseMoviesComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store) as MockStore;
    router = TestBed.inject(Router) as unknown as MockRouter;
    movieService = TestBed.inject(MovieService);

    store.overrideSelector(selectMovies, []);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch loadMovies on ngOnInit', () => {
    const spy = jest.spyOn(store, 'dispatch');
    component.ngOnInit();
    expect(spy).toHaveBeenCalledWith(loadMovies({ category: component.movieCollection }));
  });

  it('should dispatch addToFavorite action', () => {
    const movie: IMovie = moviesMock[0];
    const spy = jest.spyOn(store, 'dispatch');
    component.addMovieToFavourite(movie);
    expect(spy).toHaveBeenCalledWith(addToFavorite({ id: movie.id }));
  });

  it('should dispatch addToWatchLater action', () => {
    const movie: IMovie = moviesMock[0];
    const spy = jest.spyOn(store, 'dispatch');
    component.addMovieToWatchLater(movie);
    expect(spy).toHaveBeenCalledWith(addToWatchLater({ id: movie.id }));
  });

  it('should navigate to detail page', () => {
    const movieId = 1;
    component.navigateToDetail(movieId);
    expect(router.navigate).toHaveBeenCalledWith(['movie', movieId], {
      queryParams: { collection: component.movieCollection },
    });
  });

  it('should update selectedSubMovieList', () => {
    const tab = SelectMovieList.WatchLater;
    component.selectedMovieList(tab);
    expect(component.selectedSubMovieList).toBe(tab);
  });
});
