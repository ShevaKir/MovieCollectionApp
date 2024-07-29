import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { By } from '@angular/platform-browser';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should render toolbar', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('mat-toolbar')).toBeTruthy();
  });

  it('should render menu button', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('button')).toBeTruthy();
  });

  it('should toggle isViewMenu and emit toggleMenu event when toggleMenuButton is called', () => {
    jest.spyOn(component.toggleMenu, 'emit');
    const initialViewMenuState = component.isViewMenu;
    component.toggleMenuButton();
    expect(component.isViewMenu).toBe(!initialViewMenuState);
    expect(component.toggleMenu.emit).toHaveBeenCalledWith(component.isViewMenu);
  });

  it('should call toggleMenuButton when menu button is clicked', () => {
    jest.spyOn(component, 'toggleMenuButton');
    const button = fixture.debugElement.query(By.css('button'));
    button.triggerEventHandler('click', null);
    expect(component.toggleMenuButton).toHaveBeenCalled();
  });
});
