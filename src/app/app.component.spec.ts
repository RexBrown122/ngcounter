import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Angular Counter'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Angular Counter');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Angular Counter');
  });

  it('should render a counter on HTML page', () => {
    const app = TestBed.createComponent(AppComponent);
    const fixture = app.nativeElement;
    expect(fixture.querySelector(".left-button")).toBeDefined();
    expect(fixture.querySelector(".right-button")).toBeDefined();
    expect(fixture.querySelector(".count-label")).toBeDefined();
  });

  it('should create new counters when you press the Create button', () => {
    
  });
});
