import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { MovieDetailComponent } from './movie-detail.component';
import { NavigationService } from '../../services/navigation.service';
import { Store } from '@ngrx/store';
import { addToFavorite, addToWatchLater } from '../../store/actions';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { provideMockActions } from '@ngrx/effects/testing';
import { ReplaySubject } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';

describe('MovieDetailComponent', () => {
  let component: MovieDetailComponent;
  let fixture: ComponentFixture<MovieDetailComponent>;
  let store: MockStore;
  let router: Router;
  let navigationService: NavigationService;
  let actions$: ReplaySubject<any>;
  let activatedRoute: ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        MatButtonModule,
        MatCardModule,
        MatListModule,
        MatIconModule,
        RouterTestingModule,
        MovieDetailComponent,
      ],
      providers: [
        provideMockStore(),
        provideMockActions(() => actions$),
        {
          provide: NavigationService,
          useValue: {
            getPreviousPath: jest.fn().mockReturnValue(of('/previous-path')),
          },
        },
        {
          provide: Router,
          useValue: { navigate: jest.fn() },
        },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { params: { id: 1 } },
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(MovieDetailComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store) as MockStore;
    router = TestBed.inject(Router);
    navigationService = TestBed.inject(NavigationService);
    activatedRoute = TestBed.inject(ActivatedRoute);
    actions$ = new ReplaySubject(1);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize id and backPath on ngOnInit', () => {
    component.ngOnInit();
    expect(component.id).toBe(1);
    expect(component.backPath).toBe('/previous-path');
  });

  it('should dispatch addToFavorite on addFavourite', () => {
    const id = 1;
    component.id = id;
    const spy = jest.spyOn(store, 'dispatch');
    component.addFavourite();
    expect(spy).toHaveBeenCalledWith(addToFavorite({ id }));
  });

  it('should dispatch addToWatchLater on addWatchLater', () => {
    const id = 1;
    component.id = id;
    const spy = jest.spyOn(store, 'dispatch');
    component.addWatchLater();
    expect(spy).toHaveBeenCalledWith(addToWatchLater({ id }));
  });

  it('should navigate back on navigateBack', () => {
    component.backPath = '/previous-path';
    const spy = jest.spyOn(router, 'navigate');
    component.navigateBack();
    expect(spy).toHaveBeenCalledWith(['/previous-path']);
  });

  it('should unsubscribe on ngOnDestroy', () => {
    const unsubscribeSpy = jest.spyOn(
      component['subscriptions'],
      'unsubscribe'
    );
    component.ngOnDestroy();
    expect(unsubscribeSpy).toHaveBeenCalled();
  });
});
