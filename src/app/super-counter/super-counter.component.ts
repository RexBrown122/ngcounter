import { Component, OnInit } from '@angular/core';
import { Counter } from '../counter';
import {CounterComponent} from '../counter/counter.component'

@Component({
  selector: 'app-super-counter',
  templateUrl: './super-counter.component.html',
  styleUrls: ['../counter/counter.component.css', './super-counter.component.css']
})
export class SuperCounterComponent extends CounterComponent implements OnInit {

  constructor() {
    super();
  }

  // ngOnInit(): void {
  // }
  increment() {
    this._myCounter.count += 3;
  }

  decrement() {
    if (this._myCounter.count >= 3) {
      this._myCounter.count -= 3;
    }
  }
}
