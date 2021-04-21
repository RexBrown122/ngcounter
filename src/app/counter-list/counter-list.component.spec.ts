import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CounterListComponent } from './counter-list.component';
import { Counter } from '../counter';

describe('CounterListComponent', () => {
  let component: CounterListComponent;
  let fixture: ComponentFixture<CounterListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initially have an empty list of Counters', () => {
    expect(component.counterList.length).toEqual(0);
  });

  it('should be able to create new Counters', () => {
    component.pushNewItem();
    expect(component.counterList.length).toEqual(1);
  });

  it('should render a Create button to make new Counters', () => {
    const button = fixture.nativeElement.querySelector('.create-button');
    expect(button).toBeDefined();
  });

  it('should replace 5 recent counters with a super counter when pressing the Create button', () => {
    component.pushNewItem();
    component.pushNewItem();
    component.pushNewItem();
    component.pushNewItem();
    component.pushNewItem();
    component.pushNewItem();
    expect(component.superCounterList.length).toEqual(1);
  });

  it('should replace 2 super counters and 5 counters with a super duper counter when pressing the Create button', () => {
    for (let i:number = 0; i < 18; i++) {
      component.pushNewItem();
    }
    expect(component.superDuperCounterList.length).toEqual(1);
  });

  it('should replace 3 super duper counters with a colossal counter', () => {
    for (let i:number = 0; i < 54; i++) {
      component.pushNewItem();
    }
    expect(component.colossalCounterList.length).toEqual(1);
  })
});
