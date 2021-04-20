import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a counter on HTML page', () => {
    const relativeDoc = fixture.nativeElement;
    expect(relativeDoc.querySelector(".left-button")).toBeDefined();
    expect(relativeDoc.querySelector(".right-button")).toBeDefined();
    expect(relativeDoc.querySelector(".count-label")).toBeDefined();
  });

  it('should have the math work', () => {
    component.increment();
    expect(component.myCounter.count).toEqual(1);
    component.decrement();
    expect(component.myCounter.count).toEqual(0); 
  });

  it('should not decrement count below 0', () => {
    expect(component.myCounter.count).toEqual(0); 
    component.decrement();
    expect(component.myCounter.count).toEqual(0); 
  })
});
