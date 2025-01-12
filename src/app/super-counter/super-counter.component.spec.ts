import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CounterComponent } from '../counter/counter.component';

import { SuperCounterComponent } from './super-counter.component';

describe('SuperCounterComponent', () => {
  let component: SuperCounterComponent;
  let fixture: ComponentFixture<SuperCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperCounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should be twice a big as a normal counter', () => {
  //   let elementWidth:string = fixture.nativeElement.querySelector('.super-counter-module').style.getPropertyValue('width');
  //   expect(elementWidth).toEqual('400px');
  // });

  it('should increment/decrement by 3 instead of 1', () => {
    component.increment();
    expect(component.myCounter.count).toEqual(3);
    component.decrement();
    expect(component.myCounter.count).toEqual(0);
  });

  it('should not decrement to be less than 0', () => {
    expect(component.myCounter.count).toEqual(0);
    component.decrement();
    expect(component.myCounter.count).toEqual(0);
  });

  it('should correctly add up the counter values of Counters when making a SuperCounter', () => {
    let cList = TestBed.createComponent(CounterComponent);
    let sCounter = fixture.debugElement.nativeElement;
    let cCounter = cList.debugElement.nativeElement;
    cCounter.querySelector('.counter-module');
    sCounter.querySelector('.super-counter-module');
    expect(cCounter.classList != sCounter.classList).toBeTruthy();
  });
});
