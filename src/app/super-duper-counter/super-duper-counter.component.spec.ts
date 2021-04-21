import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperDuperCounterComponent } from './super-duper-counter.component';

describe('SuperDuperCounterComponent', () => {
  let component: SuperDuperCounterComponent;
  let fixture: ComponentFixture<SuperDuperCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperDuperCounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperDuperCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should automatically increment after start button is pressed', () => {
    expect(component.myCounter.count).toEqual(0);
    component.start();
    setTimeout(() => {
      expect(component.myCounter.count).toBeGreaterThan(0);
    }, 600);
  });

  //it('should send a signal when the counter reaches a multiple of 20');
});
