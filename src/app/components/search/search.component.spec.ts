import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchComponent } from './search.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { selectSearchQuery } from '../../store/selectors';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let store: MockStore;
  const initialState = { search: { query: 'test query' } };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        SearchComponent, // Import the standalone component here
        BrowserAnimationsModule, // Add BrowserAnimationsModule here
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        MatButtonModule,
        MatIconModule,
      ],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();

    store = TestBed.inject(MockStore);
    store.overrideSelector(selectSearchQuery, 'initial query'); // Override selector here
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize query from the store', () => {
    expect(component.query).toBe('initial query');
  });

  it('should emit queryEvent on search', () => {
    jest.spyOn(component.queryEvent, 'emit');
    component.query = 'search term';
    component.search();
    expect(component.queryEvent.emit).toHaveBeenCalledWith('search term');
  });

  it('should emit queryEvent with empty string on clearField', () => {
    jest.spyOn(component.queryEvent, 'emit');
    component.clearField();
    expect(component.queryEvent.emit).toHaveBeenCalledWith('');
    expect(component.query).toBe('');
  });
});
