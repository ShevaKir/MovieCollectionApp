import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SortComponent } from './sort.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('SortComponent', () => {
  let component: SortComponent;
  let fixture: ComponentFixture<SortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
        NoopAnimationsModule,
        SortComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the title', () => {
    const titleText = 'Sort Movies';
    component.title = titleText;
    fixture.detectChanges();

    const titleElement = fixture.debugElement.query(
      By.css('mat-label')
    ).nativeElement;
    expect(titleElement.textContent).toContain(titleText);
  });

  it('should emit selectionChange event with the correct value', () => {
    // Arrange
    const testValue = 'option1';
    const testLabel = 'Option 1';
    const options = [{ value: testValue, label: testLabel }];
    const event = { value: options[0].value };
  
    jest.spyOn(component.selectionChange, 'emit');
    component.onSelectionChange(event);
    expect(component.selectionChange.emit).toHaveBeenCalledWith(testValue);
  });
  
});
