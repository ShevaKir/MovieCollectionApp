import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: AppComponent;
  beforeEach(() => {
    fixture = new AppComponent();
  });
  it('should create', () => {
    expect(fixture).toBeTruthy();
  });

  it('should sidebar is hidden', () => {
    fixture.toggleSidebar(false);
    expect(fixture.isViewMenu).toBeFalsy();
  });
  it('should sidebar is show', () => {
    fixture.toggleSidebar(true);
    expect(fixture.isViewMenu).toBeTruthy();
  });
});
