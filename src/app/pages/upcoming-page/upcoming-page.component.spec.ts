import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingPageComponent } from './upcoming-page.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

describe('UpcomingPageComponent', () => {
  let component: UpcomingPageComponent;
  let fixture: ComponentFixture<UpcomingPageComponent>;
  let httpMock: HttpTestingController;
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpcomingPageComponent, HttpClientTestingModule],
      providers: [
        provideMockStore()
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpcomingPageComponent);
    httpMock = TestBed.inject(HttpTestingController);
    store = TestBed.inject(MockStore);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
