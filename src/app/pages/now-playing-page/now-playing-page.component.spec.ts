import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NowPlayingPageComponent } from './now-playing-page.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

describe('NowPlayingPageComponent', () => {
  let component: NowPlayingPageComponent;
  let fixture: ComponentFixture<NowPlayingPageComponent>;
  let httpMock: HttpTestingController;
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NowPlayingPageComponent, HttpClientTestingModule],
      providers: [
        provideMockStore()
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NowPlayingPageComponent);
    httpMock = TestBed.inject(HttpTestingController);
    store = TestBed.inject(MockStore);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
