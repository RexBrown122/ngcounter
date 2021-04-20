import { Component, OnInit, Input } from '@angular/core';
import {Counter} from '../counter';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  @Input() public counter: Counter;
  private _myCounter: Counter;

  constructor() { }

  ngOnInit(): void {
      if (this.counter !== undefined) {
        this._myCounter = this.counter;
      }
      else { 
        this._myCounter = new Counter();
      }
  }

  public get myCounter() {
    return this._myCounter;
  }

  increment() {
    this._myCounter.count++;
  }

  decrement() {
    if (this._myCounter.count > 0) {
      this._myCounter.count--;
    }
  }

}
