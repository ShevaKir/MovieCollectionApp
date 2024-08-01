import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopRatedPageComponent } from './top-rated-page.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

describe('TopRatedPageComponent', () => {
  let component: TopRatedPageComponent;
  let fixture: ComponentFixture<TopRatedPageComponent>;
  let httpMock: HttpTestingController;
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopRatedPageComponent, HttpClientTestingModule],
      providers: [
        provideMockStore()
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopRatedPageComponent);
    httpMock = TestBed.inject(HttpTestingController);
    store = TestBed.inject(MockStore);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
